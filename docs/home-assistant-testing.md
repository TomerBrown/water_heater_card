# Testing the card in Home Assistant

This card is a Lovelace custom card (`custom:water-heater-card`). Install via **HACS** (§2) or **manually** into **`www`** (§3).

## 1. Build the bundle

From the project root:

```bash
npm install
npm run build
```

Artifacts:

- **`water-heater-card.js`** (repo root) — **tracked file HACS validates**; regenerate with **`npm run build`** and commit when you change UI.
- **`dist/water-heater-card.js`** — same bundle; **`dist/`** stays gitignored.
- **`dev/harness-bundle.js`** — used only by **`dev/index.html`** (§6).

## 2. Install with HACS

[HACS](https://hacs.xyz/) downloads the bundle into your config (usually under something like **`www/community/…`**) and wires it as a dashboard resource.

### Prerequisite

[HACS is installed](https://hacs.xyz/docs/setup/download) and you have completed its setup.

### Listed in the default HACS store

1. Sidebar → **HACS** → **Frontend** (sometimes labeled **Dashboard** in older HACS).  
2. Search for **Water Heater Card**.  
3. Open it → **Download** (latest version).  
4. If the UI does not pick it up, reload **Lovelace** or use **Profile → Developer tools** cache clear for the frontend.

Then add the card on a view (§4). HACS normally registers a **JavaScript module** resource automatically; if needed, check **Settings → Dashboards → Resources** for a **`/hacsfiles/…`** URL pointing at **`water-heater-card.js`**.

### Your own Git repo (custom repository)

Until the project is in the default store, or to track a fork:

1. **HACS** → top-right **⋮** → **Custom repositories**.  
2. **Repository:** HTTPS URL to the GitHub/GitLab repo (must be public for most installs), e.g. `https://github.com/your-user/water_heater_card`.  
3. **Category:** **Frontend** / **Dashboard** (the option for *Lovelace / dashboard* integrations).  
4. **Add**.

Then **HACS → Frontend** → find **Water Heater Card** → **Download**.

**Maintainership:** The branch HACS installs must include **`README.md`**, **`hacs.json`**, and **`water-heater-card.js`** at the repo root (see **`filename`** in **`hacs.json`**). After UI changes run **`npm run build`** and commit **`water-heater-card.js`**. If that file is absent, HACS reports *repository structure … is not compliant*. **`dist/`** may remain gitignored.

For [**default catalogue listing**](https://www.hacs.xyz/docs/publish/start/) GitHub also expects a repo **description**, **topics**, and a stable flow (tags / releases)—see HACS docs when you submit.

## 3. Manual install (no HACS)

HACS only automates copying into **`www`**. For local testing you want:

1. The built **ES module** on disk under **`/config/www/...`**
2. A **`lovelace` resource** with **`type: module`**

### 3a. Copy the bundle

Create a folder under your HA config (**`/config`** in the container = the **`config`** directory you edit):

```bash
mkdir -p "$CONFIG/www/water-heater-card"
cp dist/water-heater-card.js "$CONFIG/www/water-heater-card/water-heater-card.js"
```

Replace **`$CONFIG`** with your real path (`~/.homeassistant`, Docker-mounted `./config`, Synology HA share, etc.).

### 3b. Register the resource

**UI:** **Settings → Dashboards → ⋯ → Resources → Add resource**

- URL: **`/local/water-heater-card/water-heater-card.js?v=1`**
- Type: **JavaScript module**

**Or YAML:**

```yaml
lovelace:
  resources:
    - url: /local/water-heater-card/water-heater-card.js?v=1
      type: module
```

After every rebuild, bump **`?v=2`** (or higher) **or** hard-refresh — otherwise browsers often keep old JS (**wrong layout**, “vertical” chips, stale logic).

Restarting HA is usually **not** required when only **`www`** changes.

### 3c. Same-machine dev loop: symlink instead of copy

```bash
mkdir -p "$CONFIG/www/water-heater-card"
ln -sf "$(pwd)/dist/water-heater-card.js" "$CONFIG/www/water-heater-card/water-heater-card.js"
```

Then **`npm run build`**, bump **`?v=`**, reload the dashboard.

## 4. Add the card on a dashboard

**Manual card** YAML (or YAML mode in the UI editor):

```yaml
type: custom:water-heater-card
entity: water_heater.your_kettle
```

Optional:

- **`name`** — title override  
- **`temp_presets`** — e.g. `[60, 70, 80, 90, 100]`  
- **`keep_warm_presets`** — defaults in **`src/water-heater-card.ts`**  
- **`adapter`** — **`auto`** | **`xiaomi_miot`** | **`standard`** (force **`xiaomi_miot`** for Xiaomi kettle entities with **`kettle.status`** if needed)  
- **`keep_warm_remaining_entity`** — numeric **minutes remaining** entity for **`Keep warm · …m left`**

## 5. Smoke-test checklist

- States: off / idle / heating / keep warm / fault (if applicable)  
- Taps fire services (**Developer tools → Services** / device log)  
- Light vs dark themes look acceptable  
- Unavailable entity does not explode the UI  

## 6. Dev harness (no Home Assistant)

```bash
npm run dev
```

Open **`http://127.0.0.1:8765/dev/index.html`** (port from your terminal if different).

Requires **`npm run build`** so **`dev/harness-bundle.js`** exists. Use **`…/dev/index.html`** so relative URLs resolve; see §7.

## 7. Troubleshooting

- **HACS: “repository structure … is not compliant”** — Missing root **`water-heater-card.js`**, **`README.md`**, or **`hacs.json`**. Run **`npm run build`**, commit **`water-heater-card.js`** to **`main`**, push, then add the custom repository again. Repo must be **public**. Choose type **Dashboard** (or **Frontend** where that is used for Lovelace cards); an error mentioning `<Plugin …>` is generic and still refers to frontend assets here.
- **Preset row looks vertical / broken in HA** — Almost always **cached JS**: bump **`?v=`** on the Lovelace resource URL, hard reload. Inspect **`water-heater-card`** → Shadow DOM → **`.preset-row`**: **`display`** should include **`flex`**, **`flex-direction`** **`row`**. Prefer a wider column while debugging.  
- **No icons (`ha-icon` empty) in HA** — Confirm the **`Lovelace` resource** is loaded (**module**, correct URL). The card relies on HA’s **`ha-icon`** implementation.  
- **No icons only in **`dev/`** harness** — Re-run **`npm run build`**, reload; ensure **`dev/index.html`** loads **`@mdi/font`** from the CDN.  
- **`404`** for **`harness-bundle.js`** or **`mock-hass.js`** — Run **`npm run build`**. Open **`…/dev/index.html`** with the dev server cwd = **repo root** (see **`package.json`** **`npm run dev`**).  
- **Services noop** — See **`src/adapters/`** for expected **`water_heater`** / **`xiaomi_miot`** calls.
