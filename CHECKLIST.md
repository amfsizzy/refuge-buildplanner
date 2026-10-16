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

**Progress:** 42 of 85 items confirmed.

## Refine

*High priority* · The tool already adds weapon refine (level 4 by the rule, still to be measured) and body armor refine. Still to test: shield, garment, shoes and headgear.

**Open (4)**

- [ ] `r7` **How much DEF/MDEF does refine add to a shield?**
  - **You need:** No gear on the character; A shield at +0, +1, +2, +4, +5, +7 and +10 (another copy already refined is fine)
  - **Steps:**
    1. With no gear on, open the attributes window (Alt+Q) and note your character's DEF and MDEF (the equipment number after the "+" should be 0).
    2. Equip only a shield at +0 and note DEF and MDEF again.
    3. Repeat with the same shield at +1, +2, +4, +5, +7 and +10: one Alt+Q reading for each refine.
    4. If you don't have every refine, send the ones you have; what matters is whether the rate changes after +4.
  - **Write down:** Item name; +0 → DEF / MDEF; +1 → DEF / MDEF; +2 → DEF / MDEF; +4 → DEF / MDEF; +5 → DEF / MDEF; +7 → DEF / MDEF; +10 → DEF / MDEF; Class and level
  - **Lead:** What we are checking: whether DEF/MDEF per refine keeps the same rate above +4. Not confirmed yet.
  - So far: The lead states a general rule for "armor" (+1 DEF per 2 refines), without separating by piece. A test with a shield confirms it; if it matches, I apply it to all four (shield, garment, footgear and headgear).
- [ ] `r8` **How much DEF/MDEF does refine add to a garment?**
  - **You need:** No gear on the character; A garment at +0, +1, +2, +4, +5, +7 and +10 (another copy already refined is fine)
  - **Steps:**
    1. With no gear on, open the attributes window (Alt+Q) and note your character's DEF and MDEF (the equipment number after the "+" should be 0).
    2. Equip only a garment at +0 and note DEF and MDEF again.
    3. Repeat with the same garment at +1, +2, +4, +5, +7 and +10: one Alt+Q reading for each refine.
    4. If you don't have every refine, send the ones you have; what matters is whether the rate changes after +4.
  - **Write down:** Item name; +0 → DEF / MDEF; +1 → DEF / MDEF; +2 → DEF / MDEF; +4 → DEF / MDEF; +5 → DEF / MDEF; +7 → DEF / MDEF; +10 → DEF / MDEF; Class and level
  - **Lead:** What we are checking: whether DEF/MDEF per refine keeps the same rate above +4. Not confirmed yet.
- [ ] `r9` **How much DEF/MDEF does refine add to a pair of shoes?**
  - **You need:** No gear on the character; A pair of shoes at +0, +1, +2, +4, +5, +7 and +10 (another copy already refined is fine)
  - **Steps:**
    1. With no gear on, open the attributes window (Alt+Q) and note your character's DEF and MDEF (the equipment number after the "+" should be 0).
    2. Equip only a pair of shoes at +0 and note DEF and MDEF again.
    3. Repeat with the same shoes at +1, +2, +4, +5, +7 and +10: one Alt+Q reading for each refine.
    4. If you don't have every refine, send the ones you have; what matters is whether the rate changes after +4.
  - **Write down:** Item name; +0 → DEF / MDEF; +1 → DEF / MDEF; +2 → DEF / MDEF; +4 → DEF / MDEF; +5 → DEF / MDEF; +7 → DEF / MDEF; +10 → DEF / MDEF; Class and level
  - **Lead:** What we are checking: whether DEF/MDEF per refine keeps the same rate above +4. Not confirmed yet.
- [ ] `r10` **How much DEF/MDEF does refine add to an upper headgear?**
  - **You need:** No gear on the character; An upper headgear at +0, +1, +2, +4, +5, +7 and +10 (another copy already refined is fine)
  - **Steps:**
    1. With no gear on, open the attributes window (Alt+Q) and note your character's DEF and MDEF (the equipment number after the "+" should be 0).
    2. Equip only an upper headgear at +0 and note DEF and MDEF again.
    3. Repeat with the same headgear at +1, +2, +4, +5, +7 and +10: one Alt+Q reading for each refine.
    4. If you don't have every refine, send the ones you have; what matters is whether the rate changes after +4.
  - **Write down:** Item name; +0 → DEF / MDEF; +1 → DEF / MDEF; +2 → DEF / MDEF; +4 → DEF / MDEF; +5 → DEF / MDEF; +7 → DEF / MDEF; +10 → DEF / MDEF; Class and level
  - **Lead:** What we are checking: whether DEF/MDEF per refine keeps the same rate above +4. Not confirmed yet.

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

**Open (2)**

