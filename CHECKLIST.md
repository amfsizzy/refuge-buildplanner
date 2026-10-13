# In-game test checklist

Português: [CHECKLIST.pt-BR.md](CHECKLIST.pt-BR.md)

We don't have access to the game files: the planner only knows what the server's **public item database** makes available. Everything below isn't published there, so it has to be measured in game. Pick an **open** item, test it and **[send your result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml)** with a screenshot of your Status window (class, level, base stats and gear with refine levels). Mention the item code (e.g. `r2`).

⚠️ Never post your account login, password, email or any personal information.

**Progress:** 36 of 58 items confirmed.

## Refine

*High priority* · The tool already adds the refine ATK/MATK of level 1 to 3 weapons. Still missing: level 4 weapons and armor refine.

**Open (7)**

- [ ] `r4` **ATK per refine: level 4 weapon**: Same test with a level 4 weapon. Lead: +2 per refine. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r6` **DEF/MDEF per refine: armor**: Note DEF and MDEF with the armor at +0, +2 and +4. Lead: +1 DEF every 2 refines. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r7` **DEF/MDEF per refine: shield**: Same test with a shield. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r8` **DEF/MDEF per refine: garment**: Same test with a garment. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r9` **DEF/MDEF per refine: shoes**: Same test with shoes. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r10` **DEF/MDEF per refine: headgear**: Same test with an upper headgear. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r11` **Set refine ("Per total set refine")**: With a full shadow set, change one piece's refine and check whether the set bonus adds up the refine of all pieces. Lead: some shadow refine bonuses only apply with the full set. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmed (4)</summary>

- [x] `r1` **ATK per refine: level 1 weapon**: Confirmado: Knife (arma nível 1) dá +0,5 ATK e MATK por refino, arredondado para baixo (ATK +0: 5, +1: 5, +2: 6, +4: 7; MATK 0, 0, 1, 2).
- [x] `r2` **ATK per refine: level 2 weapon**: Confirmado: Gemstone Knife (arma nível 2) dá +1 ATK e +1 MATK por refino (+0: 4/16, +1: 5/17, +2: 6/18, +4: 8/20). Bate com a pista de 0,5 × nível da arma por refino.
- [x] `r3` **ATK per refine: level 3 weapon**: Confirmado: Cowardice Blade (arma nível 3) dá +1,5 ATK e MATK por refino, arredondado para baixo (ATK +0: 13, +1: 14, +2: 16, +4: 19).
- [x] `r5` **MATK per refine**: Confirmado: o refino sobe o MATK no mesmo ritmo do ATK (0,5 × nível da arma), inclusive em armas sem MATK base (Knife e Cowardice Blade).

</details>

## ASPD

*High priority* · The tool only shows the ASPD cap today, not the actual value. Leads to confirm: AGI gives +1 ASPD every 10 points, and ASPD % bonuses scale with total AGI.

**Open (1)**

- [ ] `a3` **Weapon type**: With the same AGI, switch weapon types (dagger, sword, bow, staff…) and note the ASPD of each. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
  - Result: Primeiro dado: a adaga (com Blade Mastery 10) fica de 6 a 0 abaixo de "sem arma" conforme a AGI sobe (ver a1). Falta comparar outros tipos de arma.

<details>
<summary>Confirmed (4)</summary>

- [x] `a1` **ASPD curve from AGI**: Legend nível 105, sem itens, DEX 1, com Shadow Mastery 10 e Blade Mastery 10 (passivas de ASPD %). AGI 1/10/20/40/60/80/99 → sem arma: 148, 151, 155, 162, 169, 176, 182; com Gemstone Knife (adaga): 142, 146, 150, 158, 166, 175, 182. A curva inclui as passivas desse personagem.
- [x] `a2` **DEX effect on ASPD**: Confirmado: o DEX não mexe no ASPD. Com AGI 99 e a adaga, DEX 1 e DEX 50 deram 182 (abaixo do teto de 185 desse Legend). O tooltip do DEX no jogo só fala em ATK/MATK.
- [x] `a4` **Class**: Confirmado: o teto base é 180 para todas as classes. Só skills sobem o limite: Jester (Card Mastery e Sleight Mastery no máximo, +1 cada), Legend (Frenzy, +3 passivo; ativo fixa o ASPD em 193) e Dracomancer com espada (Weapon Quicken, +1).
- [x] `a5` **Hard ASPD cap**: Confirmado: o teto máximo do servidor é 190. Skills podem passar disso: o Legend chega a 193 com Frenzy.

</details>

## Max HP and SP

*Medium priority* · Left out of the calculation today because they depend on the class.

**Open (2)**

