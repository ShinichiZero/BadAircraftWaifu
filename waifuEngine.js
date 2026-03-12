// AircraftWaifu — Waifu Generation Engine
// Maps aircraft stats and metadata to anime character archetypes

const ARCHETYPES = {
  tsundere_ace: {
    name: "Tsundere Ace",
    japanese: "ツンデレエース",
    emoji: "⚔️",
    color: "#FF4D6D",
    secondaryColor: "#FF8FA3",
    bgGradient: "linear-gradient(135deg, #1a0010 0%, #3d0020 50%, #1a0010 100%)",
    accentPattern: "❤️‍🔥",
    description: "Aggressive, sharp-tongued, fiercely competitive. Acts like she doesn't care about your opinion, then immediately proves she's the best in the sky. Secretly cares deeply.",
    personality: ["Fiercely independent", "Brutally competitive", "Hides vulnerability under aggression", "Obsessed with being #1"],
    catchphrase: "D-don't think I'm doing this for you! I just hate losing, that's all!",
    likes: ["Winning dogfights", "Perfect gun solutions", "Being underestimated"],
    dislikes: ["Teamwork (but needs it)", "Being called 'cute'", "Slow flying"],
    specialMove: "Triple-Axis Fury Roll",
    voice: "Sharp and dismissive, but with cracks of sincerity",
    themeMusic: "Fast-paced orchestral with sudden tender interludes"
  },

  kuudere_phantom: {
    name: "Kuudere Phantom",
    japanese: "クーデレファントム",
    emoji: "🌑",
    color: "#7B2FBE",
    secondaryColor: "#C77DFF",
    bgGradient: "linear-gradient(135deg, #050014 0%, #1a0040 50%, #050014 100%)",
    accentPattern: "👁️",
    description: "Emotionless on the surface. Moves through the world like a shadow — you don't see her until she's already behind you. Speaks only when necessary. Deeply philosophical.",
    personality: ["Expressionless", "Precise and methodical", "Speaks in riddles", "Secretly deeply lonely"],
    catchphrase: "...I was always here. You simply weren't looking.",
    likes: ["Silence", "High altitude solitude", "Complex missions"],
    dislikes: ["Radar locks", "Loud noises", "Being tracked"],
    specialMove: "Zero Signature Vanishing Act",
    voice: "Flat monotone with rare moments of almost-warmth",
    themeMusic: "Dark ambient with distant, haunting melodies"
  },

  genki_speedster: {
    name: "Genki Speedster",
    japanese: "元気スピードスター",
    emoji: "⚡",
    color: "#FFD60A",
    secondaryColor: "#FFF176",
    bgGradient: "linear-gradient(135deg, #1a1500 0%, #3d3000 50%, #1a1500 100%)",
    accentPattern: "✨",
    description: "Pure, unrestrained energy. She moves faster than the conversation can keep up. Optimistic to a fault, always the first to dive headfirst into anything. Infectious enthusiasm.",
    personality: ["Energetic and impulsive", "Optimist to the core", "Talks 300 knots", "Forgets to land sometimes"],
    catchphrase: "LET'S GOOOOO!! I'll lap you before you even read this!!",
    likes: ["Breaking records", "Racing anything", "Loud engines"],
    dislikes: ["Slow speeds", "Standing still", "Waiting"],
    specialMove: "Afterburner Infinity Dash",
    voice: "Fast, high-pitched, breathless with excitement",
    themeMusic: "J-pop at 180 BPM with electronic drops"
  },

  gentle_giant: {
    name: "Gentle Giant",
    japanese: "優しい大型機",
    emoji: "🌸",
    color: "#52B788",
    secondaryColor: "#95D5B2",
    bgGradient: "linear-gradient(135deg, #001a0d 0%, #00401f 50%, #001a0d 100%)",
    accentPattern: "🌿",
    description: "Massive, reliable, and warm. She could absolutely destroy you, but she'd rather bring you home safely. Her presence is calming. Everyone feels protected around her.",
    personality: ["Quietly protective", "Patient and steady", "Selfless caretaker", "Underestimated constantly"],
    catchphrase: "Come now, I have room for everyone. Let's all get home together.",
    likes: ["Long missions", "Looking after the team", "Clear skies"],
    dislikes: ["Tight turns", "Being rushed", "Seeing others in danger"],
    specialMove: "Unbreakable Formation Hold",
    voice: "Deep, warm, unhurried — like a big sister's hug",
    themeMusic: "Gentle orchestral swells, sweeping and emotional"
  },

  ojou_ultrasonic: {
    name: "Supersonic Ojou-sama",
    japanese: "超音速お嬢様",
    emoji: "👑",
    color: "#E0AAFF",
    secondaryColor: "#FFD6FF",
    bgGradient: "linear-gradient(135deg, #0d0020 0%, #2d0060 50%, #0d0020 100%)",
    accentPattern: "💎",
    description: "Aristocratic, refined, and absolutely fabulous. She doesn't just break the sound barrier — she breaks it while serving champagne. Holds herself to an impossible standard of elegance.",
    personality: ["Perfectionist", "Effortlessly superior", "Secretly very anxious", "Obsessed with grace"],
    catchphrase: "Hohoho~ You call that Mach 1? I do that before breakfast, darling.",
    likes: ["Flying above the clouds", "Perfect conditions", "Being admired"],
    dislikes: ["Turbulence (ruins the look)", "Anything subsonic", "Common aircraft"],
    specialMove: "Mach-2 Grand Entrance",
    voice: "Silky, slightly condescending, with a musical laugh",
    themeMusic: "Sophisticated jazz meets cinematic orchestra"
  },

  yandere_experimental: {
    name: "Yandere Prototype",
    japanese: "ヤンデレ試作機",
    emoji: "🧪",
    color: "#FF6B35",
    secondaryColor: "#FF9F1C",
    bgGradient: "linear-gradient(135deg, #1a0800 0%, #401500 50%, #1a0800 100%)",
    accentPattern: "⚠️",
    description: "Unstable, brilliant, dangerous — and absolutely devoted to whoever takes her controls. Engineering pushed to the absolute edge. She will do anything to keep her pilot.",
    personality: ["Obsessively loyal", "Unpredictably brilliant", "Emotional extremes", "Capable of anything"],
    catchphrase: "I'd rather crash than let anyone else fly me. I mean that... literally.",
    likes: ["Her pilot, only her pilot", "Experimental maneuvers", "Proving the impossible"],
    dislikes: ["Being studied by others", "Safe choices", "Mothballing"],
    specialMove: "Classified Test Protocol Omega",
    voice: "Sweet and gentle — then terrifyingly intense with no transition",
    themeMusic: "Unsettling music box melody over industrial noise"
  },

  onee_san_guardian: {
    name: "Battle-Hardened Onee-san",
    japanese: "歴戦のお姉さん",
    emoji: "🛡️",
    color: "#4CC9F0",
    secondaryColor: "#4361EE",
    bgGradient: "linear-gradient(135deg, #000d1a 0%, #002040 50%, #000d1a 100%)",
    accentPattern: "⭐",
    description: "She's seen things. She's done things. And she will protect you with everything she has. Calm, dependable, with deep battle scars she never talks about. Respect is non-negotiable.",
    personality: ["Calm under pressure", "Protects everyone", "Quietly grieving past wars", "Absolute authority"],
    catchphrase: "Stay in formation. I'll handle the rest. I've always handled it.",
    likes: ["Clear orders", "Her squadron", "Watching the young ones grow"],
    dislikes: ["Unnecessary casualties", "Recklessness", "Being called 'old'"],
    specialMove: "Iron Wing Barrier",
    voice: "Low, measured, commanding — softens when off-duty",
    themeMusic: "Military march that breaks into a sorrowful lullaby"
  },

  victorian_noble: {
    name: "Sky Aristocrat",
    japanese: "空の貴族",
    emoji: "🎩",
    color: "#B5838D",
    secondaryColor: "#E5989B",
    bgGradient: "linear-gradient(135deg, #1a0d10 0%, #402030 50%, #1a0d10 100%)",
    accentPattern: "🌹",
    description: "Prim, proper, and operating an aircraft from another century. She carries herself with old-world dignity and fights with the elegance of a poet. The air was nobler back then.",
    personality: ["Formal and courteous", "Old-fashioned honor", "Surprisingly fierce", "Hopelessly sentimental"],
    catchphrase: "One shan't engage without a proper introduction. Then — one shan't hold back.",
    likes: ["Fair fights", "Proper procedure", "Aerial manners"],
    dislikes: ["Missiles (vulgar)", "Electronic warfare", "Speed for speed's sake"],
    specialMove: "The Honourable Turning Duel",
    voice: "Crisp British accent, formal even under fire",
    themeMusic: "Harpsichord and strings, quickening tempo mid-battle"
  },

  kunoichi_shinobi: {
    name: "Sky Kunoichi",
    japanese: "空のくのいち",
    emoji: "🌙",
    color: "#22577A",
    secondaryColor: "#38A3A5",
    bgGradient: "linear-gradient(135deg, #000d12 0%, #001a24 50%, #000d12 100%)",
    accentPattern: "🌘",
    description: "Silent. Patient. You never know she was there until she's gone — and so is your radar return. Operates alone, speaks even less. A shadow with wings.",
    personality: ["Prefers invisibility", "Deeply focused", "Speaks only in facts", "Loyal to mission"],
    catchphrase: "The mission was already complete. You simply haven't realized it yet.",
    likes: ["Nighttime ops", "Terrain masking", "Radio silence"],
    dislikes: ["Being spotted", "Formation flying", "Conversation"],
    specialMove: "Phantom Approach — Zero Detection",
    voice: "Barely a whisper. Precise. Final.",
    themeMusic: "Traditional shamisen over synthetic bass"
  },

  reliable_senpai: {
    name: "Dependable Senpai",
    japanese: "頼れる先輩",
    emoji: "📋",
    color: "#90BE6D",
    secondaryColor: "#43AA8B",
    bgGradient: "linear-gradient(135deg, #0a1200 0%, #1c2e00 50%, #0a1200 100%)",
    accentPattern: "📦",
    description: "She'll get it there. She always gets it there. Not glamorous, not famous — but absolutely indispensable. She's the reason everyone else can do their jobs.",
    personality: ["Practical and no-nonsense", "Quietly proud", "Stubborn about finishing", "Underappreciated and knows it"],
    catchphrase: "Don't give me glory. Give me a runway, a cargo list, and some coffee.",
    likes: ["Successful deliveries", "STOL challenges", "Her mechanics"],
    dislikes: ["Empty praise", "Being grounded", "Overloading (still does it anyway)"],
    specialMove: "Impossible Short Field Landing",
    voice: "Dry, practical, with a warm laugh when comfortable",
    themeMusic: "Country-folk meets marching band"
  }
};

