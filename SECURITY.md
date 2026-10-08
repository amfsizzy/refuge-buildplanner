# Security Policy

Refuge Build Planner is a static, single-file web page. It has no server, no accounts and stores loadouts only in the visitor's own browser.

## Reporting a vulnerability

Please **do not open a public issue** for security problems. Use GitHub's private reporting instead:

**[Report a vulnerability privately](../../security/advisories/new)** (Security tab → "Report a vulnerability")

Useful details: what you found, how to reproduce it (for example, a loadout share code or JSON file that triggers it) and what an attacker could do with it.

You can expect a first reply within a few days. Once fixed, the change is published to the live page right away.

## Scope

In scope: anything in this repository, for example a crafted share code or imported JSON that runs script, loads external content despite the Content Security Policy, or corrupts other saved loadouts.

Out of scope: the public item database and the game server itself; please report those to their owners.

## Please never share

When posting test results or bug reports, **never include your game account login, password, email or any personal information**. A screenshot of the in-game Status window is all we need; crop or blur your character and account names first.
