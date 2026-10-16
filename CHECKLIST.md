# In-game test checklist

Português: [CHECKLIST.pt-BR.md](CHECKLIST.pt-BR.md)

We don't have access to the game files: the planner only knows what the server's **public item database** makes available. Everything below isn't published there, so it has to be measured in game. Pick an **open** item, follow its steps and post your result in the **[Refuge Build Planner thread](https://discord.com/channels/1500898812942745602/1557950291347771462)** on the server's Discord, with a screenshot of your attributes window (Alt+Q). Mention the item code (e.g. `r2`).

### Before testing

- Test "naked": take off all gear, cards, shadow gear and costumes, unless the test asks for a piece.
- No buffs: wait for skills, potions, food and NPC or event buffs to end (or relog).
- Change one thing at a time and take a screenshot before and after.
- Keep class, base level and base stats (the number before the "+") visible in every screenshot.
- If a number looks odd, repeat the measurement before sending it.

⚠️ Never post your account login, password, email or any personal information.

**Progress:** 42 of 59 items confirmed.

## Refine

*High priority* · The tool already adds weapon refine (level 4 by the rule, still to be measured) and body armor refine. Still to test: shield, garment, shoes and headgear.

**Open (4)**

- [ ] `r7` **How much DEF/MDEF does refine add to a shield?**
  - **You need:** No gear on the character; A shield at +0, +1, +2 and +4 (another copy already refined is fine)
  - **Steps:**
    1. With no gear on, open the attributes window (Alt+Q): the number after the "+" in DEF and MDEF should be 0.
    2. Equip only a shield at +0 and note the equipment DEF and MDEF (the number after the "+").
    3. Repeat with it at +1, +2 and +4.
  - **Write down:** Item name; +0 → DEF / MDEF; +1 → DEF / MDEF; +2 → DEF / MDEF; +4 → DEF / MDEF; Class and level
  - So far: The lead states a general rule for "armor" (+1 DEF per 2 refines), without separating by piece. A test with a shield confirms it; if it matches, I apply it to all four (shield, garment, footgear and headgear).
- [ ] `r8` **How much DEF/MDEF does refine add to a garment?**
  - **You need:** No gear on the character; A garment at +0, +1, +2 and +4 (another copy already refined is fine)
  - **Steps:**
    1. With no gear on, open the attributes window (Alt+Q): the number after the "+" in DEF and MDEF should be 0.
    2. Equip only a garment at +0 and note the equipment DEF and MDEF (the number after the "+").
    3. Repeat with it at +1, +2 and +4.
  - **Write down:** Item name; +0 → DEF / MDEF; +1 → DEF / MDEF; +2 → DEF / MDEF; +4 → DEF / MDEF; Class and level
- [ ] `r9` **How much DEF/MDEF does refine add to a pair of shoes?**
  - **You need:** No gear on the character; A pair of shoes at +0, +1, +2 and +4 (another copy already refined is fine)
  - **Steps:**
    1. With no gear on, open the attributes window (Alt+Q): the number after the "+" in DEF and MDEF should be 0.
    2. Equip only a pair of shoes at +0 and note the equipment DEF and MDEF (the number after the "+").
    3. Repeat with it at +1, +2 and +4.
  - **Write down:** Item name; +0 → DEF / MDEF; +1 → DEF / MDEF; +2 → DEF / MDEF; +4 → DEF / MDEF; Class and level
- [ ] `r10` **How much DEF/MDEF does refine add to an upper headgear?**
  - **You need:** No gear on the character; An upper headgear at +0, +1, +2 and +4 (another copy already refined is fine)
  - **Steps:**
    1. With no gear on, open the attributes window (Alt+Q): the number after the "+" in DEF and MDEF should be 0.
    2. Equip only an upper headgear at +0 and note the equipment DEF and MDEF (the number after the "+").
    3. Repeat with it at +1, +2 and +4.
  - **Write down:** Item name; +0 → DEF / MDEF; +1 → DEF / MDEF; +2 → DEF / MDEF; +4 → DEF / MDEF; Class and level

<details>
<summary>Confirmed (7)</summary>

