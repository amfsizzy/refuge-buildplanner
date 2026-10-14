# In-game test checklist

Português: [CHECKLIST.pt-BR.md](CHECKLIST.pt-BR.md)

We don't have access to the game files: the planner only knows what the server's **public item database** makes available. Everything below isn't published there, so it has to be measured in game. Pick an **open** item, follow its steps and post your result in the **[Refuge Build Planner thread](https://discord.com/channels/1500898812942745602/1557950291347771462)** on the server's Discord, with a screenshot of your Status window (class, level, base stats and gear with refine levels). Mention the item code (e.g. `r2`).

⚠️ Never post your account login, password, email or any personal information.

**Progress:** 40 of 58 items confirmed.

## Refine

*High priority* · The tool already adds weapon refine (level 4 by the rule, still to be measured) and body armor refine. Still to test: shield, garment, shoes and headgear.

**Open (4)**

- [ ] `r7` **How much DEF/MDEF does refine add to a shield?**
  1. Equip a shield at +0 and open the Status window (Alt+A).
  2. Note DEF and MDEF (the left number, before the "+").
  3. Repeat with the same piece at +1, +2 and +4 (another copy of it is fine).
  4. Send the screenshots with the piece name and the refine of each.
  - Result: A pista diz uma regra geral para "armadura" (+1 DEF a cada 2 refinos), sem separar por peça. Um teste com escudo confirma; se bater, aplico nos quatro (escudo, capa, calçado e chapéu).
- [ ] `r8` **How much DEF/MDEF does refine add to a garment?**
  1. Equip a garment at +0 and open the Status window (Alt+A).
  2. Note DEF and MDEF (the left number, before the "+").
  3. Repeat with the same piece at +1, +2 and +4 (another copy of it is fine).
  4. Send the screenshots with the piece name and the refine of each.
- [ ] `r9` **How much DEF/MDEF does refine add to a pair of shoes?**
  1. Equip a pair of shoes at +0 and open the Status window (Alt+A).
  2. Note DEF and MDEF (the left number, before the "+").
  3. Repeat with the same piece at +1, +2 and +4 (another copy of it is fine).
  4. Send the screenshots with the piece name and the refine of each.
- [ ] `r10` **How much DEF/MDEF does refine add to an upper headgear?**
  1. Equip an upper headgear at +0 and open the Status window (Alt+A).
  2. Note DEF and MDEF (the left number, before the "+").
  3. Repeat with the same piece at +1, +2 and +4 (another copy of it is fine).
  4. Send the screenshots with the piece name and the refine of each.

<details>
<summary>Confirmed (7)</summary>

- [x] `r1` **ATK per refine: level 1 weapon**: Confirmado: Knife (arma nível 1) dá +0,5 ATK e MATK por refino, arredondado para baixo (ATK +0: 5, +1: 5, +2: 6, +4: 7; MATK 0, 0, 1, 2).
- [x] `r2` **ATK per refine: level 2 weapon**: Confirmado: Gemstone Knife (arma nível 2) dá +1 ATK e +1 MATK por refino (+0: 4/16, +1: 5/17, +2: 6/18, +4: 8/20). Bate com a pista de 0,5 × nível da arma por refino.
- [x] `r3` **ATK per refine: level 3 weapon**: Confirmado: Cowardice Blade (arma nível 3) dá +1,5 ATK e MATK por refino, arredondado para baixo (ATK +0: 13, +1: 14, +2: 16, +4: 19).
- [x] `r4` **ATK per refine: level 4 weapon**: Decidido pelo jogador: arma nível 4 dá +2 ATK e MATK por refino (0,5 × nível, a mesma regra confirmada nos níveis 1 a 3).
- [x] `r5` **MATK per refine**: Confirmado: o refino sobe o MATK no mesmo ritmo do ATK (0,5 × nível da arma), inclusive em armas sem MATK base (Knife e Cowardice Blade).
- [x] `r6` **DEF/MDEF per refine: armor**: Confirmado: Padded Armor (DEF base 22) ficou com 23 em +1, 23 em +2 e 24 em +4. Ou seja, +1 DEF a cada 2 refinos, arredondado para cima, e nenhum MDEF.
- [x] `r11` **Set refine ("Per total set refine")**: Resolvido pelo texto das peças: o refino do conjunto é a soma dos refinos das peças equipadas. A ferramenta já calcula "Set refine N+:" e "Per (N) total set refine(s):" com o conjunto completo. Formas condicionais ("Set refine 9+, while poisoned:") ficam de fora.

