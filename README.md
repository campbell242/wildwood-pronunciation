# Wildwood Dancing Pronunciation Guide

A mobile-first pronunciation companion for readers of *Wildwood Dancing* — a fast way to hear any Romanian word or phrase spoken aloud, browse a curated guide to the book's character names, places, and vocabulary, and revisit recently played terms. Ready for GitHub Pages and installable on Android (and other platforms) as a Progressive Web App (PWA).

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `wildwood-pronunciation`.
2. Unzip this package.
3. Upload **the contents of the unzipped folder** to the repository root. Do not upload only the ZIP.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your main branch (usually `main`) and **/(root)**, then save.
7. Once GitHub gives you the Pages URL, open that URL in Chrome on your Android phone.
8. Tap the app's **Install** button when it appears, or use Chrome's install option.

This package uses only relative paths (`./`), so it also works when the site is served from a project subdirectory, e.g. `https://username.github.io/wildwood-pronunciation/`.

## How it works

- **Say it in Romanian** — type any word or phrase and press Enter or tap the speaker button to hear it, using the Romanian voice installed on your device.
- **Recently pronounced** — your last 20 pronunciations (curated or free-typed) are remembered on this device; the 8 most recent show on the main screen, with "See all" to expand and "Clear" to reset.
- **The book's guide** — a curated list of ~60 character names, places, and Romanian words from the book, each with an easy phonetic spelling, IPA, and a short description. Search is diacritic-insensitive, so typing `tuica`, `razvan`, or `brasov` finds `Țuică`, `Răzvan`, and `Brașov`.
- **Slower** toggle (top right) — plays every pronunciation at 75% speed. For phrases of two or more words (e.g. "Tăul Ielelor"), each word is also spoken separately with a short pause in between, making it easier to pick apart. The setting is remembered on this device and applies everywhere: the free-form field, the guide, and recent history.
- The interface and curated guide are cached for offline use after the first successful load.
- Pronunciations use the speech voices installed on the device; no prerecorded audio is bundled.
- Voice preference, theme, and recently played terms are stored locally on the device — nothing is sent to a server.

## Updating later

Replace or edit files in the GitHub repository. GitHub Pages will republish the site at the same address. For major changes, increment the cache name near the top of `service-worker.js` (for example from `v4` to `v5`) so installed copies refresh promptly.
