import { puzzle, wiki } from "./builders";

export const PUZZLES_051_060 = [
  puzzle(51, {
    scout: {
      clue: "The last major leaguer to hit .400 in a season, this Red Sox left fielder lost nearly five seasons to service as a Marine Corps pilot in World War II and Korea.",
      answer: "Ted Williams",
      wrong: ["Stan Musial", "Rogers Hornsby", "Tony Gwynn"],
      explanation: "Ted Williams hit .406 in 1941 and homered in his final at-bat, in 1960.",
      sources: [wiki("Ted_Williams")],
    },
    teammates: {
      athletes: ["Frank Lampard", "John Terry"],
      answer: "Chelsea",
      wrong: ["West Ham United", "Aston Villa", "Manchester City"],
      explanation: "Lampard and Terry won three Premier League titles together at Chelsea. Lampard started at West Ham and later played for Manchester City; Terry finished his career at Aston Villa.",
      sources: [wiki("Chelsea_F.C.")],
    },
    replay: {
      clue: "Within the first 16 minutes of the 2015 Women's World Cup final in Vancouver, a U.S. midfielder completes a hat-trick against Japan, the last goal struck from the halfway line.",
      answer: "Carli Lloyd",
      wrong: ["Abby Wambach", "Alex Morgan", "Megan Rapinoe"],
      explanation: "Carli Lloyd's hat-trick set up a 5–2 win, the United States' first World Cup title since 1999.",
      sources: [wiki("Carli_Lloyd"), wiki("2015_FIFA_Women's_World_Cup_final")],
    },
    timeline: {
      events: [
        ["The Raiders move to Las Vegas", 2020],
        ["The NFL adopts instant replay review", 1986],
        ["Monday Night Football debuts on ABC", 1970],
        ["The Houston Texans play their first season", 2002],
      ],
      sources: [wiki("Monday_Night_Football"), wiki("Instant_replay_in_American_football"), wiki("Houston_Texans"), wiki("Las_Vegas_Raiders")],
    },
    overtime: {
      prompt: "Who was the first NHL player to score 50 goals in a season, in 1944–45?",
      answer: "Maurice Richard",
      wrong: ["Bernie Geoffrion", "Bobby Hull", "Gordie Howe"],
      explanation: "Maurice Richard, the 'Rocket', scored 50 goals in 50 games for Montreal. The NHL's goal-scoring trophy is named after him.",
      sources: [wiki("Maurice_Richard")],
    },
  }),

  puzzle(52, {
    scout: {
      clue: "The face of 'Total Football', this Dutch forward won three straight European Cups with Ajax and later coached Barcelona to its first.",
      answer: "Johan Cruyff",
      wrong: ["Marco van Basten", "Ruud Gullit", "Johan Neeskens"],
      explanation: "Johan Cruyff won three Ballons d'Or and gave his name to the 'Cruyff turn', unveiled at the 1974 World Cup.",
      sources: [wiki("Johan_Cruyff")],
    },
    teammates: {
      athletes: ["Shai Gilgeous-Alexander", "Jalen Williams"],
      answer: "Oklahoma City Thunder",
      wrong: ["Los Angeles Clippers", "Memphis Grizzlies", "Houston Rockets"],
      explanation: "Gilgeous-Alexander and Williams won the 2025 title together with the Oklahoma City Thunder. Gilgeous-Alexander came from the Clippers in the 2019 Paul George trade.",
      sources: [wiki("Oklahoma_City_Thunder")],
    },
    replay: {
      clue: "With eight seconds left in Super Bowl XXV and Buffalo trailing the Giants by a point, a Bills kicker's 47-yard field goal attempt sails wide right.",
      answer: "Scott Norwood",
      wrong: ["Steve Christie", "Gary Anderson", "Morten Andersen"],
      explanation: "Scott Norwood's miss gave the Giants a 20–19 win, the first of four straight Super Bowl defeats for Buffalo.",
      sources: [wiki("Scott_Norwood"), wiki("Super_Bowl_XXV")],
    },
    timeline: {
      events: [
        ["England wins the Rugby World Cup", 2003],
        ["India wins its first Cricket World Cup", 1983],
        ["Pakistan wins the Cricket World Cup", 1992],
        ["The West Indies win the first Cricket World Cup", 1975],
      ],
      sources: [wiki("1975_Cricket_World_Cup"), wiki("1983_Cricket_World_Cup"), wiki("1992_Cricket_World_Cup"), wiki("2003_Rugby_World_Cup")],
    },
    overtime: {
      prompt: "Which school won the first NCAA women's basketball tournament, in 1982?",
      answer: "Louisiana Tech",
      wrong: ["Cheyney", "Old Dominion", "Tennessee"],
      explanation: "Louisiana Tech beat Cheyney 76–62 in the 1982 final in Norfolk.",
      sources: [wiki("1982_NCAA_Division_I_women's_basketball_tournament")],
    },
  }),

  puzzle(53, {
    scout: {
      clue: "A physics student at Morehouse College, he won 107 consecutive finals in the 400-meter hurdles from 1977 to 1987, with Olympic gold in 1976 and 1984.",
      answer: "Edwin Moses",
      wrong: ["Kevin Young", "Félix Sánchez", "Danny Harris"],
      explanation: "Edwin Moses's streak ended when Danny Harris beat him in Madrid in 1987.",
      sources: [wiki("Edwin_Moses")],
    },
    teammates: {
      athletes: ["Cal Ripken Jr.", "Eddie Murray"],
      answer: "Baltimore Orioles",
      wrong: ["Cleveland Indians", "New York Mets", "California Angels"],
      explanation: "Ripken and Murray won the 1983 World Series together with the Baltimore Orioles. Murray also played for Cleveland, the Mets and the Angels; Ripken played only for Baltimore.",
      sources: [wiki("Baltimore_Orioles")],
    },
    replay: {
      clue: "In the 116th minute of the 2010 World Cup final in Johannesburg, a Spanish midfielder volleys home the only goal against the Netherlands, then reveals a tribute to a late friend on his undershirt.",
      answer: "Andrés Iniesta",
      wrong: ["David Villa", "Fernando Torres", "Xavi"],
      explanation: "Andrés Iniesta's goal won Spain its first World Cup, and his shirt honored Espanyol captain Dani Jarque.",
      sources: [wiki("Andrés_Iniesta"), wiki("2010_FIFA_World_Cup_final")],
    },
    timeline: {
      events: [
        ["Duke wins its first NCAA title", 1991],
        ["UMBC becomes the first No. 16 seed to beat a No. 1", 2018],
        ["UCLA wins its 10th title under John Wooden", 1975],
        ["Villanova upsets Georgetown in the NCAA final", 1985],
      ],
      sources: [wiki("1975_NCAA_Division_I_basketball_tournament"), wiki("1985_NCAA_Division_I_men's_basketball_championship_game"), wiki("1991_NCAA_Division_I_men's_basketball_tournament"), wiki("2018_NCAA_Division_I_men's_basketball_tournament")],
    },
    overtime: {
      prompt: "Who is the NFL's career scoring leader?",
      answer: "Adam Vinatieri",
      wrong: ["Morten Andersen", "Gary Anderson", "Justin Tucker"],
      explanation: "Adam Vinatieri scored 2,673 points over 24 seasons with New England and Indianapolis.",
      sources: [wiki("Adam_Vinatieri")],
    },
  }),

  puzzle(54, {
    scout: {
      clue: "Nicknamed 'The Intimidator', the driver of the black No. 3 Chevrolet won seven NASCAR Cup titles and was killed on the last lap of the 2001 Daytona 500.",
      answer: "Dale Earnhardt",
      wrong: ["Jeff Gordon", "Darrell Waltrip", "Rusty Wallace"],
      explanation: "Dale Earnhardt's seven titles tied Richard Petty's record, which Jimmie Johnson later matched.",
      sources: [wiki("Dale_Earnhardt")],
    },
    teammates: {
      athletes: ["Chipper Jones", "Greg Maddux"],
      answer: "Atlanta Braves",
      wrong: ["Chicago Cubs", "San Diego Padres", "Florida Marlins"],
      explanation: "Jones and Maddux won the 1995 World Series together with the Atlanta Braves. Maddux also pitched for the Cubs and Padres; Jones played his whole career in Atlanta.",
      sources: [wiki("Atlanta_Braves")],
    },
    replay: {
      clue: "Trailing the Yankees in the 11th inning of the deciding game of the 1995 ALDS, a Seattle designated hitter lines a double into the left-field corner, and Ken Griffey Jr. scores from first with the winning run.",
      answer: "Edgar Martínez",
      wrong: ["Ken Griffey Jr.", "Jay Buhner", "Tino Martinez"],
      explanation: "Edgar Martínez's 'The Double' gave the Mariners a 6–5 win and is credited with helping keep the team in Seattle.",
      sources: [wiki("Edgar_Martínez"), wiki("1995_American_League_Division_Series")],
    },
    timeline: {
      events: [
        ["The PWHL plays its first season", 2024],
        ["The WNBA plays its first season", 1997],
        ["Title IX is signed into law", 1972],
        ["The U.S. wins the first Women's World Cup", 1991],
      ],
      sources: [wiki("Title_IX"), wiki("1991_FIFA_Women's_World_Cup"), wiki("Women's_National_Basketball_Association"), wiki("Professional_Women's_Hockey_League")],
    },
    overtime: {
      prompt: "Which country hosted the first Winter Olympics, in 1924?",
      answer: "France",
      wrong: ["Switzerland", "Norway", "United States"],
      explanation: "The first Winter Olympics were held in Chamonix, France. Norway topped the medal table.",
      sources: [wiki("1924_Winter_Olympics")],
    },
  }),

  puzzle(55, {
    scout: {
      clue: "A guard who won three straight NCAA titles at UConn, she was the first overall pick by Phoenix in 2004 and retired in 2025 as the WNBA's career scoring leader.",
      answer: "Diana Taurasi",
      wrong: ["Sue Bird", "Tamika Catchings", "Cynthia Cooper"],
      explanation: "Diana Taurasi won three WNBA titles with the Mercury and six Olympic gold medals.",
      sources: [wiki("Diana_Taurasi")],
    },
    teammates: {
      athletes: ["Steven Stamkos", "Nikita Kucherov"],
      answer: "Tampa Bay Lightning",
      wrong: ["Nashville Predators", "Florida Panthers", "Montreal Canadiens"],
      explanation: "Stamkos and Kucherov won back-to-back Stanley Cups with the Tampa Bay Lightning in 2020 and 2021. Stamkos signed with Nashville in 2024.",
      sources: [wiki("Tampa_Bay_Lightning")],
    },
    replay: {
      clue: "In a 1997 heavyweight title rematch in Las Vegas, a former champion bites both of Evander Holyfield's ears and is disqualified after the third round.",
      answer: "Mike Tyson",
      wrong: ["Riddick Bowe", "Lennox Lewis", "Michael Moorer"],
      explanation: "Mike Tyson's license was revoked by the Nevada commission after the fight, which became known as 'The Bite Fight'.",
      sources: [wiki("Evander_Holyfield_vs._Mike_Tyson_II")],
    },
    timeline: {
      events: [
        ["The Montreal Expos become the Washington Nationals", 2005],
        ["The Seattle Pilots become the Milwaukee Brewers", 1970],
        ["The Dodgers and Giants move to California", 1958],
        ["The Braves move to Atlanta", 1966],
      ],
      sources: [wiki("Los_Angeles_Dodgers"), wiki("Atlanta_Braves"), wiki("Seattle_Pilots"), wiki("Washington_Nationals")],
    },
    overtime: {
      prompt: "Which city became the first to host the Summer Olympics three times?",
      answer: "London",
      wrong: ["Paris", "Los Angeles", "Athens"],
      explanation: "London hosted in 1908, 1948 and 2012. Paris joined it with a third Games in 2024.",
      sources: [wiki("2012_Summer_Olympics")],
    },
  }),

  puzzle(56, {
    scout: {
      clue: "With a fan base known as his 'Army', this golfer from Latrobe, Pennsylvania, won four Masters titles and helped turn golf into a television sport.",
      answer: "Arnold Palmer",
      wrong: ["Gary Player", "Billy Casper", "Ben Hogan"],
      explanation: "Arnold Palmer won seven majors, including the Masters in 1958, 1960, 1962 and 1964.",
      sources: [wiki("Arnold_Palmer")],
    },
    teammates: {
      athletes: ["Alex Ovechkin", "Nicklas Bäckström"],
      answer: "Washington Capitals",
      wrong: ["Pittsburgh Penguins", "Philadelphia Flyers", "New York Rangers"],
      explanation: "Ovechkin and Bäckström won the 2018 Stanley Cup together, the first in Washington Capitals history.",
      sources: [wiki("Washington_Capitals")],
    },
    replay: {
      clue: "With Game 7 of the 2016 NBA Finals tied at 89 and under a minute left, a Cleveland guard hits a step-back three over Stephen Curry.",
      answer: "Kyrie Irving",
      wrong: ["J. R. Smith", "Kevin Love", "Tristan Thompson"],
      explanation: "Kyrie Irving's shot put the Cavaliers ahead for good, completing a comeback from 3–1 down and ending Cleveland's 52-year title drought.",
      sources: [wiki("Kyrie_Irving"), wiki("2016_NBA_Finals")],
    },
    timeline: {
      events: [
        ["Hank Aaron hits his 715th home run", 1974],
        ["Barry Bonds hits 73 home runs in a season", 2001],
        ["Jackie Robinson breaks MLB's color barrier", 1947],
        ["Roger Maris hits 61 home runs in a season", 1961],
      ],
      sources: [wiki("Jackie_Robinson"), wiki("Roger_Maris"), wiki("Hank_Aaron"), wiki("Barry_Bonds")],
    },
    overtime: {
      prompt: "Who set the men's marathon world record of 2:00:35 in Chicago in 2023?",
      answer: "Kelvin Kiptum",
      wrong: ["Eliud Kipchoge", "Kenenisa Bekele", "Geoffrey Mutai"],
      explanation: "Kelvin Kiptum broke Eliud Kipchoge's record by 34 seconds, four months before he died in a car crash in Kenya.",
      sources: [wiki("Kelvin_Kiptum")],
    },
  }),

  puzzle(57, {
    scout: {
      clue: "A left-handed Australian nicknamed 'Rocket', he is the only player to win the calendar-year Grand Slam twice, in 1962 and 1969.",
      answer: "Rod Laver",
      wrong: ["Ken Rosewall", "Roy Emerson", "John Newcombe"],
      explanation: "Rod Laver won his first Grand Slam as an amateur and his second in the Open era. Melbourne's main tennis arena is named after him.",
      sources: [wiki("Rod_Laver")],
    },
    teammates: {
      athletes: ["Thomas Müller", "Robert Lewandowski"],
      answer: "Bayern Munich",
      wrong: ["Borussia Dortmund", "Barcelona", "Schalke 04"],
      explanation: "Müller and Lewandowski won the 2020 Champions League together with Bayern Munich. Lewandowski came from Dortmund and left for Barcelona in 2022.",
      sources: [wiki("FC_Bayern_Munich")],
    },
    replay: {
      clue: "At the 1999 Ryder Cup in Brookline, an American who had been struggling all week holes a 45-foot birdie putt on the 17th, and his teammates storm the green before his opponent has putted.",
      answer: "Justin Leonard",
      wrong: ["Payne Stewart", "Phil Mickelson", "David Duval"],
      explanation: "Justin Leonard's putt clinched the half point the United States needed to complete a comeback from 10–6 down on the final day.",
      sources: [wiki("Justin_Leonard"), wiki("1999_Ryder_Cup")],
    },
    timeline: {
      events: [
        ["The Cleveland Cavaliers win their first NBA title", 2016],
        ["The Portland Trail Blazers win their only NBA title", 1977],
        ["The Oklahoma City Thunder win their first title since leaving Seattle", 2025],
        ["The Detroit Pistons win their first NBA title", 1989],
      ],
      sources: [wiki("1977_NBA_Finals"), wiki("1989_NBA_Finals"), wiki("2016_NBA_Finals"), wiki("2025_NBA_Finals")],
    },
    overtime: {
      prompt: "Which school has won the most NCAA Division I women's basketball titles?",
      answer: "UConn",
      wrong: ["Tennessee", "South Carolina", "Stanford"],
      explanation: "UConn won its 12th national title in 2025, all under Geno Auriemma. Tennessee is next with eight.",
      sources: [wiki("NCAA_Division_I_women's_basketball_tournament")],
    },
  }),

  puzzle(58, {
    scout: {
      clue: "A Panamanian closer who threw his cut fastball almost exclusively, he retired as MLB's career saves leader and became the first player elected to the Hall of Fame unanimously.",
      answer: "Mariano Rivera",
      wrong: ["Trevor Hoffman", "Dennis Eckersley", "Lee Smith"],
      explanation: "Mariano Rivera saved 652 games for the Yankees and won five World Series.",
      sources: [wiki("Mariano_Rivera")],
    },
    teammates: {
      athletes: ["Jalen Hurts", "A. J. Brown"],
      answer: "Philadelphia Eagles",
      wrong: ["Tennessee Titans", "Dallas Cowboys", "New York Giants"],
      explanation: "Hurts and Brown won Super Bowl LIX together with the Philadelphia Eagles. Brown came from Tennessee in a 2022 draft-day trade.",
      sources: [wiki("Philadelphia_Eagles")],
    },
    replay: {
      clue: "Trailing Bayern Munich going into stoppage time of the 1999 Champions League final, Manchester United equalize, and then a substitute striker pokes in a corner at the near post to win it.",
      answer: "Ole Gunnar Solskjær",
      wrong: ["Teddy Sheringham", "Dwight Yorke", "Andy Cole"],
      explanation: "Ole Gunnar Solskjær's goal completed United's treble, two minutes after Teddy Sheringham's equalizer.",
      sources: [wiki("Ole_Gunnar_Solskjær"), wiki("1999_UEFA_Champions_League_final")],
    },
    timeline: {
      events: [
        ["VAR is used at a men's World Cup for the first time", 2018],
        ["Hawk-Eye line calling debuts at a Grand Slam", 2006],
        ["MLB introduces the pitch clock", 2023],
        ["The NFL adds overtime to regular-season games", 1974],
      ],
      sources: [wiki("Overtime_(sports)"), wiki("Hawk-Eye"), wiki("Video_assistant_referee"), wiki("Pitch_clock")],
    },
    overtime: {
      prompt: "Who passed Eddy Merckx in 2024 to hold the record for most Tour de France stage wins?",
      answer: "Mark Cavendish",
      wrong: ["Peter Sagan", "André Greipel", "Mario Cipollini"],
      explanation: "Mark Cavendish won his 35th Tour stage in July 2024, breaking the tie with Merckx in his final Tour.",
      sources: [wiki("Mark_Cavendish")],
    },
  }),

  puzzle(59, {
    scout: {
      clue: "A slalom specialist raised in Colorado, she passed Ingemar Stenmark's record of 86 World Cup wins in 2023 and became the first skier to reach 100.",
      answer: "Mikaela Shiffrin",
      wrong: ["Petra Vlhová", "Lindsey Vonn", "Tina Maze"],
      explanation: "Mikaela Shiffrin won her 87th race in March 2023 and her 100th in February 2025.",
      sources: [wiki("Mikaela_Shiffrin")],
    },
    teammates: {
      athletes: ["Craig Biggio", "Jeff Bagwell"],
      answer: "Houston Astros",
      wrong: ["Texas Rangers", "Atlanta Braves", "Chicago Cubs"],
      explanation: "Biggio and Bagwell, the 'Killer B's', spent their whole careers with the Houston Astros and reached the 2005 World Series together.",
      sources: [wiki("Houston_Astros")],
    },
    replay: {
      clue: "With the bases loaded in the bottom of the ninth of Game 7 of the 2001 World Series, an Arizona outfielder bloops a single over the drawn-in infield off Mariano Rivera.",
      answer: "Luis Gonzalez",
      wrong: ["Craig Counsell", "Tony Womack", "Jay Bell"],
      explanation: "Luis Gonzalez's hit scored Jay Bell and gave the Diamondbacks their first title in only their fourth season.",
      sources: [wiki("Luis_Gonzalez_(outfielder)"), wiki("2001_World_Series")],
    },
    timeline: {
      events: [
        ["Andy Murray wins Wimbledon", 2013],
        ["Arthur Ashe wins Wimbledon", 1975],
        ["Venus and Serena Williams meet in their first Grand Slam final", 2001],
        ["Martina Navratilova wins her ninth Wimbledon singles title", 1990],
      ],
      sources: [wiki("Arthur_Ashe"), wiki("Martina_Navratilova"), wiki("2001_US_Open_–_Women's_singles"), wiki("Andy_Murray")],
    },
    overtime: {
      prompt: "Who scored the fastest hat-trick in Premier League history, in under three minutes in 2015?",
      answer: "Sadio Mané",
      wrong: ["Robbie Fowler", "Mohamed Salah", "Harry Kane"],
      explanation: "Sadio Mané scored three times in 2 minutes 56 seconds for Southampton against Aston Villa, beating Robbie Fowler's 1994 record.",
      sources: [wiki("Sadio_Mané")],
    },
  }),

  puzzle(60, {
    scout: {
      clue: "Making his Test debut for India at 16, this batter retired in 2013 holding the records for most runs and most centuries in both Test and one-day international cricket.",
      answer: "Sachin Tendulkar",
      wrong: ["Rahul Dravid", "Sunil Gavaskar", "Brian Lara"],
      explanation: "Sachin Tendulkar scored 100 international centuries and hit the first double century in a men's ODI, in 2010.",
      sources: [wiki("Sachin_Tendulkar")],
    },
    teammates: {
      athletes: ["Eli Manning", "Michael Strahan"],
      answer: "New York Giants",
      wrong: ["New York Jets", "Philadelphia Eagles", "Washington Commanders"],
      explanation: "Manning and Strahan won Super Bowl XLII together with the New York Giants, ending the Patriots' perfect season. Both played their whole careers there.",
      sources: [wiki("New_York_Giants")],
    },
    replay: {
      clue: "On a cinder track in Oxford in May 1954, a British medical student paced by two friends becomes the first person to run a mile in under four minutes.",
      answer: "Roger Bannister",
      wrong: ["John Landy", "Chris Chataway", "Herb Elliott"],
      explanation: "Roger Bannister ran 3:59.4 at Iffley Road. John Landy lowered the record just 46 days later.",
      sources: [wiki("Roger_Bannister")],
    },
    timeline: {
      events: [
        ["Eliud Kipchoge runs a marathon in under two hours", 2019],
        ["Paavo Nurmi wins five golds at the Paris Olympics", 1924],
        ["Usain Bolt runs the 100 meters in 9.58 seconds", 2009],
        ["Michael Johnson wins the 200 and 400 meters at Atlanta", 1996],
      ],
      sources: [wiki("Paavo_Nurmi"), wiki("Michael_Johnson_(sprinter)"), wiki("Usain_Bolt"), wiki("Ineos_1:59_Challenge")],
    },
    overtime: {
      prompt: "Which pitcher threw the only perfect game in World Series history?",
      answer: "Don Larsen",
      wrong: ["Roy Halladay", "Whitey Ford", "Jack Morris"],
      explanation: "Don Larsen retired all 27 Brooklyn Dodgers in Game 5 of the 1956 World Series for the Yankees.",
      sources: [wiki("Don_Larsen's_perfect_game")],
    },
  }),
];