</details>

## ASPD

*High priority* · The tool only shows the ASPD cap today, not the actual value. Leads to confirm: AGI gives +1 ASPD every 10 points, and ASPD % bonuses scale with total AGI.

**Open (1)**

- [ ] `a3` **How much does each weapon type change ASPD?**
  1. Take the weapon off and note the ASPD from the Status window (no buffs or ASPD items).
  2. Equip one weapon of each type your class can use (dagger, sword, bow, staff…), with no ASPD cards or options, and note the ASPD of each.
  3. Don't change AGI or DEX between swaps.
  4. Send your class, base AGI and DEX, and the list "weapon type → ASPD".
  - Result: Primeiro dado: a adaga (com Blade Mastery 10) fica de 6 a 0 abaixo de "sem arma" conforme a AGI sobe (ver a1). Falta comparar outros tipos de arma.

<details>
<summary>Confirmed (4)</summary>

- [x] `a1` **ASPD curve from AGI**: Legend nível 105, sem itens, DEX 1, com Shadow Mastery 10 e Blade Mastery 10 (passivas de ASPD %). AGI 1/10/20/40/60/80/99 → sem arma: 148, 151, 155, 162, 169, 176, 182; com Gemstone Knife (adaga): 142, 146, 150, 158, 166, 175, 182. A curva inclui as passivas desse personagem. Extra: com AGI 101 (99 + 2 de bônus) o ASPD foi a 184.
- [x] `a2` **DEX effect on ASPD**: Confirmado: o DEX não mexe no ASPD. Com AGI 99 e a adaga, DEX 1 e DEX 50 deram 182 (abaixo do teto de 185 desse Legend). O tooltip do DEX no jogo só fala em ATK/MATK.
- [x] `a4` **Class**: Confirmado: o teto base é 180 para todas as classes. Só skills sobem o limite: Jester (Card Mastery e Sleight Mastery no máximo, +1 cada), Legend (Frenzy, +3 passivo; ativo fixa o ASPD em 193) e Dracomancer com espada (Weapon Quicken, +1).
- [x] `a5` **Hard ASPD cap**: Confirmado: o teto máximo do servidor é 190. Skills podem passar disso: o Legend chega a 193 com Frenzy.

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

## Max HP and SP

*Medium priority* · Left out of the calculation today because they depend on the class.

**Open (2)**

- [ ] `h1` **What are each class's base max HP and SP at each level?**
  1. Take all gear off and wait for buffs to end.
  2. Open the Status window and note max HP and SP, class, base level, VIT and INT.
  3. If you can, repeat at other levels (e.g. 1, 30, 60, 99, 120 and 150) or with friends of other classes.
  4. Send the screenshots.
  - Result: Nenhuma das duas bases tem tabela de HP/SP por classe. Caminho: prints da janela de status (HP/SP máximos) sem equipamento, por classe, em alguns níveis (ex.: 1, 50, 99, 120, 150).
- [ ] `h2` **How much max HP does each point of VIT add?**
  1. With no gear, note max HP and base VIT.
  2. Raise VIT (or use a stat reset) and note HP again at two or more values (e.g. VIT 1, 30 and 60).
  3. Send your class, level and the pairs "VIT → max HP".

<details>
<summary>Confirmed (1)</summary>

- [x] `h3` **INT does not change max SP**: Confirmado: INT não aumenta o SP máximo, só a regen de SP.

</details>

## Formulas the tool already uses

