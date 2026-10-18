export const ROUND_MODES = ["scout", "teammates", "replay", "timeline", "overtime"] as const;
export type RoundMode = (typeof ROUND_MODES)[number];
export const ROUND_COUNT = ROUND_MODES.length;

/** Bonus round played after the main five: rapid-fire questions that all share the same four answers. */
export const LIGHTNING_QUESTION_COUNT = 10;
export const LIGHTNING_SECONDS = 15;
export const LIGHTNING_OPTION_COUNT = 4;

export type ModeInfo = {
  name: string;
  short: string;
  tagline: string;
  defaultPrompt: string;
};

export const MODE_INFO: Record<RoundMode, ModeInfo> = {
  scout: {
    name: "Scouting Report",
    short: "Scout",
    tagline: "Name the Eagle from a career description.",
    defaultPrompt: "Which Eagle does this scouting report describe?",
  },
  teammates: {
    name: "Locker Room",
    short: "Locker",
    tagline: "Two Eagles and what they share: a head coach, a college or another NFL team.",
    defaultPrompt: "What do these two Eagles have in common?",
  },
  replay: {
    name: "Instant Replay",
    short: "Replay",
    tagline: "Trace a famous Eagles play, quote or moment to the person behind it.",
    defaultPrompt: "Who is at the center of this famous moment?",
  },
  timeline: {
    name: "Timeline",
    short: "Timeline",
    tagline: "Put four moments from Eagles history in chronological order.",
    defaultPrompt: "Put these moments in chronological order, earliest first.",
  },
  overtime: {
    name: "Overtime",
    short: "Overtime",
    tagline: "One tougher question about Eagles records and championships.",
    defaultPrompt: "",
  },
};
