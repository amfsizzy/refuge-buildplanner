# Refuge Build Planner

A browser tool to plan gear builds and simulate stats for **RTM: Refuge**, a private game server.

**▶ Open the planner: https://amfsizzy.github.io/refuge-buildplanner/**

![Single HTML file](https://img.shields.io/badge/stack-single%20HTML%20file-6b13b9) ![No backend](https://img.shields.io/badge/backend-none-45d99a) ![Languages](https://img.shields.io/badge/UI-English%20%7C%20Portugu%C3%AAs-a95cff)

## What it does

- **Multiple loadouts**, one per character or build, each with **Early / Mid / Late** gear sets you switch between
- Item and card **sprites and tooltips** loaded live from the server's public item database
- **Refine levels**, card slots and the **extra rolled options** an item copy has (e.g. `ATK +3`, `ASPD Limit +2`)
- **Set bonuses**, including which pieces are still missing (alternative versions of a piece count as one slot)
- **Class passive skills**: every passive in the public database was reviewed; only flat bonuses the simulator can model are added, and only with the right weapon type
- **Stat simulator**: HIT, FLEE, Critical, Perfect Dodge, ATK/MATK, soft DEF/MDEF and ASPD cap, using the formulas published in the database's glossary
- **Stage comparison** side by side
- **Farm list**: where each piece drops, with travel routes confirmed in game
- **Share codes** to send a loadout to a friend, plus JSON export/import as a backup
- **English and Portuguese** UI

## Accuracy: work in progress

We **don't have access to the game files**. Everything the planner knows comes from the information the server's **public item database** makes available, plus what players confirm in game. Some mechanics simply aren't published there, so they can't be calculated until someone measures them.

Because of that, numbers are kept **on the low side on purpose**: a bonus is only added once it is documented in the public database or confirmed in game, so the tool never shows a build stronger than it really is.

Not calculated yet:

- ATK/DEF gained from refining itself
- Percentage bonuses (`ATK +3%`, `Max SP +10%`, …)
- Max HP / SP (they need per-class tables that aren't published)
- Real ASPD below the cap (only the reachable cap is shown)

## Help us close the gaps

Since we only have what the public database shows, the missing pieces have to be **measured in game**, and that's where you come in. Everything that still needs testing is tracked in the checklist:

**👉 [CHECKLIST.md](CHECKLIST.md)** · [Português](CHECKLIST.pt-BR.md)

Pick an open item, test it in game and **[open a "Test result" issue](../../issues/new?template=test-result.yml)** with a screenshot of your Status window (class, level, base stats and gear with refine levels). Confirmed results go straight into the tool.

Found something broken? **[Report a bug](../../issues/new?template=bug-report.yml)**.

## Privacy and security

- **No account, no server, no analytics.** The page is a static file. Your loadouts are saved only in your own browser (`localStorage`); nothing is uploaded anywhere.
- The only third parties contacted are the public item database (item data and sprites) and Google Fonts, which, like any website, sees your IP address when your browser downloads the fonts.
- A strict **Content Security Policy** blocks every other site, so a loadout code someone sends you cannot load images or scripts from anywhere else.
- Imported loadout codes and backup files are size-limited and rebuilt field by field before use, so a malformed or hostile code is rejected or cleaned up instead of breaking the app or your saved loadouts.
- Text coming from the item database or from shared codes is always rendered as plain text, never as HTML.
- To report a security issue privately, see [SECURITY.md](SECURITY.md).

## Run it locally

Download `index.html` and open it in any modern browser. That's it: no build step, no install.

## Credits

All credit for the game content, item data, artwork and mechanics goes to the **RTM Refuge Staff**.

This is an **unofficial, fan-made tool**. It is not affiliated with, endorsed by or supported by the server's staff.

## License

The planner's code is released under the [MIT License](LICENSE). Game data and artwork belong to their respective owners; they are loaded at runtime and are not part of this repository.