- [ ] `a3` **How much does each weapon type change ASPD?** *(needs gear or a target)*
  - **You need:** One weapon of each type your class uses (dagger, sword, bow…), with no cards and no ASPD rolls; No shield; Low AGI (well below the ASPD cap), so the differences show
  - **Steps:**
    1. With no weapon, no shield and no gear, open the attributes window (Alt+Q) and note ASPD. This is the baseline ("no weapon").
    2. Equip one weapon at a time (take the previous one off first) and note ASPD with each, with no cards and no rolls.
    3. Keep the same (low) AGI and the same DEX through every swap.
    4. Read ASPD once per weapon. If two weapons of the same type give different values, note both.
  - **Write down:** Weapon name and type → ASPD (including "no weapon"); Base AGI and DEX; Class and level
  - **Lead:** What we are checking: whether ASPD changes with the weapon type, at the same AGI. Not confirmed yet.
  - So far: First data: the dagger (with Blade Mastery 10) sits from 6 down to 0 below "no weapon" as AGI rises (see a1). Still missing: compare other weapon types.
- [ ] `a6` **Does a shield change ASPD?** *(needs gear or a target)*
  - **You need:** A one-handed weapon with no cards and no ASPD rolls, and a shield with no cards; If you can, two types of one-handed weapon (e.g. dagger and sword); The same AGI and DEX in every reading
  - **Steps:**
    1. With the one-handed weapon and no shield, open the attributes window (Alt+Q) and note ASPD.
    2. Equip the shield, keeping the same weapon, AGI and DEX, and note ASPD again.
    3. Repeat the pair (no shield / with shield) a second time, taking the shield off and on, to confirm the reading.
    4. If you have one, repeat everything with a second type of one-handed weapon.
  - **Write down:** Weapon and shield (name and refine); ASPD without shield → ASPD with shield, for each weapon; Base AGI and DEX, class and level
  - **Lead:** What we are checking: whether using a shield changes ASPD and whether the change depends on the weapon type. Not confirmed yet.

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

## Physical damage

*High priority* · The planner shows ATK, but not the real damage of a hit. These tests measure the damage number on screen, against a standing neutral target, with no buffs and no other ATK %: note the lowest, the highest and the most common of 10 hits or more. Use criticals whenever the item does not depend on weapon variance.

**Open (13)**

- [ ] `d0` **Calibrate the training dummy: what are its DEF and MDEF?** *(needs gear or a target)*
  - **You need:** The server's training dummy (see d0); A codex monster with DEF 0, the same size and neutral; A magic skill, for the MDEF part
  - **Steps:**
    1. With no buffs and no other ATK %, land 10 critical hits on the dummy (a critical has no weapon variance) and note each damage number on screen. Count only criticals.
    2. With the same character and weapon, land 10 criticals on the codex monster with DEF 0 (same size, neutral) and note each damage number.
    3. Compare. Same damage: the dummy has DEF 0 and becomes the default target for the other tests. Lower damage on the dummy: note both values, the gap helps estimate its DEF.
    4. Repeat steps 1 and 2 with a magic skill (the same one, 10 casts on each target) to estimate MDEF.
    5. Click the dummy and note the size and element it shows, if any.
  - **Write down:** The 10 damage numbers on the dummy and the 10 on the codex monster (monster name); The magic skill damage on both targets (skill name); The dummy's size and element, if shown; Weapon and refine, class and level
  - **Lead:** What we are checking: whether the training dummy has DEF and MDEF of 0, like the comparison monster. Not confirmed yet.
- [ ] `d1` **How does weapon ATK vary, and how much do STR and DEX add to it?**
  - **You need:** The server's training dummy (see d0); A weapon (and a bow, for the DEX part); A stat reset for STR 1 and STR 50
  - **Steps:**
    1. Target: the dummy (d0), no buffs and no other ATK %. With STR 1 and the weapon, land 20 normal hits (no crit) and note the lowest, the highest and the most common.
    2. Change only STR to 50 and repeat the 20 hits.
    3. Note the status ATK (attributes window, Alt+Q) at both points and compare the damage difference (lowest and highest) between STR 1 and STR 50 with the difference in that ATK.
    4. With a bow, repeat with DEX 1 and DEX 50 (STR fixed), 20 hits each.
  - **Write down:** STR → lowest / highest / most common (20 hits); DEX → lowest / highest / most common (with bow); Status ATK at each point (Alt+Q); Weapon and refine, class and level
  - **Lead:** What we are checking: whether normal damage varies between a minimum and a maximum, and whether STR (or DEX with a bow) adds to weapon ATK beyond the status ATK. Not confirmed yet.
