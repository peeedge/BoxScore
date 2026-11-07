import { puzzle, wiki } from "./builders";

export const PUZZLES_031_040 = [
  puzzle(31, {
    scout: {
      clue: "Born Lew Alcindor, this center won three NCAA titles at UCLA, then six NBA titles with Milwaukee and Los Angeles, scoring many of his points with an unstoppable 'skyhook'.",
      answer: "Kareem Abdul-Jabbar",
      wrong: ["Bill Walton", "Wilt Chamberlain", "Hakeem Olajuwon"],
      explanation: "Kareem Abdul-Jabbar won a record six MVP awards and retired in 1989 as the NBA's career scoring leader with 38,387 points.",
      sources: [wiki("Kareem_Abdul-Jabbar")],
    },
    teammates: {
      athletes: ["Dirk Nowitzki", "Jason Kidd"],
      answer: "Dallas Mavericks",
      wrong: ["New Jersey Nets", "Phoenix Suns", "New York Knicks"],
      explanation: "Nowitzki and Kidd won the 2011 title together with the Dallas Mavericks. Kidd also played for New Jersey, Phoenix and New York; Nowitzki spent all 21 seasons in Dallas.",
      sources: [wiki("Dallas_Mavericks")],
    },
    replay: {
      clue: "Leading off the bottom of the ninth in Game 7 of the 1960 World Series, a Pittsburgh second baseman homers over the left-field wall at Forbes Field to beat the Yankees.",
      answer: "Bill Mazeroski",
      wrong: ["Roberto Clemente", "Dick Groat", "Hal Smith"],
      explanation: "Bill Mazeroski's homer off Ralph Terry made him the first player to end a World Series with a home run.",
      sources: [wiki("Bill_Mazeroski"), wiki("1960_World_Series")],
    },
    timeline: {
      events: [
        ["Beijing hosts the Summer Olympics", 2008],
        ["Los Angeles hosts the Summer Olympics for the first time", 1932],
        ["Sydney hosts the Summer Olympics", 2000],
        ["Tokyo hosts the Summer Olympics for the first time", 1964],
      ],
      sources: [wiki("1932_Summer_Olympics"), wiki("1964_Summer_Olympics"), wiki("2000_Summer_Olympics"), wiki("2008_Summer_Olympics")],
    },
    overtime: {
      prompt: "Which country has won the most men's Cricket World Cup titles?",
      answer: "Australia",
      wrong: ["India", "West Indies", "England"],
      explanation: "Australia have won the men's Cricket World Cup six times, most recently in 2023 against India in Ahmedabad. India and the West Indies have two titles each.",
      sources: [wiki("Cricket_World_Cup")],
    },
  }),

  puzzle(32, {
    scout: {
      clue: "Having worn a leg brace as a child after polio, this Tennessee State sprinter won three gold medals at the 1960 Rome Olympics.",
      answer: "Wilma Rudolph",
      wrong: ["Wyomia Tyus", "Florence Griffith Joyner", "Evelyn Ashford"],
      explanation: "Wilma Rudolph won the 100 meters, 200 meters and 4x100 relay in Rome, the first American woman to win three track and field golds at one Games.",
      sources: [wiki("Wilma_Rudolph")],
    },
    teammates: {
      athletes: ["Peyton Manning", "Demaryius Thomas"],
      answer: "Denver Broncos",
      wrong: ["Houston Texans", "New York Jets", "Indianapolis Colts"],
      explanation: "Manning and Thomas won Super Bowl 50 together with the Denver Broncos. Manning came from Indianapolis; Thomas later played for Houston and the Jets.",
      sources: [wiki("Denver_Broncos")],
    },
    replay: {
      clue: "In a one-game playoff for the 1978 AL East title at Fenway Park, a light-hitting Yankees shortstop lifts a three-run homer over the Green Monster.",
      answer: "Bucky Dent",
      wrong: ["Reggie Jackson", "Thurman Munson", "Graig Nettles"],
      explanation: "Bucky Dent's seventh-inning homer put New York ahead, and the Yankees won 5–4 before beating the Dodgers in the World Series.",
      sources: [wiki("Bucky_Dent")],
    },
    timeline: {
      events: [
        ["The Patriots win their first Super Bowl", 2002],
        ["The Steelers win their first Super Bowl", 1975],
        ["The Eagles win their first Super Bowl", 2018],
        ["The 49ers win their first Super Bowl", 1982],
      ],
      sources: [wiki("Super_Bowl_IX"), wiki("Super_Bowl_XVI"), wiki("Super_Bowl_XXXVI"), wiki("Super_Bowl_LII")],
    },
    overtime: {
      prompt: "Which swimmer won her fourth straight Olympic 800-meter freestyle title in Paris in 2024?",
      answer: "Katie Ledecky",
      wrong: ["Ariarne Titmus", "Rebecca Adlington", "Janet Evans"],
      explanation: "Katie Ledecky won the 800 free in 2012, 2016, 2021 and 2024, bringing her career total to nine Olympic golds.",
      sources: [wiki("Katie_Ledecky")],
    },
  }),

  puzzle(33, {
    scout: {
      clue: "A Brazilian driver who won three Formula One titles with McLaren, he won a record six times at Monaco and was killed at Imola in 1994.",
      answer: "Ayrton Senna",
      wrong: ["Nelson Piquet", "Emerson Fittipaldi", "Rubens Barrichello"],
      explanation: "Ayrton Senna won the championship in 1988, 1990 and 1991, and his six Monaco Grand Prix wins remain the record.",
      sources: [wiki("Ayrton_Senna")],
    },
    teammates: {
      athletes: ["Shohei Ohtani", "Mike Trout"],
      answer: "Los Angeles Angels",
      wrong: ["Los Angeles Dodgers", "Hokkaido Nippon-Ham Fighters", "Seattle Mariners"],
      explanation: "Ohtani and Trout were teammates on the Los Angeles Angels from 2018 to 2023. Ohtani came from Japan's Nippon-Ham Fighters and joined the Dodgers in 2024; Trout has played only for the Angels.",
      sources: [wiki("Los_Angeles_Angels")],
    },
    replay: {
      clue: "Down a run in the bottom of the ninth of Game 6 of the 1993 World Series, a Toronto outfielder hits a three-run homer off Mitch Williams and leaps around the bases as the Blue Jays repeat as champions.",
      answer: "Joe Carter",
      wrong: ["Roberto Alomar", "Paul Molitor", "John Olerud"],
      explanation: "Joe Carter became the second player to end a World Series with a home run, after Bill Mazeroski in 1960, and the first to do it from behind.",
      sources: [wiki("Joe_Carter"), wiki("1993_World_Series")],
    },
    timeline: {
      events: [
        ["Pete Sampras wins his first Wimbledon", 1993],
        ["Rod Laver completes his second calendar Grand Slam", 1969],
        ["Novak Djokovic wins his first Wimbledon", 2011],
        ["Björn Borg wins his fifth straight Wimbledon", 1980],
      ],
      sources: [wiki("Rod_Laver"), wiki("Björn_Borg"), wiki("Pete_Sampras"), wiki("Novak_Djokovic")],
    },
    overtime: {
      prompt: "Which team won the 1994 Stanley Cup, ending a championship drought that dated back to 1940?",
      answer: "New York Rangers",
      wrong: ["Vancouver Canucks", "Chicago Blackhawks", "Toronto Maple Leafs"],
      explanation: "The New York Rangers beat Vancouver in seven games in 1994 for their first Cup in 54 years.",
      sources: [wiki("1994_Stanley_Cup_Final")],
    },
  }),

  puzzle(34, {
    scout: {
      clue: "A receiver from Mississippi Valley State, he won three Super Bowls with San Francisco and retired with NFL records for catches, receiving yards and touchdown receptions.",
      answer: "Jerry Rice",
      wrong: ["Randy Moss", "Terrell Owens", "Larry Fitzgerald"],
      explanation: "Jerry Rice finished with 1,549 catches, 22,895 receiving yards and 197 receiving touchdowns over 20 seasons.",
      sources: [wiki("Jerry_Rice")],
    },
    teammates: {
      athletes: ["Dwyane Wade", "Udonis Haslem"],
      answer: "Miami Heat",
      wrong: ["Chicago Bulls", "Cleveland Cavaliers", "Orlando Magic"],
      explanation: "Wade and Haslem won three titles together with the Miami Heat, in 2006, 2012 and 2013. Wade also played for Chicago and Cleveland; Haslem spent his whole NBA career in Miami.",
      sources: [wiki("Miami_Heat")],
    },
    replay: {
      clue: "During the preliminaries at the 1988 Seoul Olympics, an American diver cracks his head on the springboard, gets stitches, and goes on to win gold in both diving events.",
      answer: "Greg Louganis",
      wrong: ["Mark Lenzi", "Bruce Kimball", "Tan Liangde"],
      explanation: "Greg Louganis won springboard and platform gold in Seoul, repeating the double he had won in 1984.",
      sources: [wiki("Greg_Louganis")],
    },
    timeline: {
      events: [
        ["The Denver Nuggets win their first NBA title", 2023],
        ["The Miami Heat win their first NBA title", 2006],
        ["The Toronto Raptors win their first NBA title", 2019],
        ["The Dallas Mavericks win their first NBA title", 2011],
      ],
      sources: [wiki("2006_NBA_Finals"), wiki("2011_NBA_Finals"), wiki("2019_NBA_Finals"), wiki("2023_NBA_Finals")],
    },
    overtime: {
      prompt: "Which country won the 1995 Women's World Cup in Sweden?",
      answer: "Norway",
      wrong: ["Germany", "United States", "China"],
      explanation: "Norway beat Germany 2–0 in the final in Stockholm, after knocking out the defending champion United States in the semifinals.",
      sources: [wiki("1995_FIFA_Women's_World_Cup")],
    },
  }),

  puzzle(35, {
    scout: {
      clue: "Taken first overall in 2005, this Nova Scotia center captained Pittsburgh to three Stanley Cups and scored the 'Golden Goal' in overtime at the 2010 Vancouver Olympics.",
      answer: "Sidney Crosby",
      wrong: ["Nathan MacKinnon", "Connor McDavid", "Evgeni Malkin"],
      explanation: "Sidney Crosby won the Cup in 2009, 2016 and 2017, and his overtime winner against the United States gave Canada gold on home ice.",
      sources: [wiki("Sidney_Crosby")],
    },
    teammates: {
      athletes: ["Ken Griffey Jr.", "Randy Johnson"],
      answer: "Seattle Mariners",
      wrong: ["Cincinnati Reds", "Arizona Diamondbacks", "Houston Astros"],
      explanation: "Griffey and Johnson led the Seattle Mariners to their first playoff berth in 1995. Griffey later played for Cincinnati; Johnson pitched for Houston and won a World Series with Arizona.",
      sources: [wiki("Seattle_Mariners")],
    },
    replay: {
      clue: "In Game 3 of the 2001 ALDS in Oakland, a Yankees shortstop races across the infield, grabs an overthrow near the first-base line and flips it to his catcher to nail Jeremy Giambi at the plate.",
      answer: "Derek Jeter",
      wrong: ["Alfonso Soriano", "Tino Martinez", "Jorge Posada"],
      explanation: "Derek Jeter's flip to Jorge Posada preserved a 1–0 win, and the Yankees came back from two games down to win the series.",
      sources: [wiki("The_Flip")],
    },
    timeline: {
      events: [
        ["Tiger Woods wins the U.S. Open at Pebble Beach by 15 strokes", 2000],
        ["Ben Hogan wins three majors in one year", 1953],
        ["Annika Sörenstam plays in a PGA Tour event", 2003],
        ["Jack Nicklaus wins the Masters at 46", 1986],
      ],
      sources: [wiki("Ben_Hogan"), wiki("1986_Masters_Tournament"), wiki("2000_U.S._Open_(golf)"), wiki("Annika_Sörenstam")],
    },
    overtime: {
      prompt: "Who won the Ballon d'Or three years running, from 1983 to 1985?",
      answer: "Michel Platini",
      wrong: ["Marco van Basten", "Johan Cruyff", "Karl-Heinz Rummenigge"],
      explanation: "Michel Platini won all three while playing for Juventus. Cruyff and van Basten also won three Ballons d'Or, but not in consecutive years.",
      sources: [wiki("Michel_Platini")],
    },
  }),

  puzzle(36, {
    scout: {
      clue: "A baseliner from Fort Lauderdale with a two-handed backhand, she won 18 Grand Slam singles titles, including a women's-record seven at the French Open.",
      answer: "Chris Evert",
      wrong: ["Tracy Austin", "Evonne Goolagong", "Pam Shriver"],
      explanation: "Chris Evert won 18 Grand Slam singles titles, seven of them at Roland Garros, and fought a long rivalry with Martina Navratilova.",
      sources: [wiki("Chris_Evert")],
    },
    teammates: {
      athletes: ["Larry Fitzgerald", "Kurt Warner"],
      answer: "Arizona Cardinals",
      wrong: ["St. Louis Rams", "New York Giants", "Minnesota Vikings"],
      explanation: "Fitzgerald and Warner took the Arizona Cardinals to Super Bowl XLIII. Warner had won a Super Bowl with the St. Louis Rams and also played for the Giants; Fitzgerald played only for Arizona.",
      sources: [wiki("Arizona_Cardinals")],
    },
    replay: {
      clue: "In Tokyo in February 1990, a 42-to-1 underdog gets up off the canvas in the eighth round and knocks out the undefeated heavyweight champion, Mike Tyson, in the 10th.",
      answer: "Buster Douglas",
      wrong: ["Evander Holyfield", "Michael Spinks", "Tony Tucker"],
      explanation: "Buster Douglas's win is one of the biggest upsets in boxing history. He lost the titles to Evander Holyfield eight months later.",
      sources: [wiki("Mike_Tyson_vs._Buster_Douglas")],
    },
    timeline: {
      events: [
        ["Chris Froome wins his first Tour de France", 2013],
        ["Greg LeMond wins the Tour de France by eight seconds", 1989],
        ["Eddy Merckx wins his first Tour de France", 1969],
        ["Miguel Induráin wins his first Tour de France", 1991],
      ],
      sources: [wiki("Eddy_Merckx"), wiki("1989_Tour_de_France"), wiki("Miguel_Induráin"), wiki("Chris_Froome")],
    },
    overtime: {
      prompt: "Which team won the first modern World Series, in 1903?",
      answer: "Boston Americans",
      wrong: ["Pittsburgh Pirates", "Chicago Cubs", "New York Giants"],
      explanation: "The Boston Americans, later renamed the Red Sox, beat the Pittsburgh Pirates five games to three.",
      sources: [wiki("1903_World_Series")],
    },
  }),

  puzzle(37, {
    scout: {
      clue: "A Puerto Rican right fielder who spent 18 seasons with Pittsburgh, he got his 3,000th hit in his final regular-season game and died in a 1972 plane crash while delivering earthquake aid to Nicaragua.",
      answer: "Roberto Clemente",
      wrong: ["Orlando Cepeda", "Roberto Alomar", "Bernie Williams"],
      explanation: "Roberto Clemente was elected to the Hall of Fame in 1973 after the usual waiting period was waived. MLB's annual award for community service bears his name.",
      sources: [wiki("Roberto_Clemente")],
    },
    teammates: {
      athletes: ["Ray Lewis", "Ed Reed"],
      answer: "Baltimore Ravens",
      wrong: ["Houston Texans", "New York Jets", "Cleveland Browns"],
      explanation: "Lewis and Reed anchored the Baltimore Ravens' defense and won Super Bowl XLVII together. Reed finished his career with Houston and the Jets; Lewis played only for Baltimore.",
      sources: [wiki("Baltimore_Ravens")],
    },
    replay: {
      clue: "In the Greco-Roman super-heavyweight final at the 2000 Sydney Olympics, a Wyoming dairy farmer's son beats a Russian three-time champion who hadn't lost an international match in 13 years.",
      answer: "Rulon Gardner",
      wrong: ["Jeff Blatnick", "Brandon Slay", "Kurt Angle"],
      explanation: "Rulon Gardner beat Aleksandr Karelin 1–0, ending his bid for a fourth straight Olympic gold.",
      sources: [wiki("Rulon_Gardner")],
    },
    timeline: {
      events: [
        ["Chelsea win their first Champions League", 2012],
        ["Ajax win the first of three straight European Cups", 1971],
        ["Manchester United win the treble", 1999],
        ["Nottingham Forest win the European Cup", 1979],
      ],
      sources: [wiki("1971_European_Cup_final"), wiki("1979_European_Cup_final"), wiki("1999_UEFA_Champions_League_final"), wiki("2012_UEFA_Champions_League_final")],
    },
    overtime: {
      prompt: "Who was the first driver to win the Indianapolis 500 four times?",
      answer: "A. J. Foyt",
      wrong: ["Al Unser", "Rick Mears", "Hélio Castroneves"],
      explanation: "A. J. Foyt won his fourth Indy 500 in 1977. Al Unser, Rick Mears and Hélio Castroneves have since matched him.",
      sources: [wiki("A._J._Foyt")],
    },
  }),

  puzzle(38, {
    scout: {
      clue: "Nicknamed 'Sweetness', this Jackson State running back spent 13 seasons with Chicago and retired in 1987 as the NFL's career rushing leader.",
      answer: "Walter Payton",
      wrong: ["Gale Sayers", "Tony Dorsett", "Eric Dickerson"],
      explanation: "Walter Payton ran for 16,726 yards, the record until Emmitt Smith passed him in 2002. The NFL's Man of the Year award is named after him.",
      sources: [wiki("Walter_Payton")],
    },
    teammates: {
      athletes: ["Clayton Kershaw", "Mookie Betts"],
      answer: "Los Angeles Dodgers",
      wrong: ["Boston Red Sox", "Texas Rangers", "San Diego Padres"],
      explanation: "Kershaw and Betts won the 2020 and 2024 World Series together with the Los Angeles Dodgers. Betts came from Boston; Kershaw has spent his whole career with the Dodgers.",
      sources: [wiki("Los_Angeles_Dodgers")],
    },
    replay: {
      clue: "In the 1988 Seoul Olympic 100-meter final, a Canadian sprinter raises a finger as he crosses the line in world-record time, then is stripped of the gold three days later after a positive drug test.",
      answer: "Ben Johnson",
      wrong: ["Linford Christie", "Calvin Smith", "Donovan Bailey"],
      explanation: "Ben Johnson ran 9.79 seconds but tested positive for stanozolol, and the gold went to Carl Lewis.",
      sources: [wiki("Ben_Johnson_(sprinter)")],
    },
    timeline: {
      events: [
        ["The 'Original Six' era begins", 1942],
        ["Bobby Hull jumps to the WHA", 1972],
        ["The NHL is founded", 1917],
        ["The Flyers' 'Broad Street Bullies' win their first Stanley Cup", 1974],
      ],
      sources: [wiki("National_Hockey_League"), wiki("Original_Six"), wiki("Bobby_Hull"), wiki("1974_Stanley_Cup_Final")],
    },
    overtime: {
      prompt: "Which country won the 2019 Rugby World Cup in Japan?",
      answer: "South Africa",
      wrong: ["England", "New Zealand", "Wales"],
      explanation: "South Africa beat England 32–12 in Yokohama for their third title, and won a fourth in 2023.",
      sources: [wiki("2019_Rugby_World_Cup")],
    },
  }),

  puzzle(39, {
    scout: {
      clue: "Known for her long painted nails and one-legged running suits, she set world records in the 100 and 200 meters in 1988 that still stand.",
      answer: "Florence Griffith Joyner",
      wrong: ["Jackie Joyner-Kersee", "Marion Jones", "Gail Devers"],
      explanation: "Florence Griffith Joyner ran 10.49 at the U.S. trials and 21.34 at the Seoul Olympics, where she won three golds.",
      sources: [wiki("Florence_Griffith_Joyner")],
    },
    teammates: {
      athletes: ["Patrick Mahomes", "Travis Kelce"],
      answer: "Kansas City Chiefs",
      wrong: ["Philadelphia Eagles", "Denver Broncos", "Las Vegas Raiders"],
      explanation: "Mahomes and Kelce won three Super Bowls together with the Kansas City Chiefs, and both have played their entire NFL careers there.",
      sources: [wiki("Kansas_City_Chiefs")],
    },
    replay: {
      clue: "Deep into stoppage time on the last day of the 2011–12 season, a Manchester City striker scores against QPR to snatch the Premier League title from Manchester United on goal difference.",
      answer: "Sergio Agüero",
      wrong: ["Edin Džeko", "David Silva", "Carlos Tevez"],
      explanation: "Sergio Agüero's goal, timed at 93:20, gave City a 3–2 win and their first league title in 44 years.",
      sources: [wiki("2011–12_Manchester_City_F.C._season")],
    },
    timeline: {
      events: [
        ["The first NCAA men's basketball tournament", 1939],
        ["The first Heisman Trophy is awarded", 1935],
        ["The first college football game, Rutgers vs. Princeton", 1869],
        ["The first Rose Bowl game", 1902],
      ],
      sources: [wiki("1869_Rutgers_vs._Princeton_football_game"), wiki("1902_Rose_Bowl"), wiki("Heisman_Trophy"), wiki("1939_NCAA_basketball_tournament")],
    },
    overtime: {
      prompt: "Which country has won the most Olympic gold medals in men's field hockey?",
      answer: "India",
      wrong: ["Pakistan", "Netherlands", "Germany"],
      explanation: "India has won eight men's hockey golds, including six in a row from 1928 to 1956.",
      sources: [wiki("Field_hockey_at_the_Summer_Olympics")],
    },
  }),

  puzzle(40, {
    scout: {
      clue: "Nicknamed 'Mr. Hockey', this Saskatchewan-born right winger played 25 seasons for Detroit, then returned at 51 to play a final NHL season for Hartford alongside two of his sons.",
      answer: "Gordie Howe",
      wrong: ["Maurice Richard", "Bobby Hull", "Ted Lindsay"],
      explanation: "Gordie Howe played professionally in five decades and retired in 1980 with 801 NHL goals, the record until Wayne Gretzky passed it.",
      sources: [wiki("Gordie_Howe")],
    },
    teammates: {
      athletes: ["Kylian Mbappé", "Neymar"],
      answer: "Paris Saint-Germain",
      wrong: ["Barcelona", "Monaco", "Real Madrid"],
      explanation: "Mbappé and Neymar won several French titles together at Paris Saint-Germain. Neymar came from Barcelona; Mbappé came from Monaco and later joined Real Madrid.",
      sources: [wiki("Paris_Saint-Germain_F.C.")],
    },
    replay: {
      clue: "Six years after falling twice at Calgary in the week his sister died, an American speed skater finally wins Olympic gold in his last race, the 1,000 meters at Lillehammer, and takes his victory lap carrying his baby daughter.",
      answer: "Dan Jansen",
      wrong: ["Eric Heiden", "Chad Hedrick", "Shani Davis"],
      explanation: "Dan Jansen set a world record in the 1994 Olympic 1,000 meters and named his daughter, Jane, after his late sister.",
      sources: [wiki("Dan_Jansen")],
    },
    timeline: {
      events: [
        ["Niki Lauda's near-fatal crash at the Nürburgring", 1976],
        ["Sebastian Vettel wins his first F1 title", 2010],
        ["The first Formula One World Championship season", 1950],
        ["Jackie Stewart wins his third F1 title", 1973],
      ],
      sources: [wiki("1950_Formula_One_season"), wiki("Jackie_Stewart"), wiki("Niki_Lauda"), wiki("Sebastian_Vettel")],
    },
    overtime: {
      prompt: "Who holds the record for most goals at a single World Cup, with 13 in 1958?",
      answer: "Just Fontaine",
      wrong: ["Miroslav Klose", "Gerd Müller", "Sándor Kocsis"],
      explanation: "Just Fontaine scored 13 goals for France in Sweden in 1958. Sándor Kocsis is next with 11, in 1954.",
      sources: [wiki("Just_Fontaine")],
    },
  }),
];