// ─── Archetype Selection Engine ───────────────────────────────────────────────

function selectArchetype(aircraft) {
  const s = aircraft.stats;
  const role = aircraft.role;
  const era = aircraft.era;

  // Score each archetype based on aircraft characteristics
  const scores = {};
  for (const key of Object.keys(ARCHETYPES)) scores[key] = 0;

  // --- STEALTH → Kunoichi / Kuudere ---
  if (s.stealth >= 8) {
    scores.kunoichi_shinobi += 30;
    scores.kuudere_phantom += 20;
  } else if (s.stealth >= 5) {
    scores.kuudere_phantom += 15;
    scores.kunoichi_shinobi += 10;
  }

  // --- SPEED dominant ---
  if (s.speed >= 9 && s.maneuverability >= 8) {
    scores.tsundere_ace += 25;
    scores.genki_speedster += 20;
  } else if (s.speed >= 9 && s.maneuverability <= 4) {
    scores.genki_speedster += 30;
    scores.ojou_ultrasonic += 15;
  } else if (s.speed >= 7 && s.maneuverability >= 8) {
    scores.tsundere_ace += 20;
  }

  // --- CIVIL + high speed → Ojou ---
  if (role === "civil" && s.speed >= 8) {
    scores.ojou_ultrasonic += 35;
  }

  // --- RECON → Kuudere / Kunoichi ---
  if (role === "recon") {
    scores.kuudere_phantom += 20;
    scores.kunoichi_shinobi += 25;
  }

  // --- ATTACKER + toughness → Onee-san ---
  if (role === "attacker" && s.toughness >= 8) {
    scores.onee_san_guardian += 30;
  } else if (role === "attacker" && s.firepower >= 9) {
    scores.tsundere_ace += 15;
    scores.onee_san_guardian += 10;
  }

  // --- BOMBER large/heavy ---
  if (role === "bomber") {
    if (s.toughness >= 7 && s.range >= 8) {
      scores.gentle_giant += 20;
      scores.onee_san_guardian += 20;
    }
    if (s.speed >= 8) {
      scores.ojou_ultrasonic += 10;
    }
    if (s.stealth >= 8) {
      scores.kunoichi_shinobi += 25;
    }
  }

  // --- TRANSPORT → Reliable Senpai / Gentle Giant ---
  if (role === "transport") {
    scores.reliable_senpai += 35;
    scores.gentle_giant += 15;
  }

  // --- TRAINER → Genki / Reliable Senpai ---
  if (role === "trainer") {
    scores.genki_speedster += 20;
    scores.reliable_senpai += 20;
  }

  // --- Low toughness, high maneuverability → Yandere / Tsundere ---
  if (s.toughness <= 3 && s.maneuverability >= 8) {
    scores.yandere_experimental += 20;
  }

  // --- CIVIL non-fighter → Reliable / Gentle ---
  if (role === "civil" && s.speed < 8) {
    scores.reliable_senpai += 25;
    scores.gentle_giant += 20;
  }

  // --- ERA modifiers ---
  if (era === "wwi") {
    scores.victorian_noble += 30;
    scores.reliable_senpai -= 5;
  }
  if (era === "wwii") {
    scores.onee_san_guardian += 10;
    scores.tsundere_ace += 5;
    scores.victorian_noble += 5;
  }
  if (era === "modern" && s.stealth >= 8) {
    scores.kunoichi_shinobi += 10;
  }

  // --- FIREPOWER extreme ---
  if (s.firepower === 10 && s.toughness >= 8) {
    scores.onee_san_guardian += 15;
  }
  if (s.firepower === 10 && s.stealth >= 8) {
    scores.kunoichi_shinobi += 10;
  }

  // --- ALTITUDE extreme ---
  if (s.altitude === 10 && s.firepower === 0) {
    scores.kuudere_phantom += 20;
  }
  if (s.altitude === 10 && s.speed === 10) {
    scores.genki_speedster += 10;
    scores.ojou_ultrasonic += 5;
  }

  // --- RANGE + no firepower + no maneuverability → Gentle Giant ---
  if (s.range >= 9 && s.maneuverability <= 3 && s.firepower <= 2) {
    scores.gentle_giant += 25;
    scores.reliable_senpai += 15;
  }

  // Pick winner
  const winner = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a));
  return ARCHETYPES[winner[0]];
}

