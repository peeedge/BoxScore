import { puzzle, wiki } from "./builders";

export const PUZZLES_021_030 = [
  puzzle(21, {
    scout: {
      clue: "An Ohio State safety who had won a Super Bowl in New Orleans, he signed with the Eagles in 2014, ran the defense for the Super Bowl LII champions, and raised his fist during the national anthem to protest racial injustice.",
      answer: "Malcolm Jenkins",
      wrong: ["Rodney McLeod", "Nate Allen", "Kurt Coleman"],
      explanation: "Malcolm Jenkins knocked Brandin Cooks out of Super Bowl LII with a hit and co-founded the Players Coalition.",
      sources: [wiki("Malcolm_Jenkins")],
    },
    teammates: {
      athletes: ["Asante Samuel", "LeGarrette Blount"],
      shared: "team",
      answer: "New England Patriots",
      wrong: ["Atlanta Falcons", "Pittsburgh Steelers", "Detroit Lions"],
      explanation: "Samuel won two Super Bowls with the New England Patriots before signing with the Eagles in 2008. Blount won two there before joining the Eagles in 2017, and beat his old team in Super Bowl LII.",
      sources: [wiki("Asante_Samuel"), wiki("LeGarrette_Blount")],
    },
    replay: {
      clue: "Seven weeks after surgery to repair a broken leg and torn ankle ligaments, a receiver ignores his doctor's advice to sit out Super Bowl XXXIX and catches nine passes for 122 yards.",
      answer: "Terrell Owens",
      wrong: ["Todd Pinkston", "Greg Lewis", "Freddie Mitchell"],
      explanation: "Terrell Owens was the Eagles' best player that night, but New England won 24–21.",
      sources: [wiki("Terrell_Owens"), wiki("Super_Bowl_XXXIX")],
    },
    timeline: {
      events: [
        ["The Eagles move into Veterans Stadium", 1971],
        ["Lincoln Financial Field opens", 2003],
        ["The Eagles move into Shibe Park", 1940],
        ["The Eagles move into Franklin Field", 1958],
      ],
      sources: [wiki("Shibe_Park"), wiki("Franklin_Field"), wiki("Veterans_Stadium"), wiki("Lincoln_Financial_Field")],
    },
    overtime: {
      prompt: "What was the final score of Super Bowl LII?",
      answer: "41–33",
      wrong: ["40–22", "38–35", "24–21"],
      explanation: "The Eagles beat New England 41–33, even though Tom Brady threw for a Super Bowl record 505 yards.",
      sources: [wiki("Super_Bowl_LII")],
    },
  }),

  puzzle(22, {
    scout: {
      clue: "An Ole Miss receiver acquired from Tennessee in a 2022 draft-night trade, he set the Eagles' single-season record with 1,496 receiving yards in his first year and caught a touchdown in Super Bowl LIX.",
      answer: "A.J. Brown",
      wrong: ["DeVonta Smith", "Quez Watkins", "Alshon Jeffery"],
      explanation: "The Eagles sent the 18th and 101st picks to Tennessee for A.J. Brown and signed him to a long-term extension the same night.",
      sources: [wiki("A._J._Brown")],
    },
    teammates: {
      athletes: ["Jalen Hurts", "Saquon Barkley"],
      shared: "coach",
      answer: "Nick Sirianni",
      wrong: ["Doug Pederson", "Chip Kelly", "Andy Reid"],
      explanation: "Hurts and Barkley won Super Bowl LIX for Nick Sirianni. Hurts had also played his rookie year under Doug Pederson, before Barkley arrived from the Giants.",
      sources: [wiki("Nick_Sirianni")],
    },
    replay: {
      clue: "Trailing the Giants 10–7 with just over a minute left in October 2003, a second-year running back fields a punt and races 84 yards for the winning touchdown.",
      answer: "Brian Westbrook",
      wrong: ["Duce Staley", "Correll Buckhalter", "Freddie Mitchell"],
      explanation: "Brian Westbrook's return rescued a 2–3 start in a season that ended in the NFC Championship Game.",
      sources: [wiki("Brian_Westbrook"), wiki("2003_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Buddy Ryan becomes head coach", 1986],
        ["Greasy Neale becomes head coach", 1941],
        ["Dick Vermeil becomes head coach", 1976],
        ["Buck Shaw becomes head coach", 1958],
      ],
      sources: [wiki("Greasy_Neale"), wiki("Buck_Shaw"), wiki("Dick_Vermeil"), wiki("Buddy_Ryan")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat in the December 2013 'Snow Bowl', when LeSean McCoy ran for 217 yards?",
      answer: "Detroit Lions",
      wrong: ["Chicago Bears", "Green Bay Packers", "Minnesota Vikings"],
      explanation: "About eight inches of snow fell on Lincoln Financial Field as the Eagles beat the Detroit Lions 34–20.",
      sources: [wiki("2013_Philadelphia_Eagles_season"), wiki("LeSean_McCoy")],
    },
  }),

  puzzle(23, {
    scout: {
      clue: "Taken by the Eagles in the 1987 supplemental draft out of Ohio State, this receiver was released by Buddy Ryan, who said all he did was catch touchdowns, and became a Hall of Famer in Minnesota.",
      answer: "Cris Carter",
      wrong: ["Fred Barnett", "Calvin Williams", "Mike Quick"],
      explanation: "Cris Carter got sober after his 1990 release and retired with 1,101 catches, second only to Jerry Rice at the time.",
      sources: [wiki("Cris_Carter")],
    },
    teammates: {
      athletes: ["Trey Burton", "Jevon Kearse"],
      shared: "college",
      answer: "Florida",
      wrong: ["Florida State", "Miami", "Georgia"],
      explanation: "Kearse, 'the Freak', was a pass rusher at Florida, and Burton played quarterback, tight end and fullback there before throwing the 'Philly Special'.",
      sources: [wiki("Jevon_Kearse"), wiki("Trey_Burton")],
    },
    replay: {
      clue: "Breaking his ankle on the Eagles' first series against Arizona in November 2002, the quarterback stays in the game and throws four touchdown passes in a 38–14 win.",
      answer: "Donovan McNabb",
      wrong: ["Koy Detmer", "A.J. Feeley", "Mike McMahon"],
      explanation: "Donovan McNabb then missed the rest of the regular season, and A.J. Feeley went 4–1 as the starter in his absence.",
      sources: [wiki("Donovan_McNabb"), wiki("2002_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Doug Pederson becomes head coach", 2016],
        ["Ray Rhodes becomes head coach", 1995],
        ["Chip Kelly becomes head coach", 2013],
        ["Rich Kotite becomes head coach", 1991],
      ],
      sources: [wiki("Rich_Kotite"), wiki("Ray_Rhodes"), wiki("Chip_Kelly"), wiki("Doug_Pederson")],
    },
    overtime: {
      prompt: "In Super Bowl LIX, the Eagles ended which team's bid to become the first to win three straight Super Bowls?",
      answer: "Kansas City Chiefs",
      wrong: ["San Francisco 49ers", "Buffalo Bills", "Baltimore Ravens"],
      explanation: "The Eagles beat the Kansas City Chiefs 40–22, avenging their loss to them in Super Bowl LVII two years earlier.",
      sources: [wiki("Super_Bowl_LIX")],
    },
  }),

  puzzle(24, {
    scout: {
      clue: "A middle linebacker from Arkansas State, he came from Cincinnati in a 1974 trade for a package of high draft picks and anchored Dick Vermeil's defense through Super Bowl XV.",
      answer: "Bill Bergey",
      wrong: ["Frank LeMaster", "John Bunting", "Jerry Robinson"],
      explanation: "Bill Bergey played for the Eagles through the 1980 season and was later inducted into the team's Hall of Fame.",
      sources: [wiki("Bill_Bergey")],
    },
    teammates: {
      athletes: ["Jeremy Maclin", "LeSean McCoy"],
      shared: "team",
      answer: "Kansas City Chiefs",
      wrong: ["Baltimore Ravens", "Buffalo Bills", "Tampa Bay Buccaneers"],
      explanation: "Both followed Andy Reid to the Kansas City Chiefs: Maclin in 2015 and McCoy in 2019. Maclin finished with Baltimore; McCoy also played for Buffalo and Tampa Bay.",
      sources: [wiki("Jeremy_Maclin"), wiki("LeSean_McCoy")],
    },
    replay: {
      clue: "At the end of a 2–12 season in December 1968, the Franklin Field crowd turns on a halftime-show stand-in who was pulled from the stands at the last minute.",
      prompt: "Who did the Franklin Field crowd pelt with snowballs?",
      answer: "Santa Claus",
      wrong: ["Joe Kuharich", "Norm Snead", "Bud Grant"],
      explanation: "Fan Frank Olivo, already wearing a Santa Claus suit, filled in when the hired Santa couldn't get there through the snow, and was showered with snowballs.",
      sources: [wiki("History_of_the_Philadelphia_Eagles")],
    },
    timeline: {
      events: [
        ["Herschel Walker signs with the Eagles", 1992],
        ["Keith Jackson's rookie season", 1988],
        ["Randall Cunningham is drafted", 1985],
        ["Jerome Brown is drafted ninth overall", 1987],
      ],
      sources: [wiki("Randall_Cunningham"), wiki("Jerome_Brown"), wiki("Keith_Jackson"), wiki("Herschel_Walker")],
    },
    overtime: {
      prompt: "Who bought the Eagles in 1994?",
      answer: "Jeffrey Lurie",
      wrong: ["Norman Braman", "Leonard Tose", "Jerry Wolman"],
      explanation: "Jeffrey Lurie, a Boston-born film producer, bought the team from Norman Braman and has owned it for both Super Bowl wins.",
      sources: [wiki("Jeffrey_Lurie")],
    },
  }),

  puzzle(25, {
    scout: {
      clue: "A Stephen F. Austin linebacker taken in the third round in 1998, he celebrated big hits with a chopping 'Axe Man' motion, left for Washington in 2002, and came back for two more stints in Philadelphia.",
      answer: "Jeremiah Trotter",
      wrong: ["Ike Reese", "Mark Simoneau", "Barry Gardner"],
      explanation: "Jeremiah Trotter made four Pro Bowls, and the Eagles drafted his son, Jeremiah Trotter Jr., in 2024.",
      sources: [wiki("Jeremiah_Trotter")],
    },
    teammates: {
      athletes: ["Ricky Watters", "Bobby Taylor"],
      shared: "coach",
      answer: "Ray Rhodes",
      wrong: ["Andy Reid", "Rich Kotite", "Buddy Ryan"],
      explanation: "Watters and Taylor both arrived in 1995, Ray Rhodes's first season. Taylor stayed on to play for Andy Reid, but Watters had left for Seattle by then.",
      sources: [wiki("Ray_Rhodes")],
    },
    replay: {
      clue: "Down 7–0 in the January 2018 NFC Championship Game, the Eagles get a break when Chris Long hits Case Keenum's arm, and a cornerback picks off the fluttering pass and runs it back 50 yards for a touchdown.",
      answer: "Patrick Robinson",
      wrong: ["Jalen Mills", "Ronald Darby", "Malcolm Jenkins"],
      explanation: "Patrick Robinson's pick-six turned the game, and the Eagles scored the next 38 points in a 38–7 win over Minnesota.",
      sources: [wiki("Patrick_Robinson_(cornerback)"), wiki("2017_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["Players wear dog masks after a playoff win over Atlanta", 2018],
        ["Saquon Barkley's reverse hurdle", 2024],
        ["The Miracle at the New Meadowlands", 2010],
        ["The Snow Bowl", 2013],
      ],
      sources: [wiki("Miracle_at_the_New_Meadowlands"), wiki("2013_Philadelphia_Eagles_season"), wiki("2017_Philadelphia_Eagles_season"), wiki("Saquon_Barkley")],
    },
    overtime: {
      prompt: "Which team beat the Eagles in Super Bowl XV?",
      answer: "Oakland Raiders",
      wrong: ["Pittsburgh Steelers", "San Diego Chargers", "Dallas Cowboys"],
      explanation: "The Oakland Raiders won 27–10 behind MVP Jim Plunkett, and linebacker Rod Martin intercepted Ron Jaworski three times.",
      sources: [wiki("Super_Bowl_XV")],
    },
  }),

  puzzle(26, {
    scout: {
      clue: "A former junior college quarterback who moved to tackle at Oklahoma, he was drafted fourth overall in 2013 and has started at right tackle for two Super Bowl champions.",
      answer: "Lane Johnson",
      wrong: ["Jason Peters", "Jon Runyan", "Tra Thomas"],
      explanation: "Lane Johnson has also spoken openly about his anxiety and depression, which led him to step away for several games in 2021.",
      sources: [wiki("Lane_Johnson")],
    },
    teammates: {
      athletes: ["Saquon Barkley", "Herschel Walker"],
      shared: "team",
      answer: "New York Giants",
      wrong: ["Dallas Cowboys", "Minnesota Vikings", "New York Jets"],
      explanation: "Barkley spent six seasons with the New York Giants before signing with the Eagles. Walker went from the Eagles to the Giants in 1995, after earlier stints in Dallas and Minnesota.",
      sources: [wiki("Saquon_Barkley"), wiki("Herschel_Walker")],
    },
    replay: {
      clue: "In a September 2002 game against the expansion Houston Texans, a safety becomes the first player in NFL history to record a sack, an interception, a forced fumble and a touchdown catch in the same game.",
      answer: "Brian Dawkins",
      wrong: ["Troy Vincent", "Bobby Taylor", "Michael Lewis"],
      explanation: "Brian Dawkins's touchdown came on a trick play, one of the many ways he filled the stat sheet in 13 Eagles seasons.",
      sources: [wiki("Brian_Dawkins")],
    },
    timeline: {
      events: [
        ["The Pickle Juice Game in Dallas", 2000],
        ["Chuck Bednarik flattens Frank Gifford", 1960],
        ["The Bounty Bowl in Dallas", 1989],
        ["Fans pelt Santa Claus with snowballs", 1968],
      ],
      sources: [wiki("Chuck_Bednarik"), wiki("History_of_the_Philadelphia_Eagles"), wiki("Bounty_Bowl"), wiki("Pickle_Juice_Game")],
    },
    overtime: {
      prompt: "Who holds the Eagles' career record for passing yards?",
      answer: "Donovan McNabb",
      wrong: ["Randall Cunningham", "Ron Jaworski", "Jalen Hurts"],
      explanation: "Donovan McNabb threw for 32,873 yards for the Eagles from 1999 to 2009.",
      sources: [wiki("Donovan_McNabb")],
    },
  }),

  puzzle(27, {
    scout: {
      clue: "A Wisconsin cornerback who came over from Miami as a free agent in 1996, he made five straight Pro Bowls, was the 2002 Walter Payton Man of the Year, and later became an NFL executive.",
      answer: "Troy Vincent",
      wrong: ["Bobby Taylor", "Al Harris", "Lito Sheppard"],
      explanation: "Troy Vincent also served as president of the NFL Players Association before running the league's football operations.",
      sources: [wiki("Troy_Vincent")],
    },
    teammates: {
      athletes: ["Herschel Walker", "Bubby Brister"],
      shared: "coach",
      answer: "Rich Kotite",
      wrong: ["Buddy Ryan", "Ray Rhodes", "Dick Vermeil"],
      explanation: "Walker played for the Eagles from 1992 to 1994 and Brister in 1993 and 1994, all under Rich Kotite. Both were gone when Ray Rhodes took over.",
      sources: [wiki("Rich_Kotite")],
    },
    replay: {
      clue: "In 109-degree heat at Texas Stadium on opening day in 2000, the Eagles start with a surprise onside kick, and their running back piles up 201 yards in a 41–14 rout.",
      answer: "Duce Staley",
      wrong: ["Brian Mitchell", "Darnell Autry", "Stanley Pritchett"],
      explanation: "Duce Staley and his teammates credited pickle juice with keeping cramps away, giving the 'Pickle Juice Game' its name.",
      sources: [wiki("Pickle_Juice_Game"), wiki("Duce_Staley")],
    },
    timeline: {
      events: [
        ["Bob Brown is drafted second overall", 1964],
        ["Pete Pihos leads the NFL in catches for the third straight year", 1955],
        ["Norm Van Brocklin retires as a champion", 1960],
        ["Tommy McDonald is drafted", 1957],
      ],
      sources: [wiki("Pete_Pihos"), wiki("Tommy_McDonald_(wide_receiver)"), wiki("Norm_Van_Brocklin"), wiki("Bob_Brown_(offensive_tackle)")],
    },
    overtime: {
      prompt: "Which Eagles head coach was fired with one game left in the 2015 season?",
      answer: "Chip Kelly",
      wrong: ["Doug Pederson", "Rich Kotite", "Ray Rhodes"],
      explanation: "Chip Kelly was let go with the team at 6–9, and offensive coordinator Pat Shurmur coached the finale.",
      sources: [wiki("Chip_Kelly"), wiki("2015_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(28, {
    scout: {
      clue: "The first receiver to win the Heisman in nearly three decades, this slender Alabama star was drafted 10th overall in 2021 after a trade with Dallas, and is nicknamed 'the Slim Reaper'.",
      answer: "DeVonta Smith",
      wrong: ["Jalen Reagor", "Quez Watkins", "J.J. Arcega-Whiteside"],
      explanation: "DeVonta Smith was the first receiver to win the Heisman since Desmond Howard in 1991, and he caught a touchdown pass in Super Bowl LIX.",
      sources: [wiki("DeVonta_Smith")],
    },
    teammates: {
      athletes: ["Terrell Owens", "DeMarco Murray"],
      shared: "team",
      answer: "Dallas Cowboys",
      wrong: ["Tennessee Titans", "San Francisco 49ers", "Buffalo Bills"],
      explanation: "Owens went from the Eagles to the Dallas Cowboys in 2006, and Murray went from the Cowboys to the Eagles in 2015. Murray finished with Tennessee; Owens also played for San Francisco and Buffalo.",
      sources: [wiki("Terrell_Owens"), wiki("DeMarco_Murray")],
    },
    replay: {
      clue: "Early in a January 2007 playoff game at the Superdome, an Eagles cornerback flattens Saints rookie Reggie Bush just as he catches a pass in the flat.",
      answer: "Sheldon Brown",
      wrong: ["Lito Sheppard", "Brian Dawkins", "Michael Lewis"],
      explanation: "Sheldon Brown's hit became one of the most replayed of the decade, but the Saints won 27–24.",
      sources: [wiki("Sheldon_Brown")],
    },
    timeline: {
      events: [
        ["An NFC Championship loss in Arizona", 2009],
        ["The Fog Bowl playoff loss in Chicago", 1988],
        ["The 'Double Doink' playoff win in Chicago", 2019],
        ["An NFC Championship loss to Carolina", 2004],
      ],
      sources: [wiki("Fog_Bowl_(American_football)"), wiki("2003_Philadelphia_Eagles_season"), wiki("2008_Philadelphia_Eagles_season"), wiki("Double_Doink")],
    },
    overtime: {
      prompt: "What nickname did the Eagles' defense of the late 1980s and early 1990s go by?",
      answer: "Gang Green",
      wrong: ["Purple People Eaters", "Doomsday Defense", "Fearsome Foursome"],
      explanation: "The 'Gang Green' defense of Reggie White, Jerome Brown, Clyde Simmons and Seth Joyner led the NFL in total, rushing and passing defense in 1991.",
      sources: [wiki("1991_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(29, {
    scout: {
      clue: "A ninth-round pick out of Western Carolina in 1986, this defensive end lined up opposite Reggie White and led the NFL with 19 sacks in 1992.",
      answer: "Clyde Simmons",
      wrong: ["Greg Brown", "William Fuller", "Andy Harmon"],
      explanation: "Clyde Simmons followed Buddy Ryan to the Arizona Cardinals in 1994.",
      sources: [wiki("Clyde_Simmons")],
    },
    teammates: {
      athletes: ["Norm Snead", "Bob Brown"],
      shared: "coach",
      answer: "Joe Kuharich",
      wrong: ["Buck Shaw", "Nick Skorich", "Dick Vermeil"],
      explanation: "Snead arrived in the 1964 Sonny Jurgensen trade and Brown was drafted that year, Joe Kuharich's first season. Brown was traded to the Rams after Kuharich was fired.",
      sources: [wiki("Joe_Kuharich")],
    },
    replay: {
      clue: "Starting for an injured Michael Vick in Oakland in November 2013, a second-year quarterback throws seven touchdown passes, tying the NFL single-game record, in a 49–20 win.",
      answer: "Nick Foles",
      wrong: ["Matt Barkley", "Mark Sanchez", "Kevin Kolb"],
      explanation: "Nick Foles finished 2013 with 27 touchdown passes and only two interceptions.",
      sources: [wiki("Nick_Foles")],
    },
    timeline: {
      events: [
        ["The Eagles win Super Bowl LIX", 2025],
        ["Lincoln Financial Field opens", 2003],
        ["The Eagles win Super Bowl LII", 2018],
        ["Jeffrey Lurie buys the Eagles", 1994],
      ],
      sources: [wiki("Jeffrey_Lurie"), wiki("Lincoln_Financial_Field"), wiki("Super_Bowl_LII"), wiki("Super_Bowl_LIX")],
    },
    overtime: {
      prompt: "Which team beat the Eagles in the December 1988 'Fog Bowl' playoff game?",
      answer: "Chicago Bears",
      wrong: ["Minnesota Vikings", "New York Giants", "Washington"],
      explanation: "Fog off Lake Michigan blanketed Soldier Field as the Chicago Bears won 20–12, despite 407 passing yards from Randall Cunningham.",
      sources: [wiki("Fog_Bowl_(American_football)")],
    },
  }),

  puzzle(30, {
    scout: {
      clue: "A converted fullback from South Dakota State, 'the Baron' starred at end and tight end for the 1960 champions, had his No. 44 retired, and later served as the Eagles' general manager.",
      answer: "Pete Retzlaff",
      wrong: ["Bobby Walston", "Mike Ditka", "Tommy McDonald"],
      explanation: "Pete Retzlaff played his entire 11-season career with the Eagles, from 1956 to 1966.",
      sources: [wiki("Pete_Retzlaff")],
    },
    teammates: {
      athletes: ["Michael Vick", "Mark Sanchez"],
      shared: "team",
      answer: "New York Jets",
      wrong: ["Atlanta Falcons", "Pittsburgh Steelers", "Dallas Cowboys"],
      explanation: "Sanchez started for the New York Jets before replacing Nick Foles in Philadelphia in 2014, the year Vick left the Eagles for the Jets. Vick also played for Atlanta and Pittsburgh; Sanchez later backed up in Dallas.",
      sources: [wiki("Michael_Vick"), wiki("Mark_Sanchez")],
    },
    replay: {
      clue: "In Super Bowl LVII against Kansas City in February 2023, an Eagles quarterback throws for 304 yards and runs for three touchdowns, a Super Bowl record for a quarterback, in a 38–35 loss.",
      answer: "Jalen Hurts",
      wrong: ["Gardner Minshew", "Miles Sanders", "Kenneth Gainwell"],
      explanation: "Jalen Hurts also ran for 70 yards, but a late Kansas City field goal decided the game. Two years later he was MVP of the rematch.",
      sources: [wiki("Super_Bowl_LVII"), wiki("Jalen_Hurts")],
    },
    timeline: {
      events: [
        ["Nick Foles is drafted", 2012],
        ["Jalen Hurts is drafted", 2020],
        ["Randall Cunningham is drafted", 1985],
        ["Donovan McNabb is drafted", 1999],
      ],
      sources: [wiki("Randall_Cunningham"), wiki("Donovan_McNabb"), wiki("Nick_Foles"), wiki("Jalen_Hurts")],
    },
    overtime: {
      prompt: "What job did Eagles co-founder Bert Bell take in 1946?",
      answer: "NFL commissioner",
      wrong: ["Mayor of Philadelphia", "President of the University of Pennsylvania", "Commissioner of Baseball"],
      explanation: "Bert Bell served as NFL commissioner from 1946 until his death in 1959, and is credited with creating the NFL draft.",
      sources: [wiki("Bert_Bell")],
    },
  }),
];