*Medium priority* · They come from the site's Codex, which was already wrong once (INT/SP). How to test: with no gear, enter the same level and stats as the character in the tool and compare each number in the Status window with the tool's Status tab.

**Open (3)**

- [ ] `f3` **Does the planner's Critical match the game's?**
  1. With no gear, note base LUK and Critical from the Status window.
  2. Change LUK (or equip an item with LUK) and note it again, at 2 or 3 values.
  3. Send the screenshots. The planner uses: 1 + LUK ÷ 3 + 2 per 10 LUK.
- [ ] `f7` **With a ranged weapon, does ATK use DEX instead of STR?**
  1. Equip a bow and note the status ATK (the number before the "+").
  2. Repeat for STR 1/DEX 1, STR 1/DEX 50, STR 50/DEX 1 and STR 50/DEX 50 (with a stat reset or different characters).
  3. If you can, repeat with a whip or a deck.
  4. Send the screenshots with the stats of each.
  - Result: Confirmado pelo jogador: armas que não precisam ficar a 1 quadrado do mob são à distância e usam DEX: arco, arco pesado, revólver, deck, chicote, codex, corrente e shuriken (luva e taco de golfe são corpo a corpo). Aplicado como espelho do corpo a corpo: DEX vira o atributo principal e STR o secundário. Falta só um print com arco para conferir os números.
- [ ] `f10` **How much damage do DEF and MDEF reduce?**
  1. Have someone (or the same monster) hit you with the same attack or skill every time.
  2. Note the damage taken with different DEF and MDEF (swap armor or shield between tries).
  3. Send the damage of each try with DEF and MDEF from the Status window.
  4. Defenses tooltip reference: 100 DEF ≈ 18%, 275 ≈ 1/3, 500 = 50%; 50 MDEF ≈ 30%, 100 MDEF ≈ 55%.

<details>
<summary>Confirmed (7)</summary>

- [x] `f1` **HIT**: Corrigido: HIT = Level + 2×DEX + LUK÷5 + 200 (a ferramenta usava 175). Bateu em dois prints (307 e 405).
- [x] `f2` **FLEE**: Confirmado: a fórmula bate. Os +70 que sobravam eram Improve Dodge 10 (+40) e Shadow Mastery 10 (+30).
- [x] `f4` **Perfect Dodge**: Confirmado: 1 + (AGI + LUK)÷10 (1 com tudo em 1; 11 com AGI 99). É o número depois do "+" no FLEE.
- [x] `f5` **Status ATK and MATK**: Corrigido: ATK e MATK de status somam o nível base ÷ 4, e cada 10 de DEX dá +1 MATK. ATK = nível÷4 + STR + DEX÷5 + DEX÷20 + LUK÷3; MATK = nível÷4 + INT×1,5 + DEX÷5 + DEX÷10 + LUK÷3. Bateu em dois prints (27/27 e 39/45).
- [x] `f6` **Soft DEF and MDEF**: Confirmado: DEF suave = nível + VIT (+5 a cada 10 de VIT, pelo tooltip) e MDEF suave = nível÷4 + INT + DEX÷5 + VIT÷5. Bateu com VIT 1 (106/27 e 106/39) e VIT 2 (107/37).
- [x] `f8` **Bonus every 10 stat points**: Confirmado pelos tooltips do jogo (a cada 10 do total do atributo): STR +1 ATK; AGI +1 FLEE e +1 ASPD; VIT +5 DEF e MDEF (fixos); INT +1 MATK; DEX +1 ATK e MATK; LUK +2 Critical e +1% de dano crítico.
- [x] `f9` **Casting and critical damage**: Confirmado pelos tooltips do jogo: o crítico dá 1,2× de dano (+1% a cada 10 de LUK) e ignora FLEE. Cada DEX reduz 0,25% do cast variável e cada INT 0,125%; DEX×2 + INT = 400 zera o cast variável. O cast fixo só cai com equipamento. A ferramenta mostra os dois no Status.

</details>

## Passive skills

*Medium priority* · The tool only adds a passive with a weapon type it's sure about. Compare the Status window with and without the skill (or at level 0 vs max).