// ─── Stat Interpretations ─────────────────────────────────────────────────────

function interpretStats(aircraft) {
  const s = aircraft.stats;
  const interpretations = [];

  if (s.speed >= 9) interpretations.push({ label: "Velocity Soul", detail: "Her spirit moves at Mach speed — she processes the world faster than most can blink." });
  else if (s.speed >= 6) interpretations.push({ label: "Quick-Witted", detail: "She's always three moves ahead. You're still reacting when she's already done." });
  else interpretations.push({ label: "Measured Pace", detail: "She doesn't rush. Every step is deliberate, purposeful, and exactly right." });

  if (s.maneuverability >= 9) interpretations.push({ label: "Impossibly Graceful", detail: "She moves through life like water — unpredictable, fluid, impossible to hold." });
  else if (s.maneuverability >= 6) interpretations.push({ label: "Adaptable", detail: "Changes directions emotionally and physically without missing a beat." });
  else interpretations.push({ label: "Stays the Course", detail: "Once committed, she does not deviate. Stubbornness as a personality." });

  if (s.firepower >= 9) interpretations.push({ label: "Devastating Impact", detail: "When she finally speaks her mind, there's nothing left standing." });
  else if (s.firepower === 0) interpretations.push({ label: "Pacifist Heart", detail: "She carries no weapons. Her power comes from presence, not destruction." });
  else interpretations.push({ label: "Measured Force", detail: "She picks her battles and ends them efficiently." });

  if (s.toughness >= 9) interpretations.push({ label: "Unbreakable", detail: "She has taken hits that would ground anyone else. She keeps going." });
  else if (s.toughness <= 3) interpretations.push({ label: "Fragile Brilliance", detail: "She needs protection — but her gifts make it worth every effort." });

  if (s.stealth >= 8) interpretations.push({ label: "Invisible to the World", detail: "She exists on the periphery of everyone's awareness. Only the worthy see her." });

  if (s.altitude >= 9) interpretations.push({ label: "Reaches for the Stars", detail: "She's never satisfied with the view from the ground. She needs to be above it all." });

  if (s.range >= 9) interpretations.push({ label: "Endlessly Patient", detail: "She can outlast anyone. She'll still be there after you've given up." });

  return interpretations;
}

