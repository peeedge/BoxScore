import { lightning, wiki } from "./builders";

export const LIGHTNING_061_070 = [
  lightning(61, {
    title: "Which Gonzalez?",
    options: ["Tony Gonzalez", "Juan González", "Luis Gonzalez", "Adrián González"],
    questions: [
      ["Who retired in 2013 with the most catches ever by an NFL tight end?", "Tony Gonzalez", "Tony Gonzalez finished with 1,325 receptions."],
      ["Who won the American League MVP award in 1996 and 1998 with Texas?", "Juan González", "Juan González drove in more than 140 runs in both MVP seasons."],
      ["Who hit 57 home runs for Arizona in 2001?", "Luis Gonzalez", "Luis Gonzalez had never hit more than 31 in a season before that year."],
      ["Who was the first overall pick in the 2000 MLB draft?", "Adrián González", "Adrián González was taken by the Florida Marlins out of a San Diego-area high school."],
      ["Who played both basketball and football at Cal?", "Tony Gonzalez", "Tony Gonzalez's footwork as a tight end was often credited to his basketball background."],
      ["Who was nicknamed 'Igor'?", "Juan González", "Juan González picked up the nickname as a boy in Puerto Rico."],
      ["Who went from Boston to the Dodgers in a nine-player trade in 2012?", "Adrián González", "Adrián González headlined the deal that also sent Josh Beckett and Carl Crawford to Los Angeles."],
      ["Whose No. 20 was the first number retired by the Arizona Diamondbacks?", "Luis Gonzalez", "Luis Gonzalez's number was retired in 2010."],
      ["Who drove in 157 runs for Texas in 1998?", "Juan González", "Juan González led the American League in RBIs that season."],
      ["Who played for Mexico in the World Baseball Classic despite being born in San Diego?", "Adrián González", "Adrián González's family is from Mexico, and he grew up on both sides of the border."],
    ],
    sources: [wiki("Tony_Gonzalez"), wiki("Juan_González_(baseball)"), wiki("Luis_Gonzalez_(outfielder)"), wiki("Adrián_González")],
  }),
];
