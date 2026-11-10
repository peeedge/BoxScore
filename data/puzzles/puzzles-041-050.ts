import { puzzle, wiki } from "./builders";

export const PUZZLES_041_050 = [
  puzzle(41, {
    scout: {
      clue: "A 6-foot-9 point guard from Michigan State, he was Finals MVP as an NBA rookie in 1980 after starting at center in the clinching game for an injured Kareem Abdul-Jabbar.",
      answer: "Magic Johnson",
      wrong: ["Isiah Thomas", "Oscar Robertson", "Jason Kidd"],
      explanation: "Magic Johnson scored 42 points with 15 rebounds in Game 6 against Philadelphia and went on to win five titles with the Lakers.",
      sources: [wiki("Magic_Johnson"), wiki("1980_NBA_Finals")],
    },
    teammates: {
      athletes: ["Tom Brady", "Tedy Bruschi"],
      answer: "New England Patriots",
      wrong: ["Tampa Bay Buccaneers", "Miami Dolphins", "Buffalo Bills"],
      explanation: "Brady and Bruschi won three Super Bowls together with the New England Patriots. Brady later won another with Tampa Bay; Bruschi played his whole career in New England.",
      sources: [wiki("New_England_Patriots")],
    },
    replay: {
      clue: "Trailing Oakland with seconds left in a 1972 playoff game, a Terry Bradshaw pass caroms off a defender, and a Pittsburgh rookie scoops it up just above the turf and runs it in for the winning touchdown.",
      answer: "Franco Harris",
      wrong: ["Frenchy Fuqua", "Lynn Swann", "Rocky Bleier"],
      explanation: "Franco Harris's 'Immaculate Reception' gave the Steelers a 13–7 win, the franchise's first playoff victory.",
      sources: [wiki("Immaculate_Reception")],
    },
    timeline: {
      events: [
        ["France wins its first World Cup", 1998],
        ["West Germany wins the 'Miracle of Bern'", 1954],
        ["Spain wins its first World Cup", 2010],
        ["Italy wins the World Cup in Spain", 1982],
      ],
      sources: [wiki("1954_FIFA_World_Cup_final"), wiki("1982_FIFA_World_Cup_final"), wiki("1998_FIFA_World_Cup_final"), wiki("2010_FIFA_World_Cup_final")],
    },
    overtime: {
      prompt: "Which school has won the most NCAA Division I men's basketball titles?",
      answer: "UCLA",
      wrong: ["Kentucky", "North Carolina", "Duke"],
      explanation: "UCLA has won 11 titles, 10 of them under John Wooden between 1964 and 1975. Kentucky is next with eight.",
      sources: [wiki("NCAA_Division_I_men's_basketball_tournament")],
    },
  }),

  puzzle(42, {
    scout: {
      clue: "Named after Jacqueline Kennedy, this UCLA basketball and track star won Olympic heptathlon gold in 1988 and 1992 and still holds the event's world record.",
      answer: "Jackie Joyner-Kersee",
      wrong: ["Jessica Ennis-Hill", "Gail Devers", "Nafissatou Thiam"],
      explanation: "Jackie Joyner-Kersee scored 7,291 points at the 1988 Seoul Olympics, a world record that still stands, and also won the long jump there.",
      sources: [wiki("Jackie_Joyner-Kersee")],
    },
    teammates: {
      athletes: ["Russell Wilson", "Marshawn Lynch"],
      answer: "Seattle Seahawks",
      wrong: ["Buffalo Bills", "Denver Broncos", "Oakland Raiders"],
      explanation: "Wilson and Lynch won Super Bowl XLVIII together with the Seattle Seahawks. Lynch also played for Buffalo and Oakland; Wilson was traded to Denver in 2022.",
      sources: [wiki("Seattle_Seahawks")],
    },
    replay: {
      clue: "With Miami three points down and seconds from losing the 2013 NBA Finals in Game 6, Chris Bosh grabs an offensive rebound and kicks it to a veteran backpedaling into the right corner for the tying three.",
      answer: "Ray Allen",
      wrong: ["Mike Miller", "Shane Battier", "Mario Chalmers"],
      explanation: "Ray Allen's three with 5.2 seconds left forced overtime, and the Heat beat San Antonio in Game 6 and again in Game 7.",
      sources: [wiki("Ray_Allen"), wiki("2013_NBA_Finals")],
    },
    timeline: {
      events: [
        ["Dodger Stadium opens", 1962],
        ["Wrigley Field hosts its first night game", 1988],
        ["Fenway Park opens", 1912],
        ["Yankee Stadium opens", 1923],
      ],
      sources: [wiki("Fenway_Park"), wiki("Yankee_Stadium_(1923)"), wiki("Dodger_Stadium"), wiki("Wrigley_Field")],
    },
    overtime: {
      prompt: "Which goaltender holds the NHL records for career wins and career shutouts?",
      answer: "Martin Brodeur",
      wrong: ["Patrick Roy", "Terry Sawchuk", "Dominik Hašek"],
      explanation: "Martin Brodeur won 691 games and recorded 125 shutouts, almost all of them for the New Jersey Devils.",
      sources: [wiki("Martin_Brodeur")],
    },
  }),

  puzzle(43, {
    scout: {
      clue: "A defenseman from Parry Sound, Ontario, he is the only player at his position to lead the NHL in scoring, winning the Art Ross Trophy twice with Boston.",
      answer: "Bobby Orr",
      wrong: ["Paul Coffey", "Ray Bourque", "Denis Potvin"],
      explanation: "Bobby Orr won the scoring title in 1969–70 and 1974–75, won eight straight Norris Trophies and led the Bruins to two Stanley Cups.",
      sources: [wiki("Bobby_Orr")],
    },
    teammates: {
      athletes: ["Isiah Thomas", "Joe Dumars"],
      answer: "Detroit Pistons",
      wrong: ["Indiana Pacers", "Chicago Bulls", "New York Knicks"],
      explanation: "Thomas and Dumars led the 'Bad Boys' Detroit Pistons to back-to-back titles in 1989 and 1990, and both played their entire careers in Detroit.",
      sources: [wiki("Detroit_Pistons")],
    },
    replay: {
      clue: "With Seattle on the New England 1-yard line and 26 seconds left in Super Bowl XLIX, an undrafted rookie cornerback jumps a slant route and intercepts Russell Wilson.",
      answer: "Malcolm Butler",
      wrong: ["Darrelle Revis", "Brandon Browner", "Devin McCourty"],
      explanation: "Malcolm Butler's goal-line interception sealed a 28–24 win for the Patriots.",
      sources: [wiki("Malcolm_Butler"), wiki("Super_Bowl_XLIX")],
    },
    timeline: {
      events: [
        ["The Saints win their first Super Bowl", 2010],
        ["The Bears win their only Super Bowl", 1986],
        ["The Jets win Super Bowl III", 1969],
        ["The Buccaneers win their first Super Bowl", 2003],
      ],
      sources: [wiki("Super_Bowl_III"), wiki("Super_Bowl_XX"), wiki("Super_Bowl_XXXVII"), wiki("Super_Bowl_XLIV")],
    },
    overtime: {
      prompt: "Which pitcher holds MLB's career record with 511 wins?",
      answer: "Cy Young",
      wrong: ["Walter Johnson", "Christy Mathewson", "Grover Cleveland Alexander"],
      explanation: "Cy Young won 511 games between 1890 and 1911. Walter Johnson is second with 417, and the annual pitching award is named for Young.",
      sources: [wiki("Cy_Young")],
    },
  }),

  puzzle(44, {
    scout: {
      clue: "Also an All-American lacrosse player at Syracuse, this Cleveland fullback led the NFL in rushing in eight of his nine seasons, then retired in 1966 to act in films.",
      answer: "Jim Brown",
      wrong: ["Gale Sayers", "Marion Motley", "Earl Campbell"],
      explanation: "Jim Brown ran for 12,312 yards and won the 1964 NFL Championship with the Browns.",
      sources: [wiki("Jim_Brown")],
    },
    teammates: {
      athletes: ["Patrick Kane", "Jonathan Toews"],
      answer: "Chicago Blackhawks",
      wrong: ["New York Rangers", "Detroit Red Wings", "Buffalo Sabres"],
      explanation: "Kane and Toews won three Stanley Cups together with the Chicago Blackhawks, in 2010, 2013 and 2015. Kane later played for the Rangers and Red Wings.",
      sources: [wiki("Chicago_Blackhawks")],
    },
    replay: {
      clue: "In the 1966 World Cup final at Wembley, an England striker who only got into the team after an injury scores a hat-trick, including a disputed shot off the crossbar in extra time.",
      answer: "Geoff Hurst",
      wrong: ["Bobby Charlton", "Martin Peters", "Roger Hunt"],
      explanation: "Geoff Hurst's three goals beat West Germany 4–2. His was the only hat-trick in a men's World Cup final until Kylian Mbappé's in 2022.",
      sources: [wiki("Geoff_Hurst"), wiki("1966_FIFA_World_Cup_final")],
    },
    timeline: {
      events: [
        ["Vancouver hosts the Winter Olympics", 2010],
        ["Lillehammer hosts the Winter Olympics", 1994],
        ["Lake Placid hosts the Winter Olympics for the second time", 1980],
        ["Salt Lake City hosts the Winter Olympics", 2002],
      ],
      sources: [wiki("1980_Winter_Olympics"), wiki("1994_Winter_Olympics"), wiki("2002_Winter_Olympics"), wiki("2010_Winter_Olympics")],
    },
    overtime: {
      prompt: "Who holds MLB's career home run record, with 762?",
      answer: "Barry Bonds",
      wrong: ["Hank Aaron", "Babe Ruth", "Albert Pujols"],
      explanation: "Barry Bonds passed Hank Aaron's 755 in August 2007 and retired with 762.",
      sources: [wiki("Barry_Bonds")],
    },
  }),

  puzzle(45, {
    scout: {
      clue: "Sporting a famous mustache, this American swimmer won seven gold medals at the 1972 Munich Olympics, every one of them in world-record time.",
      answer: "Mark Spitz",
      wrong: ["Matt Biondi", "Don Schollander", "Ian Thorpe"],
      explanation: "Mark Spitz's seven golds at a single Games stood as the record until Michael Phelps won eight in 2008.",
      sources: [wiki("Mark_Spitz")],
    },
    teammates: {
      athletes: ["Yadier Molina", "Adam Wainwright"],
      answer: "St. Louis Cardinals",
      wrong: ["Chicago Cubs", "Kansas City Royals", "Milwaukee Brewers"],
      explanation: "Molina and Wainwright spent their whole major league careers with the St. Louis Cardinals, and their 328 starts as a battery are the most by any pitcher and catcher.",
      sources: [wiki("St._Louis_Cardinals")],
    },
    replay: {
      clue: "In the final seconds of the 1983 NCAA final, a desperation shot from Dereck Whittenburg falls short, and a North Carolina State forward catches it and dunks to beat Houston at the buzzer.",
      answer: "Lorenzo Charles",
      wrong: ["Dereck Whittenburg", "Thurl Bailey", "Sidney Lowe"],
      explanation: "Lorenzo Charles's dunk gave NC State a 54–52 win and sent coach Jim Valvano running around the court looking for someone to hug.",
      sources: [wiki("Lorenzo_Charles"), wiki("1983_NCAA_Division_I_men's_basketball_championship_game")],
    },
    timeline: {
      events: [
        ["Floyd Mayweather fights Manny Pacquiao", 2015],
        ["Jack Johnson becomes the first Black heavyweight champion", 1908],
        ["The 'Thrilla in Manila'", 1975],
        ["Joe Louis knocks out Max Schmeling in their rematch", 1938],
      ],
      sources: [wiki("Jack_Johnson_(boxer)"), wiki("Joe_Louis_vs._Max_Schmeling_II"), wiki("Thrilla_in_Manila"), wiki("Floyd_Mayweather_Jr._vs._Manny_Pacquiao")],
    },
    overtime: {
      prompt: "Which player won a women's-record 24 Grand Slam singles titles?",
      answer: "Margaret Court",
      wrong: ["Serena Williams", "Steffi Graf", "Helen Wills Moody"],
      explanation: "Margaret Court won 24 Grand Slam singles titles, 11 of them at the Australian Championships. Serena Williams is next with 23.",
      sources: [wiki("Margaret_Court")],
    },
  }),

  puzzle(46, {
    scout: {
      clue: "A Brooklyn-born left-hander, he threw four no-hitters for the Dodgers, skipped a 1965 World Series start for Yom Kippur, and retired at 30 because of arthritis in his elbow.",
      answer: "Sandy Koufax",
      wrong: ["Don Drysdale", "Whitey Ford", "Warren Spahn"],
      explanation: "Sandy Koufax won three Cy Young Awards in four years and became the youngest player elected to the Hall of Fame, at 36.",
      sources: [wiki("Sandy_Koufax")],
    },
    teammates: {
      athletes: ["Gianluigi Buffon", "Alessandro Del Piero"],
      answer: "Juventus",
      wrong: ["Parma", "Sydney FC", "Inter Milan"],
      explanation: "Buffon and Del Piero played together at Juventus from 2001 to 2012, staying with the club after its 2006 relegation. Buffon came from Parma; Del Piero later played for Sydney FC.",
      sources: [wiki("Juventus_FC")],
    },
    replay: {
      clue: "In the third overtime of Game 6 of the 1999 Stanley Cup Final in Buffalo, a Dallas sniper jams in a rebound with his skate in the crease, and the goal stands.",
      answer: "Brett Hull",
      wrong: ["Mike Modano", "Joe Nieuwendyk", "Jere Lehtinen"],
      explanation: "Brett Hull's disputed goal won the Dallas Stars their first Stanley Cup.",
      sources: [wiki("Brett_Hull"), wiki("1999_Stanley_Cup_Final")],
    },
    timeline: {
      events: [
        ["The Tokyo Olympics are postponed by a year", 2020],
        ["Jesse Owens wins four golds in Berlin", 1936],
        ["The Soviet Union leads a boycott of the Los Angeles Olympics", 1984],
        ["The United States leads a boycott of the Moscow Olympics", 1980],
      ],
      sources: [wiki("1936_Summer_Olympics"), wiki("1980_Summer_Olympics_boycott"), wiki("1984_Summer_Olympics_boycott"), wiki("2020_Summer_Olympics")],
    },
    overtime: {
      prompt: "Who holds the NFL's official record for career sacks, with 200?",
      answer: "Bruce Smith",
      wrong: ["Reggie White", "Kevin Greene", "Julius Peppers"],
      explanation: "Bruce Smith passed Reggie White's 198 in 2003, playing for Washington after 15 seasons in Buffalo.",
      sources: [wiki("Bruce_Smith")],
    },
  }),

  puzzle(47, {
    scout: {
      clue: "A forward from Rochester, New York, who scored many of her goals with her head, she retired in 2015 as the all-time leading scorer in international soccer.",
      answer: "Abby Wambach",
      wrong: ["Christine Sinclair", "Michelle Akers", "Alex Morgan"],
      explanation: "Abby Wambach scored 184 goals for the United States and won the 2015 World Cup in her final tournament. Christine Sinclair passed her total in 2020.",
      sources: [wiki("Abby_Wambach")],
    },
    teammates: {
      athletes: ["Julius Erving", "Moses Malone"],
      answer: "Philadelphia 76ers",
      wrong: ["Houston Rockets", "New York Nets", "Atlanta Hawks"],
      explanation: "Erving and Malone won the 1983 title together with the Philadelphia 76ers. Erving had starred for the ABA's New York Nets; Malone came from Houston and later played for Atlanta.",
      sources: [wiki("Philadelphia_76ers")],
    },
    replay: {
      clue: "Leading off the bottom of the 11th in Game 7 of the 2003 ALCS, a Yankees third baseman acquired at midseason homers off Tim Wakefield to beat Boston.",
      answer: "Aaron Boone",
      wrong: ["Alfonso Soriano", "Jason Giambi", "Bernie Williams"],
      explanation: "Aaron Boone's home run sent the Yankees to the World Series. He later became their manager.",
      sources: [wiki("Aaron_Boone"), wiki("2003_American_League_Championship_Series")],
    },
    timeline: {
      events: [
        ["Max Verstappen wins his first F1 title", 2021],
        ["Michael Schumacher wins his first F1 title", 1994],
        ["Lewis Hamilton wins his first F1 title", 2008],
        ["Ayrton Senna wins his first F1 title", 1988],
      ],
      sources: [wiki("1988_Formula_One_World_Championship"), wiki("1994_Formula_One_World_Championship"), wiki("2008_Formula_One_World_Championship"), wiki("2021_Formula_One_World_Championship")],
    },
    overtime: {
      prompt: "Which driver holds the NASCAR Cup Series record with 200 career wins?",
      answer: "Richard Petty",
      wrong: ["David Pearson", "Jeff Gordon", "Darrell Waltrip"],
      explanation: "Richard Petty won 200 Cup races and seven championships. David Pearson is second with 105 wins.",
      sources: [wiki("Richard_Petty")],
    },
  }),

  puzzle(48, {
    scout: {
      clue: "Nicknamed 'The Hick from French Lick', this Indiana State forward won three straight NBA MVP awards, from 1984 to 1986.",
      answer: "Larry Bird",
      wrong: ["Dominique Wilkins", "Bernard King", "Adrian Dantley"],
      explanation: "Larry Bird won three titles with the Boston Celtics and later coached and ran the Indiana Pacers.",
      sources: [wiki("Larry_Bird")],
    },
    teammates: {
      athletes: ["Connor McDavid", "Leon Draisaitl"],
      answer: "Edmonton Oilers",
      wrong: ["Calgary Flames", "Toronto Maple Leafs", "Vancouver Canucks"],
      explanation: "McDavid and Draisaitl have played together for the Edmonton Oilers since 2015 and reached the Stanley Cup Final in 2024 and 2025.",
      sources: [wiki("Edmonton_Oilers")],
    },
    replay: {
      clue: "On a kickoff return in the final seconds of a January 2000 playoff game against Buffalo, a Tennessee receiver takes a lateral from Frank Wycheck and races 75 yards down the sideline to score.",
      answer: "Kevin Dyson",
      wrong: ["Frank Wycheck", "Lorenzo Neal", "Derrick Mason"],
      explanation: "Kevin Dyson's touchdown, the 'Music City Miracle', gave the Titans a 22–16 win.",
      sources: [wiki("Music_City_Miracle")],
    },
    timeline: {
      events: [
        ["Tiger Woods wins his first Masters", 1997],
        ["Gene Sarazen makes a double eagle at the Masters", 1935],
        ["Seve Ballesteros wins his first Open Championship", 1979],
        ["Bobby Jones wins golf's Grand Slam", 1930],
      ],
      sources: [wiki("Bobby_Jones_(golfer)"), wiki("Gene_Sarazen"), wiki("Seve_Ballesteros"), wiki("1997_Masters_Tournament")],
    },
    overtime: {
      prompt: "Which country won the 2023 Women's World Cup, held in Australia and New Zealand?",
      answer: "Spain",
      wrong: ["England", "Sweden", "Australia"],
      explanation: "Spain beat England 1–0 in the final in Sydney for their first Women's World Cup title.",
      sources: [wiki("2023_FIFA_Women's_World_Cup")],
    },
  }),

  puzzle(49, {
    scout: {
      clue: "A Minnesota-born skier, she won downhill gold at Vancouver in 2010, retired in 2019 with a then-women's record 82 World Cup wins, and returned to racing in 2024.",
      answer: "Lindsey Vonn",
      wrong: ["Picabo Street", "Julia Mancuso", "Anja Pärson"],
      explanation: "Lindsey Vonn was the first American woman to win Olympic downhill gold. Mikaela Shiffrin later passed her total of World Cup wins.",
      sources: [wiki("Lindsey_Vonn")],
    },
    teammates: {
      athletes: ["Paolo Maldini", "Franco Baresi"],
      answer: "AC Milan",
      wrong: ["Inter Milan", "Juventus", "Roma"],
      explanation: "Maldini and Baresi anchored the AC Milan defense that won the European Cup in 1989, 1990 and 1994, and both played their whole careers there.",
      sources: [wiki("AC_Milan")],
    },
    replay: {
      clue: "Down to his last strike in the ninth inning of Game 6 of the 2011 World Series, a St. Louis native triples off the right-field wall to tie it, then wins it with a homer in the 11th.",
      answer: "David Freese",
      wrong: ["Lance Berkman", "Albert Pujols", "Allen Craig"],
      explanation: "David Freese's heroics forced Game 7 against Texas, which the Cardinals won, and he was named World Series MVP.",
      sources: [wiki("David_Freese"), wiki("2011_World_Series")],
    },
    timeline: {
      events: [
        ["Magic Johnson announces he is HIV-positive", 1991],
        ["The NBA adopts the three-point line", 1979],
        ["Wilt Chamberlain scores 100 points in a game", 1962],
        ["The NBA and ABA merge", 1976],
      ],
      sources: [wiki("Wilt_Chamberlain's_100-point_game"), wiki("ABA–NBA_merger"), wiki("Three-point_field_goal"), wiki("Magic_Johnson")],
    },
    overtime: {
      prompt: "Which team won the first championship of the league now known as the NBA, in 1947?",
      answer: "Philadelphia Warriors",
      wrong: ["Chicago Stags", "Boston Celtics", "Minneapolis Lakers"],
      explanation: "The Philadelphia Warriors beat the Chicago Stags four games to one in the first BAA Finals. The franchise is now the Golden State Warriors.",
      sources: [wiki("1947_BAA_Finals")],
    },
  }),

  puzzle(50, {
    scout: {
      clue: "Cut by Pittsburgh and playing semipro football for $6 a game, this quarterback was signed by Baltimore and led the Colts to the 1958 NFL title in the 'Greatest Game Ever Played'.",
      answer: "Johnny Unitas",
      wrong: ["Bart Starr", "Y. A. Tittle", "Otto Graham"],
      explanation: "Johnny Unitas also threw touchdown passes in 47 straight games, a record that stood until Drew Brees broke it in 2012.",
      sources: [wiki("Johnny_Unitas")],
    },
    teammates: {
      athletes: ["Patrick Ewing", "John Starks"],
      answer: "New York Knicks",
      wrong: ["Orlando Magic", "Golden State Warriors", "Seattle SuperSonics"],
      explanation: "Ewing and Starks took the New York Knicks to the 1994 Finals. Ewing finished his career with Seattle and Orlando; Starks also played for Golden State.",
      sources: [wiki("New_York_Knicks")],
    },
    replay: {
      clue: "Running barefoot through the streets of Rome at night, an Ethiopian imperial guardsman wins the 1960 Olympic marathon.",
      answer: "Abebe Bikila",
      wrong: ["Mamo Wolde", "Kip Keino", "Miruts Yifter"],
      explanation: "Abebe Bikila became the first Black African Olympic champion, and won the marathon again in Tokyo in 1964, this time in shoes.",
      sources: [wiki("Abebe_Bikila")],
    },
    timeline: {
      events: [
        ["Justify wins the Triple Crown unbeaten", 2018],
        ["Affirmed wins the Triple Crown", 1978],
        ["American Pharoah ends a 37-year Triple Crown drought", 2015],
        ["Citation wins the Triple Crown", 1948],
      ],
      sources: [wiki("Citation_(horse)"), wiki("Affirmed"), wiki("American_Pharoah"), wiki("Justify_(horse)")],
    },
    overtime: {
      prompt: "Who became Formula One's youngest world champion, at 23, in 2010?",
      answer: "Sebastian Vettel",
      wrong: ["Lewis Hamilton", "Max Verstappen", "Fernando Alonso"],
      explanation: "Sebastian Vettel won the 2010 title with Red Bull in the final race and went on to win four in a row. Lewis Hamilton had been the youngest champion, in 2008.",
      sources: [wiki("Sebastian_Vettel")],
    },
  }),
];
