# ✈️ AircraftWaifu

> *Assign a personified anime character ("waifu") to any real aircraft model based on its stats.*

**AircraftWaifu** is a pure HTML/CSS/JS web app — no build tools, no dependencies, no server required. Search any of the 30 aircraft in the database and receive a fully generated anime character archetype based on the plane's real combat stats, era, role, and historical quirks.

---

---

## ✨ Features

- **30 Aircraft** — from WWI biplanes to stealth bombers and supersonic airliners
- **10 Waifu Archetypes** — each with a distinct personality, catchphrase, voice profile, and signature ability
- **Stat-Driven Generation** — speed, maneuverability, firepower, toughness, range, altitude, and stealth all influence the character
- **Searchable + Quick-Pick** — fuzzy search autocomplete plus quick-pick shortcuts for famous aircraft
- **Zero Dependencies** — no npm, no frameworks, no build step. Just open `index.html`
- **Copy Result** — clipboard export for sharing your aircraft waifu

---

## 🎭 Archetypes

| Archetype | Personality | Triggered By |
|---|---|---|
| Tsundere Ace | Aggressive, competitive, secretly caring | High speed + high maneuverability |
| Kuudere Phantom | Emotionless, philosophical, haunting | Extreme stealth / recon role |
| Genki Speedster | Energetic, chaotic, unstoppable | Max speed, low maneuverability |
| Gentle Giant | Protective, patient, underestimated | Bomber/transport, high toughness |
| Supersonic Ojou-sama | Aristocratic, elegant, perfectionist | Civil aircraft + high speed |
| Yandere Prototype | Obsessive, unstable, brilliant | Experimental, low toughness |
| Battle-Hardened Onee-san | Calm, authoritative, scarred | High firepower + veteran era |
| Sky Aristocrat | Old-world honour, formal, fierce | WWI era aircraft |
| Sky Kunoichi | Silent, mission-focused, a shadow | Stealth bomber / night ops |
| Dependable Senpai | Practical, stubborn, underappreciated | Transport / trainer role |

---

## 🛩️ Aircraft Database

WWI through Modern era, covering:

- **USA**: F-22, SR-71, A-10, F-16, B-2, F-117, F-14, F-35, B-52, F/A-18, C-130, B-17, P-51, F-4, T-38, Boeing 747
- **UK**: Spitfire, Lancaster, Harrier (co), Concorde (co)
- **Germany**: Bf 109, Fokker Dr.I
- **Japan**: Mitsubishi A6M Zero
- **Russia**: Su-27, MiG-21, Tu-160
- **Europe**: Eurofighter Typhoon, Dassault Rafale
- **USA/UK**: Concorde, AV-8B Harrier
- **USA**: U-2

---

## 🗂️ File Structure

```
AircraftWaifu/
├── index.html          # Full UI — all markup, styles, and app logic
├── src/
│   ├── aircraft.js     # Aircraft database (30 entries, ES module)
│   └── waifuEngine.js  # Archetype selection + stat interpretation engine
└── README.md
```

All files use **ES modules** (`type="module"`). This means you need to serve via a local server or GitHub Pages — opening `index.html` directly as a `file://` URL will block module imports due to browser CORS policy.

### Local Development

```bash
# Python (built-in)
python3 -m http.server 8080

# Node (if you have it)
npx serve .

# VS Code
# Use the "Live Server" extension
```

Then open `http://localhost:8080`.

---

## 🛠️ Extending the Project

### Adding an Aircraft

In `src/aircraft.js`, add an entry to the `AIRCRAFT` array:

```js
{
  id: "unique_id",
  name: "Display Name",
  origin: "🇺🇸 USA",
  era: "modern",            // "wwi" | "wwii" | "cold_war" | "modern"
  role: "fighter",          // "fighter" | "bomber" | "attacker" | "recon" | "transport" | "civil" | "trainer"
  year: 2010,               // first flight / service entry
  stats: {
    speed:          0–10,
    maneuverability:0–10,
    firepower:      0–10,
    toughness:      0–10,
    range:          0–10,
    altitude:       0–10,
    stealth:        0–10
  },
  trivia: "An interesting real-world fact.",
  tags: ["tag1", "tag2"]
}
```

### Adding an Archetype

In `src/waifuEngine.js`, add an entry to the `ARCHETYPES` object and update the scoring logic in `selectArchetype()`.

---

## 📜 License

MIT — use it, fork it, waifu-ify your entire air force.

---

*Made with 愛 for aviation nerds and anime fans alike.*
