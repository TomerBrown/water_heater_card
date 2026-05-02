# Water Heater Card

Lovelace custom card for **`water_heater`** entities (and Xiaomi MIoT kettles with **`kettle.status`**).

## Requirements

Home Assistant **2024.1 or newer**, working **HACS** (optional).

## Install (HACS)

1. **[HACS](https://github.com/hacs/integration) → ⋮ → Custom repositories**  
   - Repository: **`https://github.com/TomerBrown/water_heater_card`**  
   - Type / category: **Dashboard** (Lovelace custom card).  
   - If your HACS build only lists **Frontend**, use that for dashboard resources.

2. **HACS → Frontend / Dashboard** — open **Water Heater Card** → **Download**.

   **Version in HACS:** If you only use the default branch, HACS may show a **7‑character commit hash** as the version (that is [expected](https://hacs.xyz/docs/publish/start/) until you ship **GitHub Releases**). This repo’s workflow publishes a Release when you push a tag like **`v0.3.5`** (see `.github/workflows/release.yml`); after that, HACS shows **`v0.3.5`** and can install from the latest release.

3. Add a card:

```yaml
type: custom:water-heater-card
entity: water_heater.example
```

## Manual install

Copy **`water-heater-card.js`** from this repo root into **`/config/www/water_heater/`** (or similar), register it as **JavaScript module** in Lovelace resources. See **`docs/home-assistant-testing.md`**.

## Develop

```bash
npm install
npm run build
npm run dev   # open dev/index.html on printed port + /dev/index.html
```

**Publishing / HACS:** HACS expects **`water-heater-card.js`**, **`hacs.json`**, and **`README.md`** at the repo root on the tracked branch or in the **latest GitHub Release**. Run **`npm run build`** before pushing. To cut a release: **`git tag v0.x.y && git push origin v0.x.y`** (CI attaches the built bundle to the GitHub Release).

