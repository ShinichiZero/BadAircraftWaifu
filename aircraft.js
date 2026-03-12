// AircraftWaifu — Aircraft Database
// Stats are on a 0–10 scale

const AIRCRAFT = [
  {
    id: "f22",
    name: "F-22 Raptor",
    origin: "🇺🇸 USA",
    era: "modern",
    role: "fighter",
    year: 2005,
    stats: { speed: 10, maneuverability: 9, firepower: 9, toughness: 7, range: 7, altitude: 10, stealth: 10 },
    trivia: "The only 5th-gen air superiority fighter with supercruise — it breaks the sound barrier without afterburners.",
    tags: ["supercruise", "stealth", "twin-engine"]
  },
  {
    id: "sr71",
    name: "SR-71 Blackbird",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "recon",
    year: 1966,
    stats: { speed: 10, maneuverability: 2, firepower: 0, toughness: 5, range: 9, altitude: 10, stealth: 4 },
    trivia: "Flew so fast it outran missiles. Its strategy was simply: go faster.",
    tags: ["Mach 3+", "titanium", "reconnaissance"]
  },
  {
    id: "a10",
    name: "A-10 Thunderbolt II",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "attacker",
    year: 1977,
    stats: { speed: 3, maneuverability: 5, firepower: 10, toughness: 10, range: 7, altitude: 4, stealth: 0 },
    trivia: "It was built around its own gun — the GAU-8 cannon literally IS the A-10.",
    tags: ["tankbuster", "titanium bathtub", "brrrt"]
  },
  {
    id: "f16",
    name: "F-16 Fighting Falcon",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "fighter",
    year: 1978,
    stats: { speed: 8, maneuverability: 10, firepower: 8, toughness: 6, range: 7, altitude: 8, stealth: 1 },
    trivia: "Designed to be deliberately unstable for maximum agility — the pilot feels everything.",
    tags: ["fly-by-wire", "lightweight", "multirole"]
  },
  {
    id: "b2",
    name: "B-2 Spirit",
    origin: "🇺🇸 USA",
    era: "modern",
    role: "bomber",
    year: 1997,
    stats: { speed: 5, maneuverability: 3, firepower: 10, toughness: 5, range: 10, altitude: 7, stealth: 10 },
    trivia: "Each B-2 costs more than its weight in gold. Literally.",
    tags: ["flying wing", "nuclear capable", "stealth bomber"]
  },
  {
    id: "f117",
    name: "F-117 Nighthawk",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "attacker",
    year: 1983,
    stats: { speed: 4, maneuverability: 3, firepower: 6, toughness: 3, range: 6, altitude: 6, stealth: 9 },
    trivia: "Called a 'fighter' (F-) for classification reasons. It never actually dogfights.",
    tags: ["faceted design", "subsonic", "precision strike"]
  },
  {
    id: "f14",
    name: "F-14 Tomcat",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "fighter",
    year: 1974,
    stats: { speed: 9, maneuverability: 7, firepower: 9, toughness: 7, range: 8, altitude: 8, stealth: 1 },
    trivia: "Its variable-sweep wings automatically adjust mid-flight for optimal performance.",
    tags: ["swing-wing", "carrier-based", "Top Gun icon"]
  },
  {
    id: "f35",
    name: "F-35 Lightning II",
    origin: "🇺🇸 USA",
    era: "modern",
    role: "fighter",
    year: 2015,
    stats: { speed: 7, maneuverability: 6, firepower: 8, toughness: 7, range: 8, altitude: 8, stealth: 9 },
    trivia: "Three variants, one design: conventional, carrier, and vertical takeoff. Jack of all trades.",
    tags: ["STOVL", "5th gen", "sensor fusion"]
  },
  {
    id: "b52",
    name: "B-52 Stratofortress",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "bomber",
    year: 1955,
    stats: { speed: 4, maneuverability: 1, firepower: 10, toughness: 7, range: 10, altitude: 7, stealth: 0 },
    trivia: "Has been in service since 1955 and is expected to fly until 2050+. Grandma keeps going.",
    tags: ["8 engines", "nuclear", "BUFF"]
  },
  {
    id: "spitfire",
    name: "Supermarine Spitfire",
    origin: "🇬🇧 UK",
    era: "wwii",
    role: "fighter",
    year: 1938,
    stats: { speed: 7, maneuverability: 9, firepower: 6, toughness: 5, range: 5, altitude: 8, stealth: 0 },
    trivia: "Its elliptical wings were a nightmare to manufacture but gave it unmatched turning grace.",
    tags: ["Battle of Britain", "elliptical wing", "Merlin engine"]
  },
  {
    id: "zero",
    name: "Mitsubishi A6M Zero",
    origin: "🇯🇵 Japan",
    era: "wwii",
    role: "fighter",
    year: 1940,
    stats: { speed: 6, maneuverability: 10, firepower: 6, toughness: 2, range: 9, altitude: 6, stealth: 0 },
    trivia: "Incredible range and agility — but it had no armor or self-sealing fuel tanks. Pure glass cannon.",
    tags: ["carrier-based", "glass cannon", "Pacific War"]
  },
  {
    id: "p51",
    name: "P-51 Mustang",
    origin: "🇺🇸 USA",
    era: "wwii",
    role: "fighter",
    year: 1942,
    stats: { speed: 7, maneuverability: 7, firepower: 7, toughness: 6, range: 9, altitude: 7, stealth: 0 },
    trivia: "Could escort bombers all the way to Berlin and back. It changed the air war overnight.",
    tags: ["long-range escort", "drop tanks", "D-Day hero"]
  },
  {
    id: "bf109",
    name: "Bf 109",
    origin: "🇩🇪 Germany",
    era: "wwii",
    role: "fighter",
    year: 1937,
    stats: { speed: 7, maneuverability: 8, firepower: 7, toughness: 5, range: 4, altitude: 8, stealth: 0 },
    trivia: "The most produced fighter of WWII. The pilot sat incredibly cramped — no room for error.",
    tags: ["Luftwaffe", "high-altitude", "narrow undercarriage"]
  },
  {
    id: "lancaster",
    name: "Avro Lancaster",
    origin: "🇬🇧 UK",
    era: "wwii",
    role: "bomber",
    year: 1942,
    stats: { speed: 4, maneuverability: 2, firepower: 7, toughness: 6, range: 8, altitude: 6, stealth: 0 },
    trivia: "Its massive bomb bay carried the 'Bouncing Bomb' used in the legendary Dambusters raid.",
    tags: ["night bomber", "4-engine", "Dambusters"]
  },
  {
    id: "concorde",
    name: "Concorde",
    origin: "🇫🇷🇬🇧 FR/UK",
    era: "cold_war",
    role: "civil",
    year: 1969,
    stats: { speed: 10, maneuverability: 3, firepower: 0, toughness: 5, range: 7, altitude: 9, stealth: 0 },
    trivia: "Crossed the Atlantic in 3.5 hours. Passengers arrived before they left in local time.",
    tags: ["Mach 2", "supersonic airliner", "droop nose"]
  },
  {
    id: "su27",
    name: "Sukhoi Su-27",
    origin: "🇷🇺 Russia",
    era: "cold_war",
    role: "fighter",
    year: 1985,
    stats: { speed: 9, maneuverability: 10, firepower: 9, toughness: 7, range: 9, altitude: 9, stealth: 1 },
    trivia: "Invented the 'Pugachev's Cobra' — a show-stopping maneuver that defies physics.",
    tags: ["Cobra maneuver", "supermaneuverable", "Flanker"]
  },
  {
    id: "mig21",
    name: "MiG-21 Fishbed",
    origin: "🇷🇺 Russia",
    era: "cold_war",
    role: "fighter",
    year: 1959,
    stats: { speed: 8, maneuverability: 7, firepower: 5, toughness: 5, range: 4, altitude: 8, stealth: 0 },
    trivia: "The most widely produced supersonic jet ever. Still flying combat missions today.",
    tags: ["tailed delta", "Cold War", "export champion"]
  },
  {
    id: "eurofighter",
    name: "Eurofighter Typhoon",
    origin: "🇪🇺 Europe",
    era: "modern",
    role: "fighter",
    year: 2003,
    stats: { speed: 9, maneuverability: 9, firepower: 8, toughness: 7, range: 7, altitude: 9, stealth: 2 },
    trivia: "A 4-nation project. British, German, Italian, and Spanish engineers somehow agreed on everything.",
    tags: ["canard delta", "swing-role", "DASS"]
  },
  {
    id: "rafale",
    name: "Dassault Rafale",
    origin: "🇫🇷 France",
    era: "modern",
    role: "fighter",
    year: 2001,
    stats: { speed: 9, maneuverability: 9, firepower: 8, toughness: 7, range: 8, altitude: 8, stealth: 3 },
    trivia: "France refused to share it with NATO and went solo. Très français.",
    tags: ["omnirole", "canard", "SPECTRA suite"]
  },
  {
    id: "harrier",
    name: "AV-8B Harrier II",
    origin: "🇬🇧🇺🇸 UK/USA",
    era: "cold_war",
    role: "attacker",
    year: 1983,
    stats: { speed: 5, maneuverability: 7, firepower: 7, toughness: 6, range: 6, altitude: 5, stealth: 0 },
    trivia: "Lands vertically on ships — no catapult, no arrestor wire. Just vibes and thrust vectoring.",
    tags: ["VTOL", "jump jet", "vectored thrust"]
  },
  {
    id: "u2",
    name: "Lockheed U-2",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "recon",
    year: 1956,
    stats: { speed: 5, maneuverability: 1, firepower: 0, toughness: 2, range: 9, altitude: 10, stealth: 3 },
    trivia: "Flies so high the pilot needs a pressure suit. At altitude, the sky above turns black.",
    tags: ["high-altitude", "glider proportions", "Cold War spy"]
  },
  {
    id: "c130",
    name: "C-130 Hercules",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "transport",
    year: 1956,
    stats: { speed: 4, maneuverability: 4, firepower: 2, toughness: 8, range: 8, altitude: 5, stealth: 0 },
    trivia: "Has landed on an aircraft carrier. Not designed to. Just did it anyway.",
    tags: ["STOL", "4-prop", "workhorse"]
  },
  {
    id: "b17",
    name: "B-17 Flying Fortress",
    origin: "🇺🇸 USA",
    era: "wwii",
    role: "bomber",
    year: 1938,
    stats: { speed: 4, maneuverability: 2, firepower: 8, toughness: 8, range: 7, altitude: 7, stealth: 0 },
    trivia: "Named for its 13 defensive machine guns. Some returned home with half their fuselage gone.",
    tags: ["daylight bombing", "waist gunners", "Schweinfurt"]
  },
  {
    id: "tu160",
    name: "Tu-160 Blackjack",
    origin: "🇷🇺 Russia",
    era: "modern",
    role: "bomber",
    year: 1987,
    stats: { speed: 9, maneuverability: 3, firepower: 10, toughness: 7, range: 10, altitude: 7, stealth: 0 },
    trivia: "The largest combat aircraft ever built. Pilots call it 'White Swan' for its elegant lines.",
    tags: ["swing-wing", "supersonic bomber", "White Swan"]
  },
  {
    id: "fokkerdr1",
    name: "Fokker Dr.I",
    origin: "🇩🇪 Germany",
    era: "wwi",
    role: "fighter",
    year: 1917,
    stats: { speed: 3, maneuverability: 9, firepower: 4, toughness: 3, range: 3, altitude: 5, stealth: 0 },
    trivia: "The Red Baron's mount. Three wings for maximum lift — basically a flying brick that somehow dances.",
    tags: ["triplane", "Red Baron", "WWI"]
  },
  {
    id: "f18",
    name: "F/A-18 Hornet",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "fighter",
    year: 1983,
    stats: { speed: 8, maneuverability: 8, firepower: 8, toughness: 7, range: 7, altitude: 8, stealth: 1 },
    trivia: "The 'F/A' in its name means it switches between fighter and attack roles in the same mission.",
    tags: ["carrier-based", "multirole", "Blue Angels"]
  },
  {
    id: "b747",
    name: "Boeing 747",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "civil",
    year: 1969,
    stats: { speed: 5, maneuverability: 1, firepower: 0, toughness: 7, range: 9, altitude: 6, stealth: 0 },
    trivia: "The hump was added after airlines asked for a freighter version — the cockpit had to go somewhere.",
    tags: ["jumbo jet", "double-deck", "Queen of the Skies"]
  },
  {
    id: "f4phantom",
    name: "F-4 Phantom II",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "fighter",
    year: 1961,
    stats: { speed: 9, maneuverability: 5, firepower: 8, toughness: 7, range: 8, altitude: 8, stealth: 0 },
    trivia: "Originally had no gun — missiles would handle everything. Vietnam proved otherwise.",
    tags: ["double engine", "Vietnam", "drooping stabilizer"]
  },
  {
    id: "t38talon",
    name: "T-38 Talon",
    origin: "🇺🇸 USA",
    era: "cold_war",
    role: "trainer",
    year: 1961,
    stats: { speed: 7, maneuverability: 8, firepower: 0, toughness: 5, range: 4, altitude: 7, stealth: 0 },
    trivia: "The plane that trained virtually every US astronaut. Still flying after 60+ years.",
    tags: ["supersonic trainer", "NASA", "white rocket"]
  }
];

export default AIRCRAFT;
