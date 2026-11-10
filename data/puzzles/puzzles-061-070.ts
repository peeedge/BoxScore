import { puzzle, wiki } from "./builders";

export const PUZZLES_061_070 = [
  puzzle(61, {
    scout: {
      clue: "Nicknamed 'The Cannibal' for his appetite for victories, this Belgian cyclist won the Tour de France five times and the Giro d'Italia five times.",
      answer: "Eddy Merckx",
      wrong: ["Bernard Hinault", "Jacques Anquetil", "Fausto Coppi"],
      explanation: "Eddy Merckx won 11 Grand Tours in all and was world road race champion three times.",
      sources: [wiki("Eddy_Merckx")],
    },
    teammates: {
      athletes: ["Mark McGwire", "José Canseco"],
      answer: "Oakland Athletics",
      wrong: ["St. Louis Cardinals", "Texas Rangers", "Toronto Blue Jays"],
      explanation: "McGwire and Canseco, the 'Bash Brothers', won the 1989 World Series with the Oakland Athletics. McGwire later played for St. Louis; Canseco moved on to Texas and Toronto.",
      sources: [wiki("Oakland_Athletics")],
    },
    replay: {
      clue: "Far ahead near the end of the snowboard cross final at the 2006 Turin Olympics, an American showboats with a grab on the second-to-last jump, falls, and settles for silver.",
      answer: "Lindsey Jacobellis",
      wrong: ["Kelly Clark", "Hannah Teter", "Gretchen Bleiler"],
      explanation: "Lindsey Jacobellis lost gold to Switzerland's Tanja Frieden, and finally won Olympic gold in 2022.",
      sources: [wiki("Lindsey_Jacobellis")],
    },
    timeline: {
      events: [
        ["The NHL cancels an entire season over a lockout", 2005],
        ["The Vegas Golden Knights win the Stanley Cup", 2023],
        ["Bobby Orr's flying goal wins the Stanley Cup", 1970],
        ["Wayne Gretzky is traded to Los Angeles", 1988],
      ],
      sources: [wiki("1970_Stanley_Cup_Final"), wiki("The_Trade_(ice_hockey)"), wiki("2004–05_NHL_lockout"), wiki("2023_Stanley_Cup_Final")],
    },
    overtime: {
      prompt: "Which team won the first College Football Playoff national championship, in January 2015?",
      answer: "Ohio State",
      wrong: ["Oregon", "Alabama", "Florida State"],
      explanation: "Ohio State beat Oregon 42–20 behind third-string quarterback Cardale Jones.",
      sources: [wiki("2015_College_Football_Playoff_National_Championship")],
    },
  }),
];