- [ ] `h1` **Base HP and SP by class and level**: For each class you play, note max HP and SP with VIT and INT at 1, at a few levels (e.g. 1, 30, 60, 99). ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `h2` **VIT on HP**: Change only VIT (e.g. 1 → 50) and note how much HP goes up. The Codex says +1% of base HP per point. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmed (1)</summary>

- [x] `h3` **INT does not change max SP**: Confirmado: INT não aumenta o SP máximo, só a regen de SP.

</details>

## Stat points

*High priority* · Solved and already in the tool: the calculator shows points used and left from the points-per-level table of the server. Cost: 1 up to 49, 2 from 49→50 up to 98, and 3 for 98→99.

*Nothing open in this section.*

<details>
<summary>Confirmed (6)</summary>

- [x] `p1` **Free points at level 1**: Confirmado: 18 pontos no nível 1.
- [x] `p2` **Points per regular level up**: Resolvido pela tabela do servidor: +3 por nível do 1 ao 9, +2 por nível até o 99, +4 do 101 ao 125, +1 a partir do 126 (trava em 447 no nível 144).
- [x] `p5` **Bonus at levels ending in 0**: Resolvido pela tabela do servidor: os níveis terminados em 0 dão +10 no total (inclusive 110 e 120).
- [x] `p6` **Other characters' spent points**: Tabela do servidor conferida com resets: nível 49 = 154 e nível 105 = 334 batem. Nível 85: o reset deu 259 e a tabela diz 258 (1 ponto de diferença, a reconferir).
- [x] `p3` **Stat cost**: Confirmado: custa 1 até o 49, 2 do 49→50 até o 97→98, e 3 do 98→99. Não há outro degrau.
- [x] `p4` **Base stat cap at level 150**: Confirmado: o atributo base continua limitado a 99, mesmo no nível 150.

</details>

## Formulas the tool already uses

*Medium priority* · They come from the site's Codex, which was already wrong once (INT/SP). How to test: with no gear, enter the same level and stats as the character in the tool and compare each number in the Status window with the tool's Status tab.

**Open (4)**

- [ ] `f3` **Critical**: Formula used: 1 + LUK÷3 + 2 per 10 LUK. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f6` **Soft DEF and MDEF**: It is the number after the "+" in DEF and MDEF in the Status window. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
  - Result: Corrigido: DEF suave = nível + VIT (+5 a cada 10 de VIT) e MDEF suave = nível÷4 + INT + DEX÷5 + VIT÷5; os dois bateram em dois prints. Falta um print com VIT diferente de 1 para confirmar a parte do VIT.
- [ ] `f7` **STR → DEX swap with ranged weapons**: With a bow or revolver, check whether ATK comes from DEX instead of STR. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f10` **Damage reduction from DEF and MDEF**: The Defenses tooltip says: 100 DEF reduces about 18%, 275 reduces 1/3 and 500 reduces 50%; 50 MDEF reduces about 30% and 100 MDEF about 55%. The classic formula matches DEF and 50 MDEF, but would give 45% for 100 MDEF. If anyone can test it (damage taken from the same attack at different MDEF), please confirm. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmed (6)</summary>

- [x] `f1` **HIT**: Corrigido: HIT = Level + 2×DEX + LUK÷5 + 200 (a ferramenta usava 175). Bateu em dois prints (307 e 405).
- [x] `f2` **FLEE**: Confirmado: a fórmula bate. Os +70 que sobravam eram Improve Dodge 10 (+40) e Shadow Mastery 10 (+30).
- [x] `f4` **Perfect Dodge**: Confirmado: 1 + (AGI + LUK)÷10 (1 com tudo em 1; 11 com AGI 99). É o número depois do "+" no FLEE.
- [x] `f5` **Status ATK and MATK**: Corrigido: ATK e MATK de status somam o nível base ÷ 4, e cada 10 de DEX dá +1 MATK. ATK = nível÷4 + STR + DEX÷5 + DEX÷20 + LUK÷3; MATK = nível÷4 + INT×1,5 + DEX÷5 + DEX÷10 + LUK÷3. Bateu em dois prints (27/27 e 39/45).
- [x] `f8` **Bonus every 10 stat points**: Confirmado pelos tooltips do jogo (a cada 10 do total do atributo): STR +1 ATK; AGI +1 FLEE e +1 ASPD; VIT +5 DEF e MDEF (fixos); INT +1 MATK; DEX +1 ATK e MATK; LUK +2 Critical e +1% de dano crítico.
- [x] `f9` **Casting and critical damage**: Confirmado pelos tooltips do jogo: o crítico dá 1,2× de dano (+1% a cada 10 de LUK) e ignora FLEE. Cada DEX reduz 0,25% do cast variável e cada INT 0,125%; DEX×2 + INT = 400 zera o cast variável. O cast fixo só cai com equipamento. A ferramenta mostra os dois no Status.