- [x] `r1` **ATK per refine: level 1 weapon**: Confirmed: Knife (level 1 weapon) gives +0.5 ATK and MATK per refine, rounded down (ATK +0: 5, +1: 5, +2: 6, +4: 7; MATK 0, 0, 1, 2).
- [x] `r2` **ATK per refine: level 2 weapon**: Confirmed: Gemstone Knife (level 2 weapon) gives +1 ATK and +1 MATK per refine (+0: 4/16, +1: 5/17, +2: 6/18, +4: 8/20). Matches the lead of 0.5 × weapon level per refine.
- [x] `r3` **ATK per refine: level 3 weapon**: Confirmed: Cowardice Blade (level 3 weapon) gives +1.5 ATK and MATK per refine, rounded down (ATK +0: 13, +1: 14, +2: 16, +4: 19).
- [x] `r4` **ATK per refine: level 4 weapon**: Decided by the player: a level 4 weapon gives +2 ATK and MATK per refine (0.5 × level, the same rule confirmed at levels 1 to 3).
- [x] `r5` **MATK per refine**: Confirmed: refine raises MATK at the same rate as ATK (0.5 × weapon level), including on weapons with no base MATK (Knife and Cowardice Blade).
- [x] `r6` **DEF/MDEF per refine: armor**: Confirmed: Padded Armor (base DEF 22) went to 23 at +1, 23 at +2 and 24 at +4. That is, +1 DEF per 2 refines, rounded up, and no MDEF.
- [x] `r11` **Set refine ("Per total set refine")**: Resolved by the pieces' text: the set refine is the sum of the refines of the equipped pieces. The tool already calculates "Set refine N+:" and "Per (N) total set refine(s):" with the full set. Conditional forms ("Set refine 9+, while poisoned:") are left out.

</details>

## ASPD

*High priority* · The tool only shows the ASPD cap today, not the actual value. Leads to confirm: AGI gives +1 ASPD every 10 points, and ASPD % bonuses scale with total AGI.

**Open (1)**

- [ ] `a3` **How much does each weapon type change ASPD?**
  - **You need:** One weapon of each type your class uses (dagger, sword, bow…), with no cards and no ASPD rolls
  - **Steps:**
    1. With no weapon, open the attributes window (Alt+Q) and note your character's ASPD.
    2. Equip each weapon (one at a time) and note the ASPD with each.
    3. Don't change AGI or DEX between swaps.
  - **Write down:** No weapon → ASPD; Each weapon name and type → ASPD; Base AGI and DEX; Class and level
  - So far: First data: the dagger (with Blade Mastery 10) sits from 6 down to 0 below "no weapon" as AGI rises (see a1). Still missing: compare other weapon types.

<details>
<summary>Confirmed (4)</summary>

