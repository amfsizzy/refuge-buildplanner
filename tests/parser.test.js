// Run: node tests/parser.test.js   (no dependencies; reads ../index.html and runs its tooltip parser)
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');

var PIECES = {
  vars: ['STAT_KEYS', 'DERIVED_LABELS', 'RE_PER_REFINE', 'RE_IF_REFINE', 'RE_REFINE_OR_HIGHER', 'RE_SET_REFINE',
    'RE_SET_REFINE_AT', 'RE_SET_REFINE_PER', 'RE_NAMED_SET_BONUS', 'RE_SET_BONUS', 'RE_SET_HEADER',
    'RE_PIECE_BONUS', 'RE_BASE_LEVEL', 'RE_REFINE_LINE', 'RE_INLINE_REFINE', 'RE_BONUS_LABEL',
    'RE_NUMBER_FIRST', 'RE_CONNECTING_END', 'EFFECT_RE', 'EFFECT_SKIP_LABEL', 'COUNTED_FLAT', 'RE_FIXED_PLUS_SCALED', 'EFFECT_COMPOUNDS', 'EFFECT_CANON'],
  funcs: ['blankBonus', 'addBonus', 'unlabel', 'parseLines', 'normEffectLabel', 'parseEffects', 'addEffects', 'effectLines',
    'joinContinuations', 'splitScaledLine', 'parseTooltip', 'joinWrapped', 'parseStatBonus', 'parsePctBonus',
    'blockActive']
};

function fail(msg){ console.error('SETUP ERROR: ' + msg); process.exit(1); }

// Source of `function NAME(...){...}` by brace matching (strings and comments skipped).
function extractFunction(src, name){
  var start = src.indexOf('function ' + name + '(');
  if (start === -1) fail('function ' + name + ' not found');
  var i = src.indexOf('{', start), depth = 0, q = null;
  for (; i < src.length; i++){
    var c = src[i];
    if (q){ if (c === '\\') i++; else if (c === q) q = null; continue; }
    if (c === '/' && src[i + 1] === '/'){ i = src.indexOf('\n', i); if (i === -1) break; continue; }
    if (c === '"' || c === "'"){ q = c; continue; }
    if (c === '{') depth++;
    else if (c === '}' && --depth === 0) return src.slice(start, i + 1);
  }
  return fail('function ' + name + ' is not closed');
}
// Statement text from `start` up to the first line that ends with ";" (optionally followed by a comment).
function untilStatementEnd(text, what){
  var lines = text.split('\n'), out = [];
  for (var i = 0; i < lines.length; i++){
    out.push(lines[i]);
    if (/;\s*(\/\/.*)?$/.test(lines[i])) return out.join('\n');
  }
  return fail(what + ' has no end');
}
function extractVar(src, name){
  var m = new RegExp('^[ \\t]*var ' + name + ' =', 'm').exec(src);
  if (!m) fail('var ' + name + ' not found');
  return untilStatementEnd(src.slice(m.index), 'var ' + name);
}
// The description rewrite inside indexDb: `var parseable = desc.replace(...)...;`
function extractRewrite(src){
  var at = src.indexOf('var parseable = desc');
  if (at === -1) fail('description rewrite (var parseable) not found');
  return 'function rewriteDesc(desc){ ' + untilStatementEnd(src.slice(at), 'description rewrite') + ' return parseable; }';
}

function load(htmlPath){
  var html = fs.readFileSync(htmlPath, 'utf8').replace(/\r\n/g, '\n');
  var m = /<script>([\s\S]*?)<\/script>/.exec(html);
  if (!m) fail('inline script not found in ' + htmlPath);
  var src = m[1];
  var code = ['var LANG = "en"; function L(pt, en){ return en; } function shownLevel(){ return 0; }']
    .concat(PIECES.vars.map(function(n){ return extractVar(src, n); }))
    .concat(PIECES.funcs.map(function(n){ return extractFunction(src, n); }))
    .concat([extractRewrite(src)]).join('\n');
  var ctx = vm.createContext({});
  vm.runInContext(code + '\nthis.rewriteDesc = rewriteDesc; this.parseTooltip = parseTooltip; this.blockActive = blockActive;' +
    ' this.blankBonus = blankBonus; this.addBonus = addBonus; this.addEffects = addEffects; this.effectLines = effectLines;', ctx);
  // Active bonus + effects of an equipped item at a refine level, same rules as itemOwnBonuses/itemOwnEffects
  // (sets and base-level blocks stay inactive: level 0).
  function active(desc, refine){
    var blocks = ctx.parseTooltip(ctx.rewriteDesc(desc)), bonus = ctx.blankBonus(), eff = {};
    blocks.forEach(function(b){
      var k = ctx.blockActive(b, refine, 0);
      if (k){ ctx.addBonus(bonus, b.bonus, k); ctx.addEffects(eff, b.effects, k); }
    });
    var nz = {};
    Object.keys(bonus).forEach(function(key){ if (bonus[key]) nz[key] = bonus[key]; });
    return { bonus: nz, effects: ctx.effectLines(eff), blocks: blocks };
  }
  return { active: active, ctx: ctx };
}
module.exports = { load: load };