</details>

## Gear bonuses

*Low priority* · Cases the tool leaves out because it isn't sure.

**Open (2)**

- [ ] `e1` **Grand Peco Card set**: With the partner card (Peco Peco), does the set's DEF+5 apply? The tool doesn't add it because it didn't find the partner in the database. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `e2` **Choice bonus (Metal Boots)**: "STR, INT or DEX +2": which stat gets the bonus? ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmed (1)</summary>

- [x] `e3` **Shadow "Piece Bonus" at +0**: Confirmado: o Piece Bonus vale com a peça sozinha, sem o conjunto completo.

</details>

## Passive skills

*Medium priority* · The tool only adds a passive with a weapon type it's sure about. Compare the Status window with and without the skill (or at level 0 vs max).

**Open (4)**

- [ ] `s1` **Does Long Sword count as a sword?**: With a Long Sword equipped, check whether Blade Mastery / Advanced Blade Mastery add their ATK and HIT. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `s2` **Do Two-Handed Sword, Knight Sword and Bone Sword count as swords?**: Same test with each one (e.g. Assassin or Rogue with Blade Mastery). Dark Knights now use Blade Dominion, which only gives ATK with a one-handed sword. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `s3` **Does Heavy Bow count as a bow?**: With a Heavy Bow equipped, check whether Bow Mastery adds DEX. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `s4` **Perfection Mastery (Ronin)**: Critical already confirmed (25 + 3/level). Still open: does the "+25 more MATK at Lv 5" apply only at level 5 or from 5 up? Compare MATK at levels 5 and 6. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
  - Result: Confirmado no jogo: com espada de uma mão, Critical +25 e +3 por nível, HIT -300, MATK +15 por nível (igual à descrição do site; a outra fórmula, 30 + 2/nível, estava desatualizada). · Falta: o "+25 more at Lv 5" do MATK vale só no nível 5 ou do 5 em diante? Comparar o MATK nos níveis 5 e 6.

<details>
<summary>Confirmed (1)</summary>

- [x] `s5` **Crit/FLEE bonuses of scythe and katar masteries without the weapon**: Confirmado: Katar Mastery e as masteries de foice só dão os bônus com a arma equipada. No jogo, a maioria das masteries tem a linha "Requires a \[arma\] to take effect", mesmo quando a descrição do site não tem.

</details>

## Routes confirmed in game

*When passing through the maps* · How to reach each point using the server's teleports. Routes noted here show up in the tool's Farm tab.

*Nothing open in this section.*

<details>
<summary>Confirmed (13)</summary>

- [x] `t1` **Morroc's Guild**: Kafra Orfanato \> Morroc's Guild
- [x] `t2` **Geffen Cave**: Dungeon Caravan \> Geffen Cave
- [x] `t3` **Forest Maze**: Dungeon Caravan \> Forest Maze
- [x] `t4` **Judge Headquarters**: Kafra Orfanato \> Prontera (portal spot 8) \> Prontera Castle \> Judge Headquarters · ou · Dungeon Caravan \> Judge Headquarters (Judge Only)
- [x] `t5` **Airship Crash Site**: Dungeon Caravan \> Airship Crash Site
- [x] `t6` **Kiel Hyre Factory**: Dungeon Caravan \> Kafra Abandoned Warehouse \> yuno\_fild09 \> yuno\_fild08 (spot 4)
- [x] `t7` **Mora**: Kafra Orfanato \> Mora
- [x] `t8` **Dragon Nest**: Dungeon Caravan \> Dragon Nest
- [x] `t9` **Crystal Caves**: Kafra Orfanato \> Hugel (barco) \> Frozen Fields \> snow\_fild02 \> snow\_fild04 (spot 3)
- [x] `t10` **Frontier/Maroll**: Kafra Orfanato \> Frontier
- [x] `t11` **Nomad Village**: Kafra Orfanato \> Prontera (kafra) \> Nomad Village
- [x] `t12` **Abandoned Kafra Warehouse**: Dungeon Caravan \> Abandoned Kafra Warehouse
- [x] `t13` **Sky Garden**: Kafra Orfanato \> Umbala \> ygg\_dun01 \> ygg\_dun02 \> ygg\_fild01 \> ygg\_fild02 (portal spot 5)

</details>

## Orphanage teleports

*When passing through the maps* · The site says at which Orphanage investment level each teleport unlocks.

**Open (2)**

- [ ] `o1` **Level 60: Juperos, Crystal Caves, Thanatos Tower and Kiel Hyre**: Confirm these destinations show up at Skia Nerius when the Orphanage reaches level 60. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `o2` **Level 105: Abyss Lake and Sky Garden**: Confirm these destinations unlock at level 105. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

---

*Results are written as the testers noted them (often in Portuguese).*
