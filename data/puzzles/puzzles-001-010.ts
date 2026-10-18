import { puzzle, wiki } from "./builders";

export const PUZZLES_001_010 = [
  puzzle(1, {
    scout: {
      clue: "An ordained minister who came to Philadelphia from the USFL's Memphis Showboats, this defensive end piled up 124 sacks in eight Eagles seasons before leaving for Green Bay as a free agent in 1993.",
      answer: "Reggie White",
      wrong: ["Clyde Simmons", "Jerome Brown", "Andy Harmon"],
      explanation: "Reggie White, 'the Minister of Defense', had 124 sacks in 121 games for the Eagles. His No. 92 is retired, and he won Super Bowl XXXI with the Packers.",
      sources: [wiki("Reggie_White")],
    },
    teammates: {
      athletes: ["Steve Van Buren", "Pete Pihos"],
      shared: "coach",
      answer: "Greasy Neale",
      wrong: ["Bert Bell", "Buck Shaw", "Jim Trimble"],
      explanation: "Van Buren and Pihos starred for Greasy Neale's teams that won back-to-back NFL titles in 1948 and 1949. Pihos later played for Jim Trimble, but Van Buren had retired by then.",
      sources: [wiki("Greasy_Neale")],
    },
    replay: {
      clue: "With the Giants needing only to kneel out the clock in November 1978, their quarterback botches a handoff, and an Eagles cornerback scoops up the loose ball and runs it in for the winning touchdown.",
      answer: "Herman Edwards",
      wrong: ["Bill Bergey", "John Bunting", "Randy Logan"],
      explanation: "Herman Edwards returned Joe Pisarcik's fumble 26 yards to beat the Giants 19–17 in the 'Miracle at the Meadowlands'. The Eagles went on to their first playoff berth since 1960.",
      sources: [wiki("Miracle_at_the_Meadowlands")],
    },
    timeline: {
      events: [
        ["The Eagles beat Lombardi's Packers for the NFL title", 1960],
        ["The Eagles win their first Super Bowl", 2018],
        ["The Eagles play their first season", 1933],
        ["The Eagles win their first NFL title, in a blizzard", 1948],
      ],
      sources: [wiki("History_of_the_Philadelphia_Eagles"), wiki("1948_NFL_Championship_Game"), wiki("1960_NFL_Championship_Game"), wiki("Super_Bowl_LII")],
    },
    overtime: {
      prompt: "The Eagles took their name in 1933 from the blue eagle emblem of which New Deal program?",
      answer: "National Recovery Administration",
      wrong: ["Works Progress Administration", "Civilian Conservation Corps", "Tennessee Valley Authority"],
      explanation: "Founders Bert Bell and Lud Wray named the team after the blue eagle of the National Recovery Administration, the symbol of Franklin Roosevelt's recovery program.",
      sources: [wiki("History_of_the_Philadelphia_Eagles")],
    },
  }),

  puzzle(2, {
    scout: {
      clue: "Taken first overall out of Penn in 1949, this World War II bomber gunner played center and linebacker for 14 seasons and was on the field for all but a few plays of the 1960 title game.",
      answer: "Chuck Bednarik",
      wrong: ["Alex Wojciechowicz", "Maxie Baughan", "Tom Brookshier"],
      explanation: "Chuck Bednarik, 'Concrete Charlie', was the NFL's last full-time two-way player. His No. 60 is retired, and he entered the Hall of Fame in 1967.",
      sources: [wiki("Chuck_Bednarik")],
    },
    teammates: {
      athletes: ["Lane Johnson", "Jalen Hurts"],
      shared: "college",
      answer: "Oklahoma",
      wrong: ["Texas", "Oklahoma State", "Baylor"],
      explanation: "Lane Johnson went from quarterback to tackle at Oklahoma before the Eagles drafted him fourth overall in 2013. Jalen Hurts transferred to Oklahoma from Alabama for the 2019 season and finished second in the Heisman voting.",
      sources: [wiki("Lane_Johnson"), wiki("Jalen_Hurts")],
    },
    replay: {
      clue: "Facing fourth down and 26 yards to go in a January 2004 playoff game against Green Bay, Donovan McNabb fires over the middle, and a receiver known for his trash talk makes the catch for a first down.",
      answer: "Freddie Mitchell",
      wrong: ["Todd Pinkston", "James Thrash", "Duce Staley"],
      explanation: "Freddie Mitchell's 28-yard catch set up David Akers's tying field goal, and Akers won it in overtime. Mitchell later thanked his hands for 'being so great'.",
      sources: [wiki("4th_and_26")],
    },
    timeline: {
      events: [
        ["The Eagles move into Franklin Field", 1958],
        ["The Eagles and Steelers merge as the 'Steagles'", 1943],
        ["The Eagles pick first in the NFL's first draft", 1936],
        ["Chuck Bednarik is drafted first overall", 1949],
      ],
      sources: [wiki("1936_NFL_draft"), wiki("Steagles"), wiki("Chuck_Bednarik"), wiki("Franklin_Field")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat 7–0 in a snowstorm at Shibe Park for their first NFL title, in 1948?",
      answer: "Chicago Cardinals",
      wrong: ["Chicago Bears", "Los Angeles Rams", "Cleveland Browns"],
      explanation: "The Eagles beat the Chicago Cardinals in a rematch of the 1947 title game, which the Cardinals had won. Steve Van Buren scored the only touchdown.",
      sources: [wiki("1948_NFL_Championship_Game")],
    },
  }),

  puzzle(3, {
    scout: {
      clue: "A Clemson safety taken in the second round in 1996, he crawled out of the tunnel during introductions, spent 13 seasons in Philadelphia, and finished his career in Denver.",
      answer: "Brian Dawkins",
      wrong: ["Troy Vincent", "Quintin Mikell", "Michael Lewis"],
      explanation: "Brian Dawkins, nicknamed 'Weapon X', made nine Pro Bowls. The Eagles retired his No. 20, and he entered the Hall of Fame in 2018.",
      sources: [wiki("Brian_Dawkins")],
    },
    teammates: {
      athletes: ["Reggie White", "Keith Jackson"],
      shared: "team",
      answer: "Green Bay Packers",
      wrong: ["Miami Dolphins", "Carolina Panthers", "Minnesota Vikings"],
      explanation: "White and Jackson were reunited on the Green Bay Packers and won Super Bowl XXXI together. Jackson had also played for Miami, and White finished his career with Carolina.",
      sources: [wiki("Reggie_White"), wiki("Keith_Jackson")],
    },
    replay: {
      clue: "On fourth-and-goal late in the first half of Super Bowl LII, the quarterback lines up as a receiver, the running back takes a direct snap and pitches to a tight end, and the tight end throws to the quarterback in the end zone.",
      answer: "Trey Burton",
      wrong: ["Corey Clement", "Nelson Agholor", "Alshon Jeffery"],
      explanation: "Trey Burton, a former college quarterback at Florida, threw the 'Philly Special' touchdown to Nick Foles after Corey Clement's pitch.",
      sources: [wiki("Philly_Special")],
    },
    timeline: {
      events: [
        ["Bert Bell becomes NFL commissioner", 1946],
        ["Sonny Jurgensen is traded to Washington", 1964],
        ["The Eagles play in the first televised NFL game", 1939],
        ["The Eagles win the NFL title in the Los Angeles rain", 1949],
      ],
      sources: [wiki("Bert_Bell"), wiki("1949_NFL_Championship_Game"), wiki("Sonny_Jurgensen"), wiki("History_of_the_Philadelphia_Eagles")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat 14–0 in a downpour for the 1949 NFL title?",
      answer: "Los Angeles Rams",
      wrong: ["Chicago Cardinals", "New York Giants", "Detroit Lions"],
      explanation: "The Eagles shut out the Los Angeles Rams at the Coliseum, and Steve Van Buren ran for 196 yards in the mud.",
      sources: [wiki("1949_NFL_Championship_Game")],
    },
  }),

  puzzle(4, {
    scout: {
      clue: "Booed by Eagles fans at the 1999 draft after going second overall out of Syracuse, this quarterback led Philadelphia to five NFC Championship Games and Super Bowl XXXIX.",
      answer: "Donovan McNabb",
      wrong: ["Kevin Kolb", "A.J. Feeley", "Koy Detmer"],
      explanation: "Donovan McNabb started for 11 seasons before a 2010 trade to Washington. The Eagles retired his No. 5 in 2013.",
      sources: [wiki("Donovan_McNabb")],
    },
    teammates: {
      athletes: ["Norm Van Brocklin", "Tommy McDonald"],
      shared: "coach",
      answer: "Buck Shaw",
      wrong: ["Nick Skorich", "Greasy Neale", "Joe Kuharich"],
      explanation: "Van Brocklin and McDonald won the 1960 title under Buck Shaw, who retired after that season. McDonald also played for Nick Skorich, but Van Brocklin had retired by then.",
      sources: [wiki("Buck_Shaw"), wiki("1960_Philadelphia_Eagles_season")],
    },
    replay: {
      clue: "With the Eagles having come back from 21 points down at the new Meadowlands in December 2010, the Giants punt with seconds left, and a returner fumbles, picks it up and races along the goal line before stepping into the end zone.",
      answer: "DeSean Jackson",
      wrong: ["Jeremy Maclin", "Jason Avant", "Quintin Demps"],
      explanation: "DeSean Jackson's 65-yard walk-off punt return capped a 28-point fourth quarter, completing the 'Miracle at the New Meadowlands'.",
      sources: [wiki("Miracle_at_the_New_Meadowlands")],
    },
    timeline: {
      events: [
        ["The Miracle at the Meadowlands", 1978],
        ["Veterans Stadium opens", 1971],
        ["Fans pelt Santa Claus with snowballs at Franklin Field", 1968],
        ["Dick Vermeil becomes head coach", 1976],
      ],
      sources: [wiki("Veterans_Stadium"), wiki("Dick_Vermeil"), wiki("Miracle_at_the_Meadowlands"), wiki("History_of_the_Philadelphia_Eagles")],
    },
    overtime: {
      prompt: "Whose only playoff loss as a head coach came against the Eagles in the 1960 NFL Championship Game?",
      answer: "Vince Lombardi",
      wrong: ["Tom Landry", "Paul Brown", "George Halas"],
      explanation: "The Eagles beat Vince Lombardi's Packers 17–13 at Franklin Field. Lombardi won his next nine playoff games, including the first two Super Bowls.",
      sources: [wiki("1960_NFL_Championship_Game"), wiki("Vince_Lombardi")],
    },
  }),

  puzzle(5, {
    scout: {
      clue: "A 6-foot-8 receiver taken in the seventh round out of Southern University in 1971, he caught a pass in 127 straight games and entered the Hall of Fame in 2020.",
      answer: "Harold Carmichael",
      wrong: ["Mike Quick", "Charlie Smith", "Ben Hawkins"],
      explanation: "Harold Carmichael is the Eagles' career leader in receiving yards and touchdown catches, and was Ron Jaworski's top target on the Super Bowl XV team.",
      sources: [wiki("Harold_Carmichael")],
    },
    teammates: {
      athletes: ["DeVonta Smith", "Landon Dickerson"],
      shared: "college",
      answer: "Alabama",
      wrong: ["Auburn", "LSU", "Georgia"],
      explanation: "Smith and Dickerson won the 2020 national title together at Alabama, and the Eagles drafted both in 2021. Dickerson had started his college career at Florida State.",
      sources: [wiki("DeVonta_Smith"), wiki("Landon_Dickerson")],
    },
    replay: {
      clue: "On the Eagles' second play of the January 1981 NFC Championship Game against Dallas, a running back bursts through the line and goes 42 yards for a touchdown on the way to 194 rushing yards.",
      answer: "Wilbert Montgomery",
      wrong: ["Leroy Harris", "Louie Giammona", "Billy Campfield"],
      explanation: "Wilbert Montgomery's run started a 20–7 win at Veterans Stadium that sent the Eagles to Super Bowl XV.",
      sources: [wiki("Wilbert_Montgomery"), wiki("1980_Philadelphia_Eagles_season")],
    },
    timeline: {
      events: [
        ["The Fog Bowl in Chicago", 1988],
        ["The Eagles play in Super Bowl XV", 1981],
        ["The Body Bag Game", 1990],
        ["Buddy Ryan becomes head coach", 1986],
      ],
      sources: [wiki("Super_Bowl_XV"), wiki("Buddy_Ryan"), wiki("Fog_Bowl_(American_football)"), wiki("Body_Bag_Game")],
    },
    overtime: {
      prompt: "Who caught the Eagles' only touchdown pass in Super Bowl XV?",
      answer: "Keith Krepfle",
      wrong: ["Harold Carmichael", "Wilbert Montgomery", "Charlie Smith"],
      explanation: "Tight end Keith Krepfle caught an 8-yard pass from Ron Jaworski in the fourth quarter, but the Raiders won 27–10.",
      sources: [wiki("Super_Bowl_XV")],
    },
  }),

  puzzle(6, {
    scout: {
      clue: "Benched at halftime of a national title game as Alabama's sophomore starter, this quarterback transferred to Oklahoma, was a 2020 second-round pick, and was named MVP of Super Bowl LIX.",
      answer: "Jalen Hurts",
      wrong: ["Carson Wentz", "Gardner Minshew", "Kenny Pickett"],
      explanation: "Jalen Hurts took over from Carson Wentz late in his rookie season and led the Eagles to two Super Bowls in three seasons, winning Super Bowl LIX over Kansas City.",
      sources: [wiki("Jalen_Hurts")],
    },
    teammates: {
      athletes: ["Terrell Owens", "LeSean McCoy"],
      shared: "team",
      answer: "Buffalo Bills",
      wrong: ["Dallas Cowboys", "Kansas City Chiefs", "Cincinnati Bengals"],
      explanation: "Owens spent the 2009 season with the Buffalo Bills, and McCoy played four seasons there after a 2015 trade. Owens also played for Dallas and Cincinnati; McCoy later joined Kansas City.",
      sources: [wiki("Terrell_Owens"), wiki("LeSean_McCoy")],
    },
    replay: {
      clue: "Trailing 33–32 with just over two minutes left in Super Bowl LII, the Patriots' quarterback drops back and is stripped by a defensive end, and the Eagles recover.",
      answer: "Brandon Graham",
      wrong: ["Derek Barnett", "Fletcher Cox", "Chris Long"],
      explanation: "Brandon Graham's strip-sack of Tom Brady was the only sack of the game. Derek Barnett recovered, and the Eagles won 41–33.",
      sources: [wiki("Super_Bowl_LII"), wiki("Brandon_Graham_(American_football)")],
    },
    timeline: {
      events: [
        ["Jeffrey Lurie buys the Eagles", 1994],
        ["Bert Bell and Lud Wray found the Eagles", 1933],
        ["Norman Braman buys the Eagles", 1985],
        ["Leonard Tose buys the Eagles", 1969],
      ],
      sources: [wiki("Bert_Bell"), wiki("Leonard_Tose"), wiki("Norman_Braman"), wiki("Jeffrey_Lurie")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat 15–10 as home underdogs in the January 2018 playoffs, inspiring players and fans to wear dog masks?",
      answer: "Atlanta Falcons",
      wrong: ["Minnesota Vikings", "New Orleans Saints", "Los Angeles Rams"],
      explanation: "The Eagles were the first No. 1 seed to be an underdog in their opening playoff game, and beat the Atlanta Falcons when a last-minute pass fell incomplete.",
      sources: [wiki("2017_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(7, {
    scout: {
      clue: "Nicknamed 'Shady', this Pitt running back led the NFL with 1,607 rushing yards in 2013 and passed Wilbert Montgomery as the Eagles' career rushing leader the next year.",
      answer: "LeSean McCoy",
      wrong: ["Brian Westbrook", "Bryce Brown", "DeMarco Murray"],
      explanation: "LeSean McCoy ran for 6,792 yards for the Eagles from 2009 to 2014, then was traded to Buffalo. DeMarco Murray replaced him in 2015.",
      sources: [wiki("LeSean_McCoy")],
    },
    teammates: {
      athletes: ["Ron Jaworski", "Harold Carmichael"],
      shared: "coach",
      answer: "Dick Vermeil",
      wrong: ["Mike McCormack", "Buddy Ryan", "Ed Khayat"],
      explanation: "Jaworski threw to Carmichael on Dick Vermeil's Super Bowl XV team. Carmichael had played for McCormack and Khayat before Jaworski arrived, and was gone by the time Buddy Ryan came.",
      sources: [wiki("Dick_Vermeil"), wiki("1980_Philadelphia_Eagles_season")],
    },
    replay: {
      clue: "Filling in for an injured veteran in September 2017, a rookie kicker lines up a 61-yard try against the Giants as time expires, and it clears the crossbar for the win.",
      answer: "Jake Elliott",
      wrong: ["Caleb Sturgis", "Cody Parkey", "Alex Henery"],
      explanation: "Jake Elliott's 61-yarder, a franchise record, beat the Giants 27–24 at Lincoln Financial Field. He had replaced the injured Caleb Sturgis a week earlier.",
      sources: [wiki("Jake_Elliott")],
    },
    timeline: {
      events: [
        ["Reggie White signs with Green Bay", 1993],
        ["Reggie White joins the Eagles from the USFL", 1985],
        ["Brian Dawkins is drafted", 1996],
        ["Jerome Brown dies in a car crash", 1992],
      ],
      sources: [wiki("Reggie_White"), wiki("Jerome_Brown"), wiki("Brian_Dawkins")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat 38–7 in the NFC Championship Game to reach Super Bowl LII?",
      answer: "Minnesota Vikings",
      wrong: ["Atlanta Falcons", "New Orleans Saints", "Los Angeles Rams"],
      explanation: "Nick Foles threw for 352 yards and three touchdowns as the Eagles routed the Minnesota Vikings, who had hoped to play the Super Bowl in their own stadium.",
      sources: [wiki("2017_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(8, {
    scout: {
      clue: "Born in Honduras and raised in New Orleans, this LSU running back led the NFL in rushing four times and retired in 1952 as the league's career rushing leader.",
      answer: "Steve Van Buren",
      wrong: ["Bosh Pritchard", "Joe Muha", "Tommy Thompson"],
      explanation: "Steve Van Buren scored the only touchdown of the 1948 title game and ran for 196 yards in the 1949 title game. His No. 15 is retired.",
      sources: [wiki("Steve_Van_Buren")],
    },
    teammates: {
      athletes: ["Jalen Carter", "Jordan Davis"],
      shared: "college",
      answer: "Georgia",
      wrong: ["Alabama", "Clemson", "Florida"],
      explanation: "Carter and Davis anchored Georgia's defensive line during its 2021 national title run, and the Eagles took both in the first round, Davis in 2022 and Carter in 2023.",
      sources: [wiki("Jalen_Carter"), wiki("Jordan_Davis_(defensive_tackle)")],
    },
    replay: {
      clue: "On the first play from scrimmage of a November 2010 Monday night game at Washington, the Eagles' quarterback hits DeSean Jackson for an 88-yard touchdown. He finishes with six total touchdowns in a 59–28 rout.",
      answer: "Michael Vick",
      wrong: ["Kevin Kolb", "Donovan McNabb", "Mike Kafka"],
      explanation: "Michael Vick threw for 333 yards and four touchdowns and ran for 80 yards and two more. Donovan McNabb was Washington's quarterback that night.",
      sources: [wiki("Michael_Vick")],
    },
    timeline: {
      events: [
        ["The final game at Veterans Stadium", 2003],
        ["Andy Reid becomes head coach", 1999],
        ["4th and 26 against Green Bay", 2004],
        ["The Pickle Juice Game in Dallas", 2000],
      ],
      sources: [wiki("Andy_Reid"), wiki("Pickle_Juice_Game"), wiki("Veterans_Stadium"), wiki("4th_and_26")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat 31–7 in the NFC Championship Game to reach Super Bowl LVII?",
      answer: "San Francisco 49ers",
      wrong: ["Dallas Cowboys", "New York Giants", "Tampa Bay Buccaneers"],
      explanation: "The San Francisco 49ers lost quarterback Brock Purdy to an elbow injury in the first quarter, and the Eagles cruised to the Super Bowl.",
      sources: [wiki("2022_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(9, {
    scout: {
      clue: "A scrambling UNLV quarterback drafted in 1985, he was dubbed 'The Ultimate Weapon' by Sports Illustrated, and once boomed a 91-yard punt against the Giants.",
      answer: "Randall Cunningham",
      wrong: ["Ron Jaworski", "Jim McMahon", "Bubby Brister"],
      explanation: "Randall Cunningham was Buddy Ryan's starter from 1987 through 1990 and later had a record-setting 1998 season with Minnesota.",
      sources: [wiki("Randall_Cunningham")],
    },
    teammates: {
      athletes: ["Donovan McNabb", "Randall Cunningham"],
      shared: "team",
      answer: "Minnesota Vikings",
      wrong: ["Washington", "Dallas Cowboys", "Baltimore Ravens"],
      explanation: "Cunningham revived his career with the Minnesota Vikings in the late 1990s, and McNabb finished his with them in 2011. McNabb also played for Washington; Cunningham also played for Dallas and Baltimore.",
      sources: [wiki("Donovan_McNabb"), wiki("Randall_Cunningham")],
    },
    replay: {
      clue: "With 2:21 left in Super Bowl LII, a tight end catches an 11-yard pass, takes three steps and dives into the end zone. The ball pops loose, and the play goes to review.",
      answer: "Zach Ertz",
      wrong: ["Brent Celek", "Trey Burton", "Nelson Agholor"],
      explanation: "Officials upheld Zach Ertz's go-ahead touchdown, ruling he had become a runner before the ball came loose.",
      sources: [wiki("Super_Bowl_LII"), wiki("Zach_Ertz")],
    },
    timeline: {
      events: [
        ["Michael Vick signs with the Eagles", 2009],
        ["Brian Westbrook is drafted", 2002],
        ["Donovan McNabb is traded to Washington", 2010],
        ["The Eagles play in Super Bowl XXXIX", 2005],
      ],
      sources: [wiki("Brian_Westbrook"), wiki("Super_Bowl_XXXIX"), wiki("Michael_Vick"), wiki("Donovan_McNabb")],
    },
    overtime: {
      prompt: "Which team did the Eagles beat 55–23 in the NFC Championship Game to reach Super Bowl LIX?",
      answer: "Washington Commanders",
      wrong: ["Los Angeles Rams", "Detroit Lions", "Green Bay Packers"],
      explanation: "Saquon Barkley ran for three touchdowns as the Eagles overwhelmed the Washington Commanders at Lincoln Financial Field.",
      sources: [wiki("2024_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(10, {
    scout: {
      clue: "Taken 12th overall out of Mississippi State in 2012, this defensive tackle made six straight Pro Bowls and spent his whole 12-season career in Philadelphia.",
      answer: "Fletcher Cox",
      wrong: ["Bennie Logan", "Javon Hargrave", "Tim Jernigan"],
      explanation: "Fletcher Cox won Super Bowl LII and played in Super Bowl LVII before retiring in 2024, just days after Jason Kelce.",
      sources: [wiki("Fletcher_Cox")],
    },
    teammates: {
      athletes: ["Reggie White", "Jerome Brown"],
      shared: "coach",
      answer: "Buddy Ryan",
      wrong: ["Marion Campbell", "Ray Rhodes", "Dick Vermeil"],
      explanation: "White and Brown were the heart of Buddy Ryan's defense from 1987 to 1990. White's first Eagles season came under Marion Campbell, before Brown arrived.",
      sources: [wiki("Buddy_Ryan")],
    },
    replay: {
      clue: "On his 22nd birthday, a rookie defensive back intercepts Patrick Mahomes in the second quarter of Super Bowl LIX and returns it 38 yards for a touchdown.",
      answer: "Cooper DeJean",
      wrong: ["Quinyon Mitchell", "Darius Slay", "Reed Blankenship"],
      explanation: "Cooper DeJean's pick-six put the Eagles up 17–0 on the way to a 40–22 win over Kansas City.",
      sources: [wiki("Super_Bowl_LIX"), wiki("Cooper_DeJean")],
    },
    timeline: {
      events: [
        ["The Snow Bowl against Detroit", 2013],
        ["Jason Kelce is drafted in the sixth round", 2011],
        ["LeSean McCoy is traded to Buffalo", 2015],
        ["Andy Reid is fired", 2012],
      ],
      sources: [wiki("Jason_Kelce"), wiki("Andy_Reid"), wiki("2013_Philadelphia_Eagles_season"), wiki("LeSean_McCoy")],
    },
    overtime: {
      prompt: "In which stadium did the Eagles win Super Bowl LII?",
      answer: "U.S. Bank Stadium",
      wrong: ["Mercedes-Benz Stadium", "NRG Stadium", "Hard Rock Stadium"],
      explanation: "Super Bowl LII was played at U.S. Bank Stadium in Minneapolis, home of the Vikings, whom the Eagles had beaten two weeks earlier in the NFC Championship Game.",
      sources: [wiki("Super_Bowl_LII")],
    },
  }),
];
