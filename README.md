# Wildwood Dancing Pronunciation Guide

This package is ready for GitHub Pages and can be installed on Android as a Progressive Web App (PWA).

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `wildwood-pronunciation`.
2. Unzip this package.
3. Upload **the contents of the unzipped folder** to the repository root. Do not upload only the ZIP.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your main branch (usually `main`) and **/(root)**, then save.
7. Once GitHub gives you the Pages URL, open that URL in Chrome on your Android phone.
8. Tap the app's **Install app** button when it appears, or use Chrome's install option.

## How it works

- The interface is cached for offline use after the first successful load.
- Pronunciations use the speech voices installed on the device; no prerecorded audio is bundled.
- Voice preference and recently played terms are stored locally on the device.

## Updating later

Replace or edit files in the GitHub repository. GitHub Pages will republish the site at the same address. For major changes, increment the cache name near the top of `service-worker.js` (for example from `v1` to `v2`) so installed copies refresh promptly.