function main(){
  var P = load(path.join(__dirname, '..', 'index.html'));
  function allStats(n){ var o = {}; ['str', 'agi', 'vit', 'int', 'dex', 'luk'].forEach(function(k){ o[k] = n; }); return o; }

  // Dune Gem of First Sands: "... within 3 s with" / "+50% Damage" is one sentence, not a generic Damage bonus.
  var DUNE_SNIPPET = 'Cross Impact can be combo-cast after Omega within 3 s with\n+50% Damage';
  var DUNE_GEM = [
    'Alpha +5 Range (becomes Ranged Damage)', 'Omega +5 Range (becomes Ranged Damage)',
    'Cross Impact Range +5 (becomes Ranged Damage)', 'Cross Impact no longer moves you to the target',
    DUNE_SNIPPET, 'Cross Impact Damage -20%', 'All Stats -5', '', 'Per Refine:', 'Cross Impact Damage +2%',
    'Critical Rate +2', '', 'If refine is +10:', 'All Stats +5', '', 'Takes effect 15 seconds after equipping.'].join('\n');

  // [name, description, refine, expected]  (expected values confirmed with the user)
  var CASES = [
    ['ATK -5', 'ATK -5', 0, { bonus: { atk: -5 } }],
    ['AGI -2', 'AGI -2', 0, { bonus: { agi: -2 } }],
    ['All Stats -1', 'All Stats -1', 0, { bonus: allStats(-1) }],
    ['ASPD -3%', 'ASPD -3%', 0, { bonus: { aspdPct: -3 } }],
    ['STR + 3', 'STR + 3', 0, { bonus: { str: 3 } }],
    ['two-line set is a set block, not base', 'X Set\nBonus:\nSTR +2', 0, { bonus: {}, setBlock: true }],
    ['Every Refine ATK +2 at +5', 'Every Refine:\nATK +2', 5, { bonus: { atk: 10 } }],
    ['Refine +9 LUK +5 at +8', 'Refine +9:\nLUK +5', 8, { bonus: {} }],
    ['Refine +9 LUK +5 at +9', 'Refine +9:\nLUK +5', 9, { bonus: { luk: 5 } }],
    ['Refine 9+ INT +5 at +8', 'Refine 9+: INT +5', 8, { bonus: {} }],
    ['Refine 9+ INT +5 at +9', 'Refine 9+: INT +5', 9, { bonus: { int: 5 } }],
    ['+7 refine Max HP +5% at +6', '+7 refine: Max HP +5%', 6, { bonus: {}, effects: [] }],
    ['+7 refine Max HP +5% at +7', '+7 refine: Max HP +5%', 7, { effects: ['Max HP +5%'] }],
    ['Special: All Stats +1', 'Special: All Stats +1', 0, { bonus: allStats(1) }],
    ['Added: Critical +5', 'Added: Critical +5', 0, { bonus: { crit: 5 } }],
    ['Total DEF: +15%', 'Total DEF: +15%', 0, { effects: ['Total DEF +15%'] }],
    ['Effect: STR +3 is ignored', 'Effect: STR +3', 0, { bonus: {}, effects: [] }],
    ['HP Bonus: +50', 'HP Bonus: +50', 0, { effects: ['Max HP +50'] }],
    ['HP Bonus: 20%', 'HP Bonus: 20%', 0, { effects: ['Max HP +20%'] }],
    ['SP Bonus: +10', 'SP Bonus: +10', 0, { effects: ['Max SP +10'] }],
    ['Perfect Dodge: 020', 'Perfect Dodge: 020', 0, { bonus: { pdodge: 20 } }],
    ['Final Damage Taken- 3%', 'Final Damage Taken- 3%', 0, { effects: ['Final Damage Taken -3%'] }],
    ['SP Consumption + SP Cost Reduction', 'SP Consumption: -10%\nSP Cost Reduction: 13%', 0, { effects: ['SP Cost -23%'] }],
    ['SP Consumption + SP Cost +', 'SP Consumption -15%\nSP Cost +10%', 0, { effects: ['SP Cost -5%'] }],
    ['Long Range Damage aliases merge', 'Ranged Attack +5%\nOn ranged attacks +3%\nLong-Range Damage +2%', 0, { effects: ['Long Range Damage +10%'] }],
    ['Ranged Attack vs Boss stays separate', 'Ranged Attack vs Boss +5%', 0, { absent: ['Long Range Damage +5%'] }],
    ['fold: Damage vs Fire Element + DMG vs Fire enemies', 'Damage vs Fire Element +3%\nDMG vs Fire enemies +2%', 0, { effects: ['DMG vs Fire +5%'] }],
    ['fold: Resist/Element Resistance', 'Dark Element Resist +2%\nDark Resistance +3%', 0, { effects: ['Dark Resistance +5%'] }],
    ['fold: After-Cast Delay', 'After-Cast Delay -5%\nAfter Cast Delay -5%', 0, { effects: ['After Cast Delay -10%'] }],
    ['fold: Received/Taken', 'Final Damage Received -3%\nFinal Damage Taken -2%', 0, { effects: ['Final Damage Taken -5%'] }],
    ['fold: Experience Received', 'Experience Received +5%\nEXP Received +5%', 0, { effects: ['EXP Received +10%'] }],
    ['fold: ATK and MATK label', 'ATK & MATK +2%', 0, { effects: ['ATK/MATK +2%'] }],
    ['fold: vs Large Size / Bosses / Angel Race', 'Damage vs Large +1%\nDMG vs Large Size +2%\nDMG vs Bosses +3%\nDMG vs Boss +1%', 0, { effects: ['Damage vs Large Size +3%', 'DMG vs Boss +4%'] }],
    ['Undead race vs element stay apart', 'Damage vs Undead +5%\nDMG vs Undead Race +1%\nDamage vs Undead Element +3%', 0, { effects: ['Damage vs Undead +6%', 'Damage vs Undead Element +3%'] }],
    ['cast: Variable/Fixed/Cast stay apart', 'Variable Cast -1%\nVariable Cast Time -1%\nFixed Cast -2%\nCast -3%', 0, { effects: ['Cast Time -3%', 'Fixed Cast -2%', 'Variable Cast Time -2%'] }],
    ['defense: Total vs Flat vs bare', 'Total Defense +1%\nTotal DEF +1%\nFlat DEF +2%\nDEF +3%\nDefense +1%', 0, { effects: ['DEF +4%', 'Flat Defense +2%', 'Total DEF +2%'] }],
    ['penetration spellings merge, not with DEF', 'Defense and Magic Defense Penetration +2%\nDefense/Magic Defense Penetration +3%\nDEF +1%', 0, { effects: ['DEF +1%', 'Defense and Magic Defense Penetration +5%'] }],
    ['Heal SP Cost stays intact', 'Heal SP Cost -5%', 0, { effects: ['Heal SP Cost -5%'] }],
    ['Healing Received is not Taken', 'Healing Received +5%', 0, { effects: ['Healing Received +5%'] }],
    ['Heal SP Cost stays separate', 'Heal SP Cost -10%', 0, { effects: ['Heal SP Cost -10%'] }],
    ['number first: +15% Damage vs Earth', '+15% Damage vs Earth', 0, { effects: ['DMG vs Earth +15%'] }],
    ['number first: -10% Damage vs Dark', '-10% Damage vs Dark', 0, { effects: ['DMG vs Dark -10%'] }],
    ['number first: element list kept whole', '+10% Damage vs Fire/Water/Earth/Wind/Holy', 0,
      { effects: ['Damage vs Fire/Water/Earth/Wind/Holy +10%'] }],
    ['number first: -1 second is ignored', '-1 second', 0, { bonus: {}, effects: [] }],
    ['wrapped label then +10 still joins', 'Magic Defense Penetration\n+10', 0, { effects: ['Magic Defense Penetration +10'] }],
    ['sentence ending in "with" keeps +50% Damage joined', DUNE_SNIPPET, 0, { bonus: {}, absent: ['Damage +50%', 'Damage'] }],
    ['Dune Gem: base All Stats -5, no generic Damage', DUNE_GEM, 0, { bonus: allStats(-5), absent: ['Damage +50%', 'Damage'] }],
    ['Dune Gem: Cross Impact Damage -20% effect', DUNE_GEM, 0,
      { effects: ['Alpha +5', 'Cross Impact can be combo-cast after Omega within 3 s with +50%', 'Cross Impact Damage -20%', 'Cross Impact Range +5', 'Omega +5'] }]
  ];

  function same(a, b){ return JSON.stringify(a) === JSON.stringify(b); }
  var failed = 0;
  console.log('Case'.padEnd(42) + 'Result  Expected vs got');
  CASES.forEach(function(c){
    var exp = c[3], got = P.active(c[1], c[2]), problems = [];
    if (exp.bonus && !same(exp.bonus, got.bonus)) problems.push('bonus ' + JSON.stringify(exp.bonus) + ' vs ' + JSON.stringify(got.bonus));
    if (exp.effects && !same(exp.effects, got.effects)) problems.push('effects ' + JSON.stringify(exp.effects) + ' vs ' + JSON.stringify(got.effects));
    // exp.absent: effect lines that must NOT show up (exact text), e.g. a generic "Damage +50%"
    (exp.absent || []).forEach(function(t){ if (got.effects.indexOf(t) !== -1) problems.push('unexpected effect ' + t); });
    if (exp.setBlock){
      if (!got.blocks.some(function(b){ return b.kind === 'set'; })) problems.push('no set block');
      if (got.blocks.some(function(b){ return b.kind === 'base' && b.bonus.str; })) problems.push('STR landed in base');
    }
    var ok = !problems.length;
    if (!ok) failed++;
    console.log(c[0].padEnd(42) + (ok ? 'OK      ' : 'FAIL    ') + problems.join('; '));
  });
  console.log('\n' + (CASES.length - failed) + '/' + CASES.length + ' passed');
  process.exit(failed ? 1 : 0);
}
if (require.main === module) main();