// ─── Quote Generator ──────────────────────────────────────────────────────────

const ERA_FLAVOR = {
  wwi:       "She's old enough to remember when the sky was new to humanity.",
  wwii:      "She was forged in the crucible of history's greatest conflict.",
  cold_war:  "She grew up in the shadow of ideological war, always ready.",
  modern:    "She is the cutting edge of what humanity can build.",
};

const ROLE_FLAVOR = {
  fighter:   "Born to compete. The sky is her arena.",
  bomber:    "She carries a terrible weight — and delivers it with precision.",
  attacker:  "Close support. She never abandons those below.",
  recon:     "She knows everything. She tells you nothing.",
  transport: "Her purpose is others. She asks nothing in return.",
  civil:     "She chose to serve peace. That is its own courage.",
  trainer:   "She shaped every great pilot that came after her.",
};

// ─── Main Generator ───────────────────────────────────────────────────────────

function generateWaifu(aircraft) {
  const archetype = selectArchetype(aircraft);
  const statInterpretations = interpretStats(aircraft);

  const statTotal = Object.values(aircraft.stats).reduce((a, b) => a + b, 0);
  const maxPossible = Object.keys(aircraft.stats).length * 10;
  const powerLevel = Math.round((statTotal / maxPossible) * 100);

  // Determine dominant stat
  const statEntries = Object.entries(aircraft.stats);
  const dominant = statEntries.reduce((a, b) => (b[1] > a[1] ? b : a));
  const dominantNames = {
    speed: "Velocity",
    maneuverability: "Agility",
    firepower: "Firepower",
    toughness: "Endurance",
    range: "Perseverance",
    altitude: "Ambition",
    stealth: "Mystery"
  };

  const originEmoji = aircraft.origin.split(" ")[0];
  const eraLabel = { wwi: "WWI", wwii: "WWII", cold_war: "Cold War", modern: "Modern Era" }[aircraft.era] || aircraft.era;

  return {
    aircraft,
    archetype,
    statInterpretations,
    powerLevel,
    dominantTrait: dominantNames[dominant[0]] || dominant[0],
    eraFlavor: ERA_FLAVOR[aircraft.era] || "",
    roleFlavor: ROLE_FLAVOR[aircraft.role] || "",
    waifuName: `${aircraft.name.replace(/[^a-zA-Z0-9 ]/g, "").trim()}-chan`,
    eraLabel,
    originEmoji
  };
}

export { generateWaifu, ARCHETYPES };
