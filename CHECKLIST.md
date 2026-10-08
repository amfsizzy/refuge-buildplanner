# In-game test checklist

Português: [CHECKLIST.pt-BR.md](CHECKLIST.pt-BR.md)

We don't have access to the game files: the planner only knows what the server's **public item database** makes available. Everything below isn't published there, so it has to be measured in game. Pick an **open** item, test it and **[send your result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml)** with a screenshot of your Status window (class, level, base stats and gear with refine levels). Mention the item code (e.g. `r2`).

⚠️ Never post your account login, password, email or any personal information.

**Progress:** 17 of 52 items confirmed.

## Refine

*High priority* · The tool doesn't add the ATK/DEF that refining gives yet, only the bonuses written in the tooltip.

**Open (11)**

- [ ] `r1` **ATK per refine: level 1 weapon**: Note the ATK in the Status window with the weapon at +0 and at two other refines (e.g. +4 and +7). This shows whether the gain per refine is fixed or changes from some point on. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r2` **ATK per refine: level 2 weapon**: Same test with a level 2 weapon (the level is shown in the item details). ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r3` **ATK per refine: level 3 weapon**: Same test with a level 3 weapon. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r4` **ATK per refine: level 4 weapon**: Same test with a level 4 weapon. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r5` **MATK per refine**: With a magic weapon (staff, book…), check whether MATK goes up when refining, and by how much. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r6` **DEF/MDEF per refine: armor**: Note DEF and MDEF with the armor at +0 and at +N. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r7` **DEF/MDEF per refine: shield**: Same test with a shield. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r8` **DEF/MDEF per refine: garment**: Same test with a garment. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r9` **DEF/MDEF per refine: shoes**: Same test with shoes. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r10` **DEF/MDEF per refine: headgear**: Same test with an upper headgear. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `r11` **Set refine ("Per total set refine")**: With a full shadow set, change one piece's refine and check whether the set bonus adds up the refine of all pieces. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

## ASPD

*High priority* · The tool only shows the ASPD cap today, not the actual value.

**Open (4)**

- [ ] `a1` **ASPD curve from AGI**: With the same weapon and DEX, note the ASPD with AGI at 1, 20, 40, 60, 80 and 99. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `a2` **DEX effect on ASPD**: With the same weapon and AGI, change only DEX (e.g. 1 and 60) and see whether ASPD changes. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `a3` **Weapon type**: With the same AGI, switch weapon types (dagger, sword, bow, staff…) and note the ASPD of each. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `a4` **Class**: Two different classes with the same AGI and weapon. The site says the cap is the same for all; we still need to know whether the curve up to the cap is too. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

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

*High priority* · Not in the tool yet. Provisional rule: 10 points at level 1, +2 per level, +10 every 10 levels; raising a stat costs 1 point up to 49 and 2 from 50 on.

**Open (2)**

- [ ] `p1` **Free points at level 1**: On a new level 1 character, how many stat points are there to spend? The provisional rule uses 10. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `p2` **Total points at level 100**: Under the current rule it would be 308. Add the points already spent (each stat's cost from 1) to the ones still free on a level 100 character. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

<details>
<summary>Confirmed (2)</summary>

- [x] `p3` **Stat cost above 50**: Confirmado: o custo não sobe mais. Do 49 para o 50 passa a custar 2 e fica em 2 até o máximo.
- [x] `p4` **Base stat cap at level 150**: Confirmado: o atributo base continua limitado a 99, mesmo no nível 150.

</details>

## Formulas the tool already uses

*Medium priority* · They come from the site's Codex, which was already wrong once (INT/SP). Without gear, compare the Status window with the tool's Status tab.

**Open (7)**

- [ ] `f1` **HIT**: Formula used: Level + 2×DEX + LUK÷5 + 175. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f2` **FLEE**: Formula used: Level + AGI + AGI÷10 + LUK÷5 + 100. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f3` **Critical**: Formula used: 1 + LUK÷3 + 2 per 10 LUK. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f4` **Perfect Dodge**: Formula used: 1 + (AGI + LUK)÷10, up to 100. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f5` **Status ATK and MATK**: Compare ATK and MATK (min–max) in the Status window with the tool's Status tab. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f6` **Soft DEF and MDEF**: It is the number after the "+" in DEF and MDEF in the Status window. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `f7` **STR → DEX swap with ranged weapons**: With a bow or revolver, check whether ATK comes from DEX instead of STR. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

## Gear bonuses

*Low priority* · Cases the tool leaves out because it isn't sure.

**Open (3)**

- [ ] `e1` **Grand Peco Card set**: With the partner card (Peco Peco), does the set's DEF+5 apply? The tool doesn't add it because it didn't find the partner in the database. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `e2` **Choice bonus (Metal Boots)**: "STR, INT or DEX +2": which stat gets the bonus? ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `e3` **Shadow "Piece Bonus" at +0**: A single shadow piece, without the set: does the "Piece Bonus" apply? ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))

## Passive skills

*Medium priority* · The tool only adds a passive with a weapon type it's sure about. Compare the Status window with and without the skill (or at level 0 vs max).

**Open (4)**

- [ ] `s1` **Does Long Sword count as a sword?**: With a Long Sword equipped, check whether Blade Mastery / Advanced Blade Mastery add their ATK and HIT. ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
- [ ] `s2` **Do Two-Handed Sword, Knight Sword and Bone Sword count as swords?**: Same test with each one (e.g. Dark Knight with a Knight Sword and Blade Mastery). ([send result](https://github.com/amfsizzy/refuge-buildplanner/issues/new?template=test-result.yml))
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