- [ ] `d2` **Does status ATK count twice in the hit?**
  - **You need:** The server's training dummy (see d0); No weapon if possible (to take the weapon out of the picture); A stat reset to get two clearly different status ATK values (STR or LUK)
  - **Steps:**
    1. Target: the dummy (d0), no buffs and no other ATK %. Open the attributes window (Alt+Q) and note the status ATK (the number after the "+").
    2. Land 10 criticals and note the lowest, the highest and the most common (a critical doesn't vary with the weapon).
    3. Change the stat (STR or LUK) to a second value with a clearly different status ATK and repeat steps 1 and 2.
    4. Note the status ATK difference and the damage difference between the two readings. What we want to know is how many times each point of status ATK shows up in the damage.
  - **Write down:** Status ATK → the 10 critical damages (at both values); Which stat changed and its values; Weapon (or "no weapon"), class and level
  - **Lead:** What we are checking: how many times status ATK enters the damage of a hit. Not confirmed yet.
- [ ] `d3` **Does target size change damage for each weapon type?** *(needs gear or a target)*
  - **You need:** Weapons of at least 3 different types (e.g. dagger, spear, bow). Only do it if you have the weapons and targets.; From the codex: small, medium and large targets of the same race and element, preferably with the same DEF
  - **Steps:**
    1. Pick three codex targets of the same race and element: one small, one medium and one large. Note each one's DEF.
    2. With one weapon, no buffs and no other ATK %, land 10 criticals on each target and note the lowest, the highest and the most common.
    3. Repeat with at least two more weapon types (3 weapon type × size pairs in total).
    4. For each weapon, compare the damage across the three sizes.
  - **Write down:** Weapon type and name → target size → lowest / highest / most common; Name, race, element and DEF of each target; Class and level
  - **Lead:** What we are checking: whether target size changes damage differently for each weapon type. Not confirmed yet.
- [ ] `d4` **Which parts of ATK does the weapon element apply to?** *(needs gear or a target)*
  - **You need:** An element weapon (or a way to give the weapon an element) and a codex target whose element changes the damage in the table; The server's training dummy (see d0)
  - **Steps:**
    1. In the server codex, open the element table and pick a target where your weapon element gives a multiplier other than 100%. Note the multiplier and the target's DEF.
    2. With the weapon, no buffs and no other ATK %, land 10 criticals on that target and 10 on the dummy (d0). Note the lowest, highest and most common of each.
    3. Note the status ATK (Alt+Q). Compare the damage change with the table multiplier: does it apply to all the damage or only part of it (is status ATK left neutral?).
  - **Write down:** Weapon element, target element and table multiplier; The damage (lowest / highest / most common) on the target and the dummy; Status ATK (Alt+Q), class and level
  - **Lead:** What we are checking: whether the element applies to all the damage or only to some parts of ATK (is status ATK left neutral?). Not confirmed yet.
- [ ] `d5` **Which parts of ATK does a gear ATK % apply to?** *(needs gear or a target)*
  - **You need:** A piece or card with "ATK +N%", and no other ATK % source; The server's training dummy (see d0)
  - **Steps:**
    1. Target: the dummy (d0), no buffs and no other ATK %. Without the piece, open the attributes window (Alt+Q), note ATK, and land 10 criticals, noting lowest, highest and most common.
    2. Equip only the ATK % piece and repeat: ATK in Alt+Q and 10 criticals.
    3. Compare the damage increase with the piece's %: does it match all of ATK or only a part of it?
    4. If you can, repeat with a weapon of clearly different ATK, to see whether the increase follows the weapon ATK.
  - **Write down:** Piece name and refine, its %; ATK (Alt+Q) and damage (lowest / highest / most common) without and with the piece; Weapon and refine, class and level
  - **Lead:** What we are checking: whether ATK % applies to the whole ATK or only part of it (for example, only the weapon's). Not confirmed yet.
- [ ] `d6` **Race, size and element damage cards: do they add or multiply?** *(needs gear or a target)*
  - **You need:** Cards or pieces with "+N% damage vs race", "vs size" and "vs element", two of the same category if possible. Only do it if you have the pieces and the target.; A codex target whose race, size and element match those cards
  - **Steps:**
    1. Against the target, no buffs and no other ATK %, land 10 criticals with no card and note the lowest, highest and most common.
    2. Equip only a race card and repeat; then only a size card; then only an element card. Note each result.
    3. Equip two cards of the same category (e.g. two race cards) and repeat. Then equip one of each category and repeat.
    4. Compare: do two cards of the same category seem to add their %? Do different categories seem to multiply? Note the damage numbers, without calculating.
  - **Write down:** Card names and the % of each; Damage (lowest / highest / most common) for each combination; The target (name, race, size, element), class and level
  - **Lead:** What we are checking: whether bonuses of the same category (race, size, element) add together and whether different categories multiply. Not confirmed yet.
- [ ] `d7` **Is mastery ATK a flat amount? Do element and cards change it?** *(needs gear or a target)*
  - **You need:** A mastery skill with an ATK bonus and the weapon it accepts; The server's training dummy (see d0); Two different levels of the mastery (skill reset or another character); A target whose element changes the damage in the codex table, or a damage card against the target's race, size or element
  - **Steps:**
    1. Target: the dummy (d0), no buffs and no other ATK %. With the mastery at one level, land 10 criticals and note the lowest, highest and most common.
    2. With the mastery at another level, repeat. The damage difference between the two levels is what the mastery adds. Also note ATK in Alt+Q at both.
    3. Repeat the two steps above against the element target from the table (or with the card equipped) and compare the difference between levels with the dummy's.
  - **Write down:** Mastery level → lowest / highest / most common (dummy and element/card target); ATK in Alt+Q at each level; Target element or card used, weapon and refine, class and level
  - **Lead:** What we are checking: whether mastery ATK is a flat amount that element and damage cards do not change. Not confirmed yet.
- [ ] `d8` **What is the real critical damage multiplier?**
  - **You need:** The server's training dummy (see d0); A stat reset for LUK 1, 50 and 99
  - **Steps:**
    1. Open the attributes window (Alt+Q), hover over Crit and note the critical damage the tooltip shows.
    2. With LUK 1, target: the dummy (d0), no buffs and no other ATK %: land 20 normal hits and note the highest damage; land 10 criticals and note the most common.
    3. Change only LUK to 50 and then to 99, repeating step 1 and step 2 at each.
    4. At each LUK, compare the critical damage with the highest normal damage, and then with the tooltip value.
  - **Write down:** LUK → critical damage from the tooltip; LUK → highest normal damage (20 hits) and most common critical damage (10 criticals); Weapon and refine, class and level
  - **Lead:** What we are checking: whether real critical damage follows the tooltip value (and how it changes with LUK). Not confirmed yet.
- [ ] `d9` **Does skill damage follow its percentage? And "+N% damage with skill X"?** *(needs gear or a target)*
  - **You need:** An attack skill with a percentage shown in its description; For the second part: a piece with "+N% damage with skill X" (the same skill); The server's training dummy (see d0)
  - **Steps:**
    1. Target: the dummy (d0), no buffs and no other ATK %. Land 10 normal hits and note the lowest, highest and most common.
    2. Use the skill 10 times and note the lowest, highest and most common. Compare with the normal attack and with the percentage in the description.
    3. Equip the "+N% damage with the skill" piece and use the skill 10 more times.
    4. Compare with and without the piece: does the N% seem to add to the skill's percentage or apply to the final damage?
  - **Write down:** Skill, level and the percentage in the description; Lowest / highest / most common: normal attack, skill, skill with the piece; Piece name and its N%, weapon and refine, class and level
  - **Lead:** What we are checking: whether skill damage follows the percentage in the description and how a "+N% damage with skill X" bonus applies (added to the skill percentage or on the final damage). Not confirmed yet.
- [ ] `d10` **How much does the target's DEF reduce the damage you deal?** *(needs gear or a target)*
  - **You need:** Codex targets of the same size and neutral, with DEF 0 (or the dummy, if d0 confirms it), medium DEF and high DEF; A weapon with no cards
  - **Steps:**
    1. Pick the three targets in the codex and note each one's DEF.
    2. With the same weapon, no buffs and no other ATK %, land 10 criticals on each target (a critical doesn't vary with the weapon) and note the lowest, highest and most common.
    3. Land 10 more criticals on each target if any result varies, to reach 10 or more hits per target.
    4. Compare the damage drop from DEF 0 to medium DEF and to high DEF.
  - **Write down:** Target (name) → DEF → lowest / highest / most common; Weapon and refine, ATK in Alt+Q, class and level
  - **Lead:** What we are checking: whether the damage reduction from the target's DEF is proportional to the damage, fixed per point of DEF, or both. Not confirmed yet.
- [ ] `d11` **Do melee % and ranged % damage bonuses apply to normal attacks and skills?** *(needs gear or a target)*
  - **You need:** A piece with "melee damage +N%" or "ranged damage +N%"; An attack skill (check in its description whether it is melee or ranged); The server's training dummy (see d0)
  - **Steps:**
    1. Target: the dummy (d0), no buffs and no other ATK %. Without the piece, land 10 criticals with the normal attack and use the skill 10 times; note the lowest, highest and most common of each.
    2. Equip only the piece (for the ranged bonus, use a ranged attack, like a bow) and repeat both groups of hits.
    3. Compare the increase on the normal attack and on the skill with the piece's N%.
  - **Write down:** Piece name and its N%, and whether it is melee or ranged; Normal attack and skill: lowest / highest / most common, without and with the piece; Skill name, weapon, class and level
  - **Lead:** What we are checking: whether melee and ranged damage bonuses apply to normal attacks and to skills, and to which skills. Not confirmed yet.
- [ ] `d12` **Above the safe refine, does the weapon get a random damage bonus?** *(needs gear or a target)*
  - **You need:** The same weapon at its safe refine and at +10 (or the highest refine you have). Only do it if you have the refined weapon.; The server's training dummy (see d0)
  - **Steps:**
    1. Target: the dummy (d0), no buffs and no other ATK %. With the weapon at the safe refine, land 30 criticals or more and note the lowest and highest damage and the most common.
    2. Swap to the same weapon at +10 (or the highest refine you have) and repeat with 30 criticals or more.
    3. Compare the damage range (lowest to highest) at the two refines. The bonus, if there is one, is not shown in Alt+Q, only in the damage.
  - **Write down:** Refine → lowest / highest / most common (30 or more criticals); Weapon name, ATK in Alt+Q at each refine; Class and level
  - **Lead:** What we are checking: whether above the safe refine the weapon gets a random damage bonus that Alt+Q does not show. Not confirmed yet.

## Magic damage

*High priority* · The planner shows MATK, but not the real damage of a spell. Same method as physical damage: a standing neutral target, no buffs and no other MATK %, reading the damage number on screen.

**Open (3)**

- [ ] `m1` **How does MATK vary, and how much damage does a spell deal?**
  - **You need:** A magic class with a damage skill whose percentage is in its description; The server's training dummy (see d0)
  - **Steps:**
    1. Target: the dummy (d0), no buffs and no other MATK %. Open the attributes window (Alt+Q) and note MATK (lowest and highest, as shown).
    2. Use the skill 20 times and note the lowest, the highest and the most common.
    3. Also note the skill percentage from its description, to compare the lowest and highest damage with the lowest and highest MATK.
  - **Write down:** Lowest / highest / most common of the 20 casts; MATK (lowest and highest) in Alt+Q; Skill, level and description percentage, weapon and refine, class and level
  - **Lead:** What we are checking: whether spell damage varies between the lowest and highest MATK, and how the skill percentage enters. Not confirmed yet.
- [ ] `m2` **How much does the target's MDEF reduce magic damage?** *(needs gear or a target)*
  - **You need:** Codex targets of the same size and neutral, with MDEF 0 (or the dummy, if d0 confirms it), medium MDEF and high MDEF; A magic damage skill (the same on all three targets)
  - **Steps:**
    1. Pick the three targets in the codex and note each one's MDEF.
    2. With no buffs and no other MATK %, use the same skill 10 times on each target and note the lowest, highest and most common.
    3. Compare the damage drop from MDEF 0 to medium and to high.
  - **Write down:** Target (name) → MDEF → lowest / highest / most common; Skill and level, MATK in Alt+Q, class and level
  - **Lead:** What we are checking: whether the magic damage reduction from the target's MDEF is proportional to the damage, fixed per point, or both. Not confirmed yet.
- [ ] `m3` **Does the spell element change damage as in the codex table?** *(needs gear or a target)*
  - **You need:** A magic skill with an element; A target where that element gives a multiplier other than 100% in the codex table, and a neutral target of the same size and MDEF
  - **Steps:**
    1. In the server codex, open the element table, pick the two targets and note the table multiplier and each one's MDEF.
    2. With no buffs and no other MATK %, use the same skill 10 times on each target and note the lowest, highest and most common.
    3. Compare the ratio between the damages with the table multiplier.
  - **Write down:** Skill element, element and MDEF of both targets, table multiplier; Lowest / highest / most common on each target; Skill and level, class and level
  - **Lead:** What we are checking: whether magic damage changes with the target's element by the same proportion as the codex table. Not confirmed yet.

## Max HP and SP

*Medium priority* · Left out of the calculation today because they depend on the class.

**Open (5)**

- [ ] `h1` **What are each class's base max HP and SP at each level?**
  - **You need:** No gear, cards or buffs on the character; Being able to repeat at several levels (other characters, or the same one as it levels)
  - **Steps:**
    1. Take off all gear and buffs and open the attributes window (Alt+Q).
    2. Note max HP and max SP, and always the base VIT and INT (the number before the "+"), even if they did not change.
    3. Repeat at other levels (e.g. 1, 30, 60, 99, 120 and 150), with the same VIT in all of them: that way only the class table changes between readings. One reading per level, at least 3 levels.
    4. Base SP is covered here: keep INT the same too and note max SP at each level.
  - **Write down:** Level → max HP / max SP (each reading); Base VIT and INT of each reading; Class
  - **Lead:** What we are checking: whether base max HP and SP depend only on class and level when VIT is the same. Not confirmed yet.
  - So far: Neither of the two sources has a per-class HP/SP table. Way forward: status window screenshots (max HP/SP) with no equipment, per class, at a few levels (e.g. 1, 50, 99, 120, 150).
- [ ] `h2` **How much max HP does each point of VIT add?**
  - **You need:** No gear or buffs on the character; A stat reset (or different characters) to have VIT 1, 50 and 99 at the same level; A second level or another character for the repeat
  - **Steps:**
    1. With no gear or buffs, open the attributes window (Alt+Q) and note max HP with VIT at 1.
    2. At the same level, change only VIT to 50 and note max HP; then to 99 and note it again. Change no other stat.
    3. Repeat VIT 1 and VIT 99 at a second level or on another character, to see whether each point of VIT is proportional to base HP or a fixed amount per point.
  - **Write down:** VIT → max HP (1, 50 and 99, at the first level); VIT → max HP (1 and 99, at the second level or character); Class and level of each reading
  - **Lead:** What we are checking: whether each point of VIT adds a share of base HP or a fixed amount per point. Not confirmed yet.
- [ ] `h4` **Does VIT from gear add extra max HP?** *(needs gear or a target)*
  - **You need:** A piece with a VIT bonus and no HP bonus; No other piece equipped; Free stat points or a reset to reach the same total VIT without the piece
  - **Steps:**
    1. With no gear, open the attributes window (Alt+Q) and note max HP, base VIT and the VIT bonus (the number after the "+").
    2. Equip only the VIT piece and note max HP and total VIT.
    3. Take the piece off and spend stat points to reach the same total VIT (or use the HP already measured in h2 for that VIT) and note max HP.
    4. Compare the two max HP values. If you can, repeat with a second VIT piece.
  - **Write down:** Piece name and refine, VIT it gives; Max HP with the piece / max HP with the same VIT from points; Base and total VIT, class and level
  - **Lead:** What we are checking: whether VIT from gear gives extra max HP beyond what the same VIT from points gives. Not confirmed yet.
- [ ] `h5` **In what order do flat and % max HP/SP from gear apply?** *(needs gear or a target)*
  - **You need:** A piece with a flat "Max HP +N" and no other HP bonus; A piece with "Max HP +N%" and no other HP bonus; If you can, the same for SP
  - **Steps:**
    1. With no gear, open the attributes window (Alt+Q) and note the base max HP (and max SP, if testing SP).
    2. Equip only the flat HP piece and note max HP. Take it off.
    3. Equip only the HP % piece and note max HP. Take it off.
    4. Equip both together and note max HP, to see whether the % applies after the flat amount is added or only to the base.
    5. Repeat for SP, if you have the pieces.
  - **Write down:** Name and refine of both pieces; Max HP: base / flat only / % only / both; The same for SP, if tested; Class and level
  - **Lead:** What we are checking: whether the % max HP/SP from gear applies after the flat amount is added or only to the base. Not confirmed yet.
- [ ] `h6` **Do transcendent or Legend classes have more HP at the same level and VIT?** *(needs gear or a target)*
  - **You need:** One normal-class character and one transcendent or Legend character (can be the same character before and after changing class); No gear or buffs
  - **Steps:**
    1. With no gear or buffs, open the attributes window (Alt+Q) on the normal-class character and note level, base VIT, max HP and max SP.
    2. Do the same on the transcendent or Legend character, at the same level and with the same VIT. If you can't match the level, use two levels that exist on both.
    3. Repeat at a second level if you can (two pairs in total).
  - **Write down:** For each character: class, level, VIT → max HP / max SP
  - **Lead:** What we are checking: whether transcendent or Legend classes have higher max HP than normal ones at the same level and VIT. Not confirmed yet.

<details>
<summary>Confirmed (1)</summary>

- [x] `h3` **INT does not change max SP**: Confirmed: INT does not raise max SP, only SP regen.

</details>

## Formulas the tool already uses

*Medium priority* · They come from the site's Codex, which was already wrong once (INT/SP). How to test: with no gear, enter the same level and stats as the character in the tool and compare each number in the Status window with the tool's Status tab.

**Open (2)**

- [ ] `f7` **With a ranged weapon, does ATK use DEX instead of STR?** *(needs gear or a target)*
  - **You need:** A bow and a dagger, with no cards and no ATK rolls; A stat reset (or different characters) to vary STR and DEX
  - **Steps:**
    1. Equip the bow (no cards, no ATK rolls) and open the attributes window (Alt+Q).
    2. Note ATK (the left number, before the "+") with STR 1 / DEX 1, STR 1 / DEX 50, STR 50 / DEX 1 and STR 50 / DEX 50.
    3. Repeat the same four pairs with a dagger, as a control, changing nothing else.
    4. Add the 40 → 50 pair, on STR and on DEX (one at a time), with both weapons: every 10 points there is an extra bonus (f8), and we want to tell it apart from the effect of each point.
    5. If you can, repeat with a whip or a deck.
  - **Write down:** Name and refine of each weapon; STR / DEX → ATK (each pair, bow and dagger); Class and level
  - **Lead:** What we are checking: whether ATK uses DEX in place of STR with a ranged weapon, and whether the dagger keeps using STR. Not confirmed yet.
  - So far: Confirmed by the player: weapons that do not need to be 1 square from the mob are ranged and use DEX: bow, heavy bow, revolver, deck, whip, codex, chain and shuriken (glove and golf club are melee). Applied as a mirror of melee: DEX becomes the main stat and STR the secondary. Only a screenshot with a bow is missing to check the numbers.
- [ ] `f10` **How much damage do DEF and MDEF reduce?** *(needs gear or a target)*
  - **You need:** A monster that always attacks the same way, or someone who always uses the same skill on you (fixed damage or a critical hit if possible, no variation); Pieces that change your DEF and, in another round, your MDEF
  - **Steps:**
    1. With no gear (equipment DEF at 0), open the attributes window (Alt+Q) and note DEF and MDEF. This is the starting point.
    2. Take at least 5 hits and note, for that DEF, the lowest damage, the highest and the most common.
    3. Swap pieces to get at least 3 well-spaced DEF levels (low, medium and high) and repeat the previous step at each one, with at least 5 hits per level.
    4. Do MDEF in a separate round, with a magic attack, keeping DEF the same; and DEF with a physical attack, keeping MDEF the same. Don't mix the two in one round.
  - **Write down:** For each try: pieces used (name and refine) → DEF / MDEF → lowest / highest / most common damage taken; The monster or skill used; Class and level
  - **Lead:** What we are checking: how damage taken changes as DEF goes up (proportional or fixed per point) and whether MDEF follows the same logic. Not confirmed yet.

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

- [ ] `s1` **Does a Long Sword count for Blade Mastery?** *(needs gear or a target)*
  - **You need:** Points in Blade Mastery; A Long Sword
  - **Steps:**
    1. Equip the weapon, open the attributes window (Alt+Q) and note ATK and HIT.
    2. Build the same character in the planner (class, level, stats, the weapon and skills) and check the ATK and HIT it shows.
    3. If the game shows exactly the Blade Mastery bonus on top, the weapon counts for the skill.
  - **Write down:** Weapon name and refine; ATK and HIT in game; ATK and HIT in the planner; Blade Mastery level; Class and level
- [ ] `s2` **Do Two-Handed Sword, Knight Sword and Bone Sword count for Blade Mastery?** *(needs gear or a target)*
  - **You need:** Points in Blade Mastery; Two-Handed Sword, Knight Sword and Bone Sword
  - **Steps:**
    1. Equip each of them (one at a time), open the attributes window (Alt+Q) and note ATK and HIT.
    2. Build the same character in the planner (class, level, stats, the weapon and skills) and check the ATK and HIT it shows.
    3. If the game shows exactly the Blade Mastery bonus on top, the weapon counts for the skill.
  - **Write down:** Weapon name and refine; ATK and HIT in game; ATK and HIT in the planner; Blade Mastery level; Class and level
- [ ] `s3` **Does a Heavy Bow count for Bow Mastery?** *(needs gear or a target)*
  - **You need:** Points in Bow Mastery; A Heavy Bow
  - **Steps:**
    1. Equip the Heavy Bow, open the attributes window (Alt+Q) and note DEX.
    2. Build the same character in the planner (class, level, stats, the weapon and skills) and check the DEX it shows.
    3. If the game shows exactly the Bow Mastery bonus on top, the weapon counts for the skill.
  - **Write down:** Weapon name and refine; DEX in game; DEX in the planner; Bow Mastery level; Class and level
- [ ] `s4` **Does Perfection Mastery's extra MATK apply only at level 5, or from 5 up?** *(needs gear or a target)*
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

## Casting and delay

*Medium priority* · The Status tooltip shows the cast reduction, but the real time of skills has not been measured yet. Use a stopwatch and repeat each measurement.

**Open (4)**

- [ ] `c1` **Does variable cast time fall in a straight line with DEX and INT?**
  - **You need:** A skill with a long cast; A stopwatch; A stat reset to get 3 or more combinations of DEX and INT, with no cast gear or buffs
  - **Steps:**
    1. With no cast gear or buffs, pick the skill and open the attributes window (Alt+Q); note DEX, INT and the cast reduction the tooltip shows.
    2. Cast the skill 5 times and time each one (from the start of the bar to the effect). Note the lowest, the highest and the average.
    3. Repeat at at least 3 well-spaced DEX and INT combinations (one low, one medium and one high), 5 casts at each.
  - **Write down:** DEX / INT → time of each cast (5 per combination); Tooltip reduction at each combination; Skill and level, class and level
  - **Lead:** What we are checking: whether cast time falls in a straight line as DEX and INT go up, or follows another curve. Not confirmed yet.
- [ ] `c2` **Is there some cast time that DEX and INT do not reduce?**
  - **You need:** A skill with a long cast and a stopwatch; DEX and INT high enough for the cast tooltip to reach the maximum it shows; No cast gear or buffs
  - **Steps:**
    1. Open the attributes window (Alt+Q) and raise DEX and INT to the point where the cast tooltip shows its maximum (the variable part should reach zero). Note DEX, INT and the tooltip.
    2. Cast the skill 5 times and time each one. Note the time left.
    3. If you can, repeat with a second long-cast skill, to see whether the time left is the same.
  - **Write down:** DEX / INT / tooltip → time of each cast; Name and level of each skill; Class and level
  - **Lead:** What we are checking: whether some cast time is left that DEX and INT do not reduce, and how much. Not confirmed yet.
- [ ] `c3` **Do fixed-cast reductions from gear stack, or does only the highest count?** *(needs gear or a target)*
  - **You need:** Two pieces with "fixed cast −N%" and a skill that has a fixed cast. Only do it if you have the pieces.; A stopwatch
  - **Steps:**
    1. With no cast gear, cast the skill 5 times and time each; note the average. Note DEX and INT (Alt+Q), which must not change in the next steps.
    2. Equip only piece A and repeat the 5 casts. Then only piece B, 5 more.
    3. Equip both together and repeat the 5 casts.
    4. Compare the time with both pieces against each one alone.
  - **Write down:** Name and N% of both pieces; Average time: no piece / A only / B only / A and B; Skill, DEX, INT, class and level
  - **Lead:** What we are checking: whether two fixed-cast reductions from gear add up or only the highest counts. Not confirmed yet.
- [ ] `c4` **Do after-cast delay reductions stack?** *(needs gear or a target)*
  - **You need:** Two pieces with after-cast delay reduction, and a skill with no cast time and an after-cast delay. Only do it if you have the pieces.; A stopwatch
  - **Steps:**
    1. Without the pieces, use the skill 10 times in a row, as soon as the delay allows, and time from the start of the 1st to the start of the 10th use. Divide by 9 to get the time per use.
    2. Repeat with only piece A, then only piece B (10 uses in a row each).
    3. Repeat with both together and compare the time per use against each one alone.
  - **Write down:** Name and reduction of each piece; Time per use: no piece / A only / B only / A and B; Skill, class and level
  - **Lead:** What we are checking: whether after-cast delay reductions from different pieces add together. Not confirmed yet.

## Regeneration

*Medium priority* · Natural HP and SP regeneration has not been measured on this server yet.

**Open (2)**

- [ ] `g1` **How much HP and SP come back per regeneration tick?**
  - **You need:** A character with no regeneration skills active, no regeneration gear and no buffs; Low HP and SP (use an SP-spending skill and take some damage); A stopwatch is optional; what matters is noting each recovered amount
  - **Steps:**
    1. Open the attributes window (Alt+Q) and note VIT, INT, max HP and max SP.
    2. With low HP and SP, stand still (no walking, no /sit) and watch HP and SP rise. Note the amount of each recovery, for at least 5 HP ticks and 5 SP ticks.
    3. If you can, repeat with another VIT, INT or max HP/SP (stat reset or another character).
  - **Write down:** Amount of each HP and SP tick (5 or more of each); VIT, INT, max HP and max SP of each reading; Class and level
  - **Lead:** What we are checking: how much HP and SP return per tick and which stats that amount depends on. Not confirmed yet.
- [ ] `g2` **Does the regeneration tick change while sitting?**
  - **You need:** A character with no regeneration skills active, no regeneration gear and no buffs; Low HP and SP; A stopwatch
  - **Steps:**
    1. With low HP and SP, standing still, time the interval between 5 ticks in a row of HP and between 5 of SP. Note each interval and the amount recovered.
    2. Sit (/sit) and repeat the measurement: 5 HP ticks and 5 SP ticks, with the interval and amount of each.
    3. Compare the intervals and amounts standing and sitting.
  - **Write down:** Intervals and amounts of each tick, standing (5 or more of HP and SP); The same, sitting; VIT, INT, max HP and SP, class and level
  - **Lead:** What we are checking: whether the interval and amount of each tick change while the character is sitting. Not confirmed yet.

## Gear bonuses

*Low priority* · Cases the tool leaves out because it isn't sure.

**Open (2)**

- [ ] `e1` **Does the Grand Peco Card set bonus (DEF +5) work?** *(needs gear or a target)*
  - **You need:** Grand Peco Card and Peco Peco Card
  - **Steps:**
    1. With only the Grand Peco Card equipped, open the attributes window (Alt+Q) and note DEF.
    2. Also equip the Peco Peco Card and note DEF again.
  - **Write down:** Pieces holding the cards (name and refine); DEF without the Peco Peco Card; DEF with the Peco Peco Card; Class and level
- [ ] `e2` **On Metal Boots, which stat gets the "STR, INT or DEX +2"?** *(needs gear or a target)*
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

- [ ] `o1` **At Orphanage level 60, do Juperos, Crystal Caves, Thanatos Tower and Kiel Hyre show up at Skia Nerius?** *(needs gear or a target)*
  - **You need:** Orphanage at level 60
  - **Steps:**
    1. Talk to Skia Nerius (Dungeon Caravan).
    2. Check whether Juperos, Crystal Caves, Thanatos Tower and Kiel Hyre are on the list.
  - **Write down:** Screenshot of the list; Orphanage level
- [ ] `o2` **At Orphanage level 105, do Abyss Lake and Sky Garden open up?** *(needs gear or a target)*
  - **You need:** Orphanage at level 105
  - **Steps:**
    1. Talk to Skia Nerius (Dungeon Caravan).
    2. Check whether Abyss Lake and Sky Garden are on the list.
  - **Write down:** Screenshot of the list; Orphanage level

---

*Results are written as the testers noted them.*