- [x] `a1` **ASPD curve from AGI**: Legend level 105, no items, DEX 1, with Shadow Mastery 10 and Blade Mastery 10 (ASPD % passives). AGI 1/10/20/40/60/80/99 → no weapon: 148, 151, 155, 162, 169, 176, 182; with Gemstone Knife (dagger): 142, 146, 150, 158, 166, 175, 182. The curve includes this character's passives. Extra: with AGI 101 (99 + 2 bonus) ASPD went to 184.
- [x] `a2` **DEX effect on ASPD**: Confirmed: DEX does not affect ASPD. With AGI 99 and the dagger, DEX 1 and DEX 50 both gave 182 (below this Legend's cap of 185). The in-game DEX tooltip only mentions ATK/MATK.
- [x] `a4` **Class**: Confirmed: the base cap is 180 for all classes. Only skills raise the limit: Jester (Card Mastery and Sleight Mastery at max, +1 each), Legend (Frenzy, +3 passive; active locks ASPD at 193) and Dracomancer with a sword (Weapon Quicken, +1).
- [x] `a5` **Hard ASPD cap**: Confirmed: the server's maximum cap is 190. Skills can go past it: the Legend reaches 193 with Frenzy.

</details>

## Stat points

*High priority* · Solved and already in the tool: the calculator shows points used and left from the points-per-level table of the server. Cost: 1 up to 49, 2 from 49→50 up to 98, and 3 for 98→99.

*Nothing open in this section.*

<details>
<summary>Confirmed (6)</summary>

- [x] `p1` **Free points at level 1**: Confirmed: 18 points at level 1.
- [x] `p2` **Points per regular level up**: Resolved by the server table: +3 per level from 1 to 9, +2 per level up to 99, +4 from 101 to 125, +1 from 126 on (locks at 447 at level 144).
- [x] `p5` **Bonus at levels ending in 0**: Resolved by the server table: levels ending in 0 give +10 in total (including 110 and 120).
- [x] `p6` **Other characters' spent points**: Server table checked against resets: level 49 = 154 and level 105 = 334 match. Level 85: the reset gave 259 and the table says 258 (1 point off, to be rechecked).
- [x] `p3` **Stat cost**: Confirmed: it costs 1 up to 49, 2 from 49→50 up to 97→98, and 3 from 98→99. There is no other step.
- [x] `p4` **Base stat cap at level 150**: Confirmed: base stats stay capped at 99, even at level 150.

</details>

## Max HP and SP

*Medium priority* · Left out of the calculation today because they depend on the class.

**Open (2)**

- [ ] `h1` **What are each class's base max HP and SP at each level?**
  - **You need:** No gear on the character
  - **Steps:**
    1. Take all gear off.
    2. Note your character's max HP and SP, and base VIT and INT from the attributes window (Alt+Q).
    3. If you can, repeat at other levels (e.g. 1, 30, 60, 99, 120 and 150).
  - **Write down:** Level → max HP / max SP; Base VIT and INT; Class
  - So far: Neither of the two sources has a per-class HP/SP table. Way forward: status window screenshots (max HP/SP) with no equipment, per class, at a few levels (e.g. 1, 50, 99, 120, 150).
- [ ] `h2` **How much max HP does each point of VIT add?**
  - **You need:** No gear on the character; New points or a stat reset to change VIT
  - **Steps:**
    1. With no gear on, note max HP and base VIT (attributes window, Alt+Q).
    2. Change VIT and note max HP again at two or more values (e.g. VIT 1, 30 and 60).
  - **Write down:** VIT → max HP (each value); Class and level

<details>
<summary>Confirmed (1)</summary>

- [x] `h3` **INT does not change max SP**: Confirmed: INT does not raise max SP, only SP regen.

</details>

## Formulas the tool already uses

*Medium priority* · They come from the site's Codex, which was already wrong once (INT/SP). How to test: with no gear, enter the same level and stats as the character in the tool and compare each number in the Status window with the tool's Status tab.

**Open (2)**

- [ ] `f7` **With a ranged weapon, does ATK use DEX instead of STR?**
  - **You need:** A bow with no cards and no ATK rolls; A stat reset or different characters
  - **Steps:**
    1. Equip the bow and open the attributes window (Alt+Q).
    2. Note ATK (the left number, before the "+") with: STR 1 / DEX 1, STR 1 / DEX 50, STR 50 / DEX 1 and STR 50 / DEX 50.
    3. If you can, repeat with a whip or a deck.
  - **Write down:** Weapon name and refine; STR / DEX → ATK (each combination); Class and level
  - So far: Confirmed by the player: weapons that do not need to be 1 square from the mob are ranged and use DEX: bow, heavy bow, revolver, deck, whip, codex, chain and shuriken (glove and golf club are melee). Applied as a mirror of melee: DEX becomes the main stat and STR the secondary. Only a screenshot with a bow is missing to check the numbers.
- [ ] `f10` **How much damage do DEF and MDEF reduce?**
  - **You need:** A monster that always uses the same attack, or someone who uses the same skill on you every time; Different armors or shields to change DEF/MDEF
  - **Steps:**
    1. Note the damage you take and DEF and MDEF from the attributes window (Alt+Q).
    2. Swap armor or shield to change DEF/MDEF and note the damage again.
    3. Do at least 3 swaps.
  - **Write down:** For each try: armor or shield (name and refine) → DEF / MDEF → damage taken; Monster or skill; Class and level

<details>
<summary>Confirmed (9)</summary>

- [x] `f1` **HIT**: Fixed: HIT = Level + 2×DEX + LUK÷5 + 200 (the tool used 175). Matched two screenshots (307 and 405).
- [x] `f2` **FLEE**: Confirmed: the formula matches. The extra +70 was Improve Dodge 10 (+40) and Shadow Mastery 10 (+30).
- [x] `f3` **Does the planner's Critical match the game's?**: Confirmed in game (2026-10-14): LUK 92 with no equipment gave Critical 49 = 1 + 92÷3 + 2×9. "Total Critical Rate +X%" adds X% of the part that comes from LUK (without skills and equipment): the Samurai Mask (+20%) took 49 → 59 (49 × 1.2 rounded).
- [x] `f4` **Perfect Dodge**: Confirmed: 1 + (AGI + LUK)÷10 (1 with everything at 1; 11 with AGI 99). It is the number after the "+" in FLEE.
- [x] `f5` **Status ATK and MATK**: Fixed: status ATK and MATK add base level ÷ 4, and every 10 DEX gives +1 MATK. ATK = level÷4 + STR + DEX÷5 + DEX÷20 + LUK÷3; MATK = level÷4 + INT×1.5 + DEX÷5 + DEX÷10 + LUK÷3. Matched two screenshots (27/27 and 39/45).
- [x] `f6` **Soft DEF and MDEF**: Confirmed: soft DEF = level + VIT (+5 per 10 VIT, per the tooltip) and soft MDEF = level÷4 + INT + DEX÷5 + VIT÷5. Matched VIT 1 (106/27 and 106/39) and VIT 2 (107/37).
- [x] `f8` **Bonus every 10 stat points**: Confirmed by the in-game tooltips (per 10 of the total stat): STR +1 ATK; AGI +1 FLEE and +1 ASPD; VIT +5 DEF and MDEF (flat); INT +1 MATK; DEX +1 ATK and MATK; LUK +2 Critical and +1% critical damage.
- [x] `f9` **Casting and critical damage**: Confirmed by the in-game tooltips: a critical deals 1.2× damage (+1% per 10 LUK) and ignores FLEE. Each DEX reduces variable cast by 0.25% and each INT by 0.125%; DEX×2 + INT = 400 zeroes the variable cast. Fixed cast only drops with equipment. The tool shows both in Status.
- [x] `f11` **How does "Total Flee +X%" add to FLEE?**: Confirmed in game (2026-10-14, Legend Lv 105, AGI 99, LUK 92, Improve Dodge 10 and Shadow Mastery 10): FLEE 401 → 467 with the Asprika. The "Total Flee +20%" adds 20% of only the stats and level part (331 → +66), not the skills. The Asprika's "Perfect Dodge: 020" also counts (+20).

</details>

## Passive skills

*Medium priority* · The tool only adds a passive with a weapon type it's sure about. Compare the Status window with and without the skill (or at level 0 vs max).

**Open (4)**

- [ ] `s1` **Does a Long Sword count for Blade Mastery?**
  - **You need:** Points in Blade Mastery; A Long Sword
  - **Steps:**
    1. Equip the weapon, open the attributes window (Alt+Q) and note ATK and HIT.
    2. Build the same character in the planner (class, level, stats, the weapon and skills) and check the ATK and HIT it shows.
    3. If the game shows exactly the Blade Mastery bonus on top, the weapon counts for the skill.
  - **Write down:** Weapon name and refine; ATK and HIT in game; ATK and HIT in the planner; Blade Mastery level; Class and level
- [ ] `s2` **Do Two-Handed Sword, Knight Sword and Bone Sword count for Blade Mastery?**
  - **You need:** Points in Blade Mastery; Two-Handed Sword, Knight Sword and Bone Sword
  - **Steps:**
    1. Equip each of them (one at a time), open the attributes window (Alt+Q) and note ATK and HIT.
    2. Build the same character in the planner (class, level, stats, the weapon and skills) and check the ATK and HIT it shows.
    3. If the game shows exactly the Blade Mastery bonus on top, the weapon counts for the skill.
  - **Write down:** Weapon name and refine; ATK and HIT in game; ATK and HIT in the planner; Blade Mastery level; Class and level
- [ ] `s3` **Does a Heavy Bow count for Bow Mastery?**
  - **You need:** Points in Bow Mastery; A Heavy Bow
  - **Steps:**
    1. Equip the Heavy Bow, open the attributes window (Alt+Q) and note DEX.
    2. Build the same character in the planner (class, level, stats, the weapon and skills) and check the DEX it shows.
    3. If the game shows exactly the Bow Mastery bonus on top, the weapon counts for the skill.
  - **Write down:** Weapon name and refine; DEX in game; DEX in the planner; Bow Mastery level; Class and level
- [ ] `s4` **Does Perfection Mastery's extra MATK apply only at level 5, or from 5 up?**
  - **You need:** A one-handed sword; Perfection Mastery at level 5 (and a point to raise it to 6)
  - **Steps:**
    1. With the skill at level 5, open the attributes window (Alt+Q) and note MATK.
    2. Raise the skill to level 6 and note MATK again.
    3. If MATK drops from 5 to 6, the "+25" is level 5 only; if it goes up by 15, it applies from 5 up.
  - **Write down:** Sword name and refine; Level 5 → MATK; Level 6 → MATK; Class and level
  - So far: Confirmed in game: with a one-handed sword, Critical +25 and +3 per level, HIT -300, MATK +15 per level (same as the item description; the other formula, 30 + 2/level, was outdated). · Missing: does the "+25 more at Lv 5" MATK apply only at level 5 or from level 5 onward? Compare MATK at levels 5 and 6.

<details>
<summary>Confirmed (1)</summary>

- [x] `s5` **Crit/FLEE bonuses of scythe and katar masteries without the weapon**: Confirmed: Katar Mastery and the scythe masteries only give their bonuses with the weapon equipped. In game, most masteries have the line "Requires a \[weapon\] to take effect", even when the item description does not.

</details>

## Gear bonuses

*Low priority* · Cases the tool leaves out because it isn't sure.

**Open (2)**

- [ ] `e1` **Does the Grand Peco Card set bonus (DEF +5) work?**
  - **You need:** Grand Peco Card and Peco Peco Card
  - **Steps:**
    1. With only the Grand Peco Card equipped, open the attributes window (Alt+Q) and note DEF.
    2. Also equip the Peco Peco Card and note DEF again.
  - **Write down:** Pieces holding the cards (name and refine); DEF without the Peco Peco Card; DEF with the Peco Peco Card; Class and level
- [ ] `e2` **On Metal Boots, which stat gets the "STR, INT or DEX +2"?**
  - **You need:** Metal Boots
  - **Steps:**
    1. Without Metal Boots, open the attributes window (Alt+Q) and note the STR, INT and DEX bonus (the number after the "+").
    2. Equip Metal Boots and note the three again.
    3. If you can, repeat with another class.
  - **Write down:** Metal Boots refine; Which stat went up by 2; Class and level

<details>
<summary>Confirmed (1)</summary>

- [x] `e3` **Shadow "Piece Bonus" at +0**: Confirmed: the Piece Bonus applies with the piece alone, without the full set.

</details>

## Routes confirmed in game

*When passing through the maps* · How to reach each point using the server's teleports. Routes noted here show up in the tool's Farm tab.

*Nothing open in this section.*

<details>
<summary>Confirmed (13)</summary>

- [x] `t1` **Morroc's Guild**: Orphanage Kafra \> Morroc's Guild
- [x] `t2` **Geffen Cave**: Dungeon Caravan \> Geffen Cave
- [x] `t3` **Forest Maze**: Dungeon Caravan \> Forest Maze
- [x] `t4` **Judge Headquarters**: Orphanage Kafra \> Prontera (portal spot 8) \> Prontera Castle \> Judge Headquarters · or · Dungeon Caravan \> Judge Headquarters (Judge Only)
- [x] `t5` **Airship Crash Site**: Dungeon Caravan \> Airship Crash Site
- [x] `t6` **Kiel Hyre Factory**: Dungeon Caravan \> Kafra Abandoned Warehouse \> yuno\_fild09 \> yuno\_fild08 (spot 4)
- [x] `t7` **Mora**: Orphanage Kafra \> Mora
- [x] `t8` **Dragon Nest**: Dungeon Caravan \> Dragon Nest
- [x] `t9` **Crystal Caves**: Orphanage Kafra \> Hugel (boat) \> Frozen Fields \> snow\_fild02 \> snow\_fild04 (spot 3)
- [x] `t10` **Frontier/Maroll**: Orphanage Kafra \> Frontier
- [x] `t11` **Nomad Village**: Orphanage Kafra \> Prontera (kafra) \> Nomad Village
- [x] `t12` **Abandoned Kafra Warehouse**: Dungeon Caravan \> Abandoned Kafra Warehouse
- [x] `t13` **Sky Garden**: Orphanage Kafra \> Umbala \> ygg\_dun01 \> ygg\_dun02 \> ygg\_fild01 \> ygg\_fild02 (portal spot 5)

</details>

## Orphanage teleports

*When passing through the maps* · The site says at which Orphanage investment level each teleport unlocks.

**Open (2)**

- [ ] `o1` **At Orphanage level 60, do Juperos, Crystal Caves, Thanatos Tower and Kiel Hyre show up at Skia Nerius?**
  - **You need:** Orphanage at level 60
  - **Steps:**
    1. Talk to Skia Nerius (Dungeon Caravan).
    2. Check whether Juperos, Crystal Caves, Thanatos Tower and Kiel Hyre are on the list.
  - **Write down:** Screenshot of the list; Orphanage level
- [ ] `o2` **At Orphanage level 105, do Abyss Lake and Sky Garden open up?**
  - **You need:** Orphanage at level 105
  - **Steps:**
    1. Talk to Skia Nerius (Dungeon Caravan).
    2. Check whether Abyss Lake and Sky Garden are on the list.
  - **Write down:** Screenshot of the list; Orphanage level

---

*Results are written as the testers noted them.*
