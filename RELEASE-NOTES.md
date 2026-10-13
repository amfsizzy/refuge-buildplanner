# Release notes — new Equipment layout, set refine and tooltip fixes

Changes since commit `7f57846` (body armor refine DEF and level 4 weapon refine).

## New

### Equipment and Shadow: new layout
- Slots sit in two columns around a center showcase, in the same order as the in-game window
  (Equipment: upper/lower headgear, weapon, garment, left accessory | mid headgear, armor,
  off-hand, shoes, right accessory; Shadow: gloves, left pendant, rune | armor, shoes, right pendant).
- Each slot shows a sharp 2x sprite, the refine, card pips, rolls, other effects and its stats
  on the right, colored by source: **green** = item, **purple** = cards, **gold** = rolls,
  **blue** = other effects.
- Hovering an item shows its full tooltip next to the mouse, with each block marked as active or
  inactive (refine, set, base level).
- Clicking an item pins it in the showcase:
  - the item art, framed like an in-game card;
  - the refine next to the name, edited with the pencil (0–10);
  - the base values and a gold **Rolls** panel to add rolled options;
  - two tabs: **Summary** (slot totals; a stat that comes from more than one source shows the
    total and each part) and **Sources** (item, cards, complete set and bonuses still locked by
    base level);
  - the buttons Change, Where to get and Clear, plus the x that closes the detail.
- With no item pinned, the showcase shows the totals of the whole tab (items, cards, rolls and
  complete sets), the other effects and the active sets.
- Slots that belong to a complete set get a "set active" tag.
- Cards with no picture in the database show the generic card art.
- Changing loadout or stage brings the showcase back to the summary.
- Works on phones: the showcase goes on top and the slots stack below.

### Switch between the new and the classic layout
- **New | Classic** buttons in the Equipment and Shadow tabs. The choice is remembered in the
  browser. Saved loadouts, share codes and backups are unchanged and work with both layouts.

### Tooltip in the item search
- Hovering a search result shows the item tooltip before you pick it.

### Shadow set refine
- Bonuses that depend on the refine of the whole shadow set are now calculated, using the sum of
  the refines of the equipped pieces and only with the set complete:
  - "Set refine 9+: ASPD Limit +1" (from that total on);
  - "Per total set refine: MDEF +1" and "Per 2 total set refines: …" (per step).
- The tooltip shows each of these blocks as active or inactive, with the current total.
- Set-refine bonuses written in other ways (for example "Set refine 9+, while poisoned:")
  are still left out.

### Ranged weapons use DEX
- With a bow, heavy bow or revolver, status ATK now comes from DEX (main stat) with STR as the
  secondary stat, mirroring the melee formula. The Status tab shows "ATK (from DEX)".
- The exact numbers still need a check in game (see the checklist).

### Level 4 weapons
- +2 ATK and MATK per refine (0.5 × weapon level), the same rule confirmed for levels 1 to 3.

## Fixed

Item tooltips are read more accurately. This changes the numbers of about 200 item and refine
combinations, almost all of them bonuses that were missing or counted the wrong way:
- **Wrapped lines.** The database splits long lines ("Variable Cast Time -2%" / "per refine.",
  "Magic Defense Penetration" / "+10"), and they are now read as one line. Before, a "per refine"
  bonus could count only once, or a value could be lost.
- **Fixed plus scaled bonus.** "Critical Rate +5, +1 per refine" counts 5 fixed plus 1 per
  refine. Before, it counted nothing.
- **"ATK and MATK +2"** gives the value to both. Before, it went only to MATK.
- **A value at the end of a sentence** ("ASPD Limit +1.") is counted. Before, the final dot
  hid it.
- **Wrong totals.** Some totals were too high because a fixed value was multiplied by the
  refine (for example, an armor with DEF +50 at +10 that should give +15). They are corrected.
- **Labels.** Other effects no longer show labels such as "and MATK" or "plus".
- **Summaries.** The shadow and slot summaries no longer show "undefined" for ASPD % and ASPD.

## Removed or changed
- Whips, instruments, books and decks no longer use the ranged ATK formula until it's
  confirmed that they count as ranged (see the checklist).
- The old ranged formula (STR × 0.2 + full DEX + DEX bonuses) was replaced by the DEX/STR swap.
- The "Set refine · not calculated" note was replaced by the real status of the set refine.
- The classic slot grid was **not** removed: it is one click away with the Classic button.

## Still open (see CHECKLIST.md)
- Refine DEF of shields, garments, shoes and headgear: waiting for one in-game test before
  applying the armor rule (+1 DEF every 2 refines).
- A print with a bow to confirm the ranged ATK numbers, and whether whips and decks count as ranged.
- Max HP and SP: no public per-class table exists, so in-game prints per class are needed.
- Final ASPD (needs the base ASPD of each weapon type).
