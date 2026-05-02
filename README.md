# Water Heater Card

Lovelace custom card for **`water_heater`** entities (and Xiaomi MIoT kettles with **`kettle.status`**).

## Requirements

Home Assistant **2024.1 or newer**, working **HACS** (optional).

## Install (HACS)

1. **[HACS](https://github.com/hacs/integration) → ⋮ → Custom repositories**  
   - Repository: **`https://github.com/TomerBrown/water_heater_card`**  
   - Type / category: **Dashboard** (Lovelace custom card).  
   - If your HACS build only lists **Frontend**, use that for dashboard resources.

2. **HACS → Frontend** — open **Water Heater Card** → **Download**.

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

**Publishing / HACS:** HACS expects **`water-heater-card.js`**, **`hacs.json`**, and **`README.md`** at the repo root on the tracked branch you install from. Run **`npm run build`** before pushing so **`water-heater-card.js`** is up to date, then commit that file along with sources.