**Open (4)**

- [ ] `s1` **Does a Long Sword count for Blade Mastery?**
  1. Build the same character in the planner (class, level, stats, gear and skills).
  2. In game, equip a Long Sword and note ATK and HIT from the Status window.
  3. If the game shows exactly the Blade Mastery bonus on top, the weapon counts.
  4. Send the screenshot and the Blade Mastery level.
- [ ] `s2` **Does each of them (Two-Handed Sword, Knight Sword, Bone Sword) count for Blade Mastery?**
  1. Build the same character in the planner (class, level, stats, gear and skills).
  2. In game, equip each of them (Two-Handed Sword, Knight Sword, Bone Sword) and note ATK and HIT from the Status window.
  3. If the game shows exactly the Blade Mastery bonus on top, the weapon counts.
  4. Send the screenshot and the Blade Mastery level.
- [ ] `s3` **Does a Heavy Bow count for Bow Mastery?**
  1. Build the same character in the planner (class, level, stats, gear and skills).
  2. In game, equip a Heavy Bow and note DEX from the Status window.
  3. If the game shows exactly the Bow Mastery bonus on top, the weapon counts.
  4. Send the screenshot and the Bow Mastery level.
- [ ] `s4` **Does Perfection Mastery's extra MATK apply only at level 5, or from 5 up?**
  1. With a one-handed sword, note MATK with Perfection Mastery at level 5.
  2. Raise the skill to level 6 and note MATK again.
  3. If MATK drops from 5 to 6, the "+25" is level 5 only; if it goes up by 15, it applies from 5 up.
  4. Send both screenshots.
  - Result: Confirmado no jogo: com espada de uma mão, Critical +25 e +3 por nível, HIT -300, MATK +15 por nível (igual à descrição do site; a outra fórmula, 30 + 2/nível, estava desatualizada). · Falta: o "+25 more at Lv 5" do MATK vale só no nível 5 ou do 5 em diante? Comparar o MATK nos níveis 5 e 6.

<details>
<summary>Confirmed (1)</summary>

- [x] `s5` **Crit/FLEE bonuses of scythe and katar masteries without the weapon**: Confirmado: Katar Mastery e as masteries de foice só dão os bônus com a arma equipada. No jogo, a maioria das masteries tem a linha "Requires a \[arma\] to take effect", mesmo quando a descrição do site não tem.

</details>

## Gear bonuses

*Low priority* · Cases the tool leaves out because it isn't sure.

**Open (2)**

- [ ] `e1` **Does the Grand Peco Card set bonus (DEF +5) work?**
  1. Equip the Grand Peco Card together with its partner card (Peco Peco Card).
  2. Compare DEF in the Status window with and without the Peco Peco Card.
  3. Send both screenshots.
- [ ] `e2` **On Metal Boots, which stat gets the "STR, INT or DEX +2"?**
  1. Without Metal Boots, note the STR, INT and DEX bonus (the number after the "+").
  2. Equip Metal Boots and see which of the three went up by 2.
  3. If you can, test with another class (the bonus may depend on the class).
  4. Send the screenshots.

<details>
<summary>Confirmed (1)</summary>

- [x] `e3` **Shadow "Piece Bonus" at +0**: Confirmado: o Piece Bonus vale com a peça sozinha, sem o conjunto completo.

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

- [ ] `o1` **At Orphanage level 60, do Juperos, Crystal Caves, Thanatos Tower and Kiel Hyre show up at Skia Nerius?**
  1. With the Orphanage at level 60, talk to Skia Nerius (Dungeon Caravan).
  2. Check whether those four destinations are on the list.
  3. Send a screenshot of the list.
- [ ] `o2` **At Orphanage level 105, do Abyss Lake and Sky Garden open up?**
  1. With the Orphanage at level 105, talk to Skia Nerius (Dungeon Caravan).
  2. Check whether Abyss Lake and Sky Garden are on the list.
  3. Send a screenshot of the list.

---

*Results are written as the testers noted them (often in Portuguese).*
