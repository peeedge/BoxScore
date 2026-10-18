import { puzzle, wiki } from "./builders";

export const PUZZLES_011_020 = [
  puzzle(11, {
    scout: {
      clue: "Acquired from the Rams in 1958, this quarterback was named NFL MVP in 1960, beat Lombardi's Packers for the title, then retired to become the expansion Minnesota Vikings' first head coach.",
      answer: "Norm Van Brocklin",
      wrong: ["Sonny Jurgensen", "King Hill", "Bobby Thomason"],
      explanation: "Norm Van Brocklin, 'the Dutchman', still holds the NFL single-game passing record of 554 yards, set with the Rams in 1951.",
      sources: [wiki("Norm_Van_Brocklin")],
    },
    teammates: {
      athletes: ["Brian Dawkins", "Jeremiah Trotter Jr."],
      shared: "college",
      answer: "Clemson",
      wrong: ["Florida State", "South Carolina", "Georgia Tech"],
      explanation: "Dawkins starred at Clemson before the Eagles drafted him in 1996. Trotter Jr., son of Eagles linebacker Jeremiah Trotter, came out of Clemson as a 2024 fifth-round pick.",
      sources: [wiki("Brian_Dawkins"), wiki("Jeremiah_Trotter_Jr.")],
    },
    replay: {
      clue: "Dressed in a sequined Mummers costume on the steps of the Art Museum at the February 2018 Super Bowl parade, a center delivers a profane, rousing speech about a team full of underdogs.",
      answer: "Jason Kelce",
      wrong: ["Lane Johnson", "Brandon Brooks", "Chris Long"],
      explanation: "Jason Kelce's speech ended with the chant 'No one likes us, we don't care!' and became one of the defining moments of the title celebration.",
      sources: [wiki("Jason_Kelce")],
    },
    timeline: {
      events: [
        ["Jalen Hurts is drafted", 2020],
        ["Jake Elliott's 61-yard field goal beats the Giants", 2017],
        ["Carson Wentz is drafted second overall", 2016],
        ["The 'Double Doink' playoff win in Chicago", 2019],
      ],
      sources: [wiki("Carson_Wentz"), wiki("Jake_Elliott"), wiki("Double_Doink"), wiki("Jalen_Hurts")],
    },
    overtime: {
      prompt: "Where did the Eagles win the 1960 NFL Championship Game?",
      answer: "Franklin Field",
      wrong: ["Connie Mack Stadium", "Veterans Stadium", "Municipal Stadium"],
      explanation: "Franklin Field, the University of Pennsylvania's stadium, was the Eagles' home from 1958 through 1970.",
      sources: [wiki("Franklin_Field"), wiki("1960_NFL_Championship_Game")],
    },
  }),

  puzzle(12, {
    scout: {
      clue: "A Penn State star who spent six seasons with the Giants, he signed with the Eagles in 2024, ran for 2,005 yards in the regular season, and added a record-setting playoff run on the way to a Super Bowl title.",
      answer: "Saquon Barkley",
      wrong: ["D'Andre Swift", "Miles Sanders", "Kenneth Gainwell"],
      explanation: "Saquon Barkley was named Offensive Player of the Year, and his 2,504 rushing yards including the playoffs broke Terrell Davis's record.",
      sources: [wiki("Saquon_Barkley")],
    },
    teammates: {
      athletes: ["Sonny Jurgensen", "Jeremiah Trotter"],
      shared: "team",
      answer: "Washington",
      wrong: ["Dallas Cowboys", "New York Giants", "Pittsburgh Steelers"],
      explanation: "Jurgensen was traded to Washington in 1964 and played 11 seasons there. Trotter left for Washington in 2002, then returned to the Eagles two years later.",
      sources: [wiki("Sonny_Jurgensen"), wiki("Jeremiah_Trotter")],
    },
    replay: {
      clue: "Hit low by Giants linebacker Carl Banks on a Monday night in 1988, an Eagles quarterback puts a hand on the turf to keep from going down, then throws a touchdown pass to Jimmie Giles.",
      answer: "Randall Cunningham",
      wrong: ["Matt Cavanaugh", "Ron Jaworski", "Don McPherson"],
      explanation: "Randall Cunningham's escape at Giants Stadium became the signature highlight of his scrambling style.",
      sources: [wiki("Randall_Cunningham")],
    },
    timeline: {
      events: [
        ["Saquon Barkley signs with the Eagles", 2024],
        ["The Eagles lose Super Bowl LVII to Kansas City", 2023],
        ["Nick Sirianni becomes head coach", 2021],
        ["A.J. Brown arrives in a draft-night trade", 2022],
      ],
      sources: [wiki("Nick_Sirianni"), wiki("A._J._Brown"), wiki("Super_Bowl_LVII"), wiki("Saquon_Barkley")],
    },
    overtime: {
      prompt: "In which city did the Eagles win Super Bowl LIX?",
      answer: "New Orleans",
      wrong: ["Las Vegas", "Miami", "Atlanta"],
      explanation: "Super Bowl LIX was played at the Superdome in New Orleans, where the Eagles had lost Super Bowl XV 44 years earlier.",
      sources: [wiki("Super_Bowl_LIX"), wiki("Super_Bowl_XV")],
    },
  }),

  puzzle(13, {
    scout: {
      clue: "One of the last players to go without a facemask, this 5-foot-9 receiver from Oklahoma starred on the 1960 title team and gave one of the most exuberant speeches in Hall of Fame history in 1998.",
      answer: "Tommy McDonald",
      wrong: ["Pete Retzlaff", "Bobby Walston", "Ben Hawkins"],
      explanation: "Tommy McDonald played seven seasons in Philadelphia before a 1964 trade to Dallas, and entered the Hall of Fame in 1998.",
      sources: [wiki("Tommy_McDonald_(wide_receiver)")],
    },
    teammates: {
      athletes: ["Donovan McNabb", "Brian Westbrook"],
      shared: "coach",
      answer: "Andy Reid",
      wrong: ["Ray Rhodes", "Chip Kelly", "Doug Pederson"],
      explanation: "McNabb and Westbrook spent their whole Eagles careers under Andy Reid, reaching four NFC Championship Games and Super Bowl XXXIX together.",
      sources: [wiki("Andy_Reid")],
    },
    replay: {
      clue: "Backed up at their own 1-yard line in overtime against Atlanta in November 1985, the Eagles throw deep, and a receiver races the rest of the way for a 99-yard winning touchdown.",
      answer: "Mike Quick",
      wrong: ["Kenny Jackson", "John Spagnola", "Herman Hunter"],
      explanation: "Ron Jaworski's pass to Mike Quick tied the NFL record for the longest touchdown play, and it ended the game.",
      sources: [wiki("Mike_Quick")],
    },
    timeline: {
      events: [
        ["Super Bowl LII against New England", 2018],
        ["Super Bowl XV against Oakland", 1981],
        ["Super Bowl LIX against Kansas City", 2025],
        ["Super Bowl XXXIX against New England", 2005],
      ],
      sources: [wiki("Super_Bowl_XV"), wiki("Super_Bowl_XXXIX"), wiki("Super_Bowl_LII"), wiki("Super_Bowl_LIX")],
    },
    overtime: {
      prompt: "Whose Eagles single-season rushing record did Saquon Barkley break with 2,005 yards in 2024?",
      answer: "LeSean McCoy",
      wrong: ["Wilbert Montgomery", "Brian Westbrook", "Ricky Watters"],
      explanation: "LeSean McCoy had set the record with 1,607 yards in 2013, when he led the NFL in rushing.",
      sources: [wiki("LeSean_McCoy"), wiki("Saquon_Barkley")],
    },
  }),

  puzzle(14, {
    scout: {
      clue: "A brash defensive tackle from the University of Miami taken ninth overall in 1987, he made two Pro Bowls before dying in a car crash in his Florida hometown in June 1992.",
      answer: "Jerome Brown",
      wrong: ["Mike Golic", "Andy Harmon", "Mike Pitts"],
      explanation: "Jerome Brown was 27. The Eagles retired his No. 99 and dedicated the 1992 season to him.",
      sources: [wiki("Jerome_Brown")],
    },
    teammates: {
      athletes: ["Brandon Graham", "Jason Avant"],
      shared: "college",
      answer: "Michigan",
      wrong: ["Ohio State", "Michigan State", "Penn State"],
      explanation: "Both played at Michigan: Avant was a receiver there before joining the Eagles in 2006, and Graham was a pass rusher before going 13th overall in 2010.",
      sources: [wiki("Brandon_Graham_(American_football)"), wiki("Jason_Avant")],
    },
    replay: {
      clue: "Picking off a pass at his own goal line against the Jets in October 1993, a cornerback zigzags across the field and through most of the Jets' offense on a 94-yard touchdown return.",
      answer: "Eric Allen",
      wrong: ["Ben Smith", "Wes Hopkins", "Mark McMillian"],
      explanation: "Eric Allen returned four interceptions for touchdowns in 1993, tying the NFL single-season record.",
      sources: [wiki("Eric_Allen")],
    },
    timeline: {
      events: [
        ["Harold Carmichael is drafted", 1971],
        ["Norm Van Brocklin arrives from the Rams", 1958],
        ["Steve Van Buren is drafted", 1944],
        ["Sonny Jurgensen sets an NFL passing-yards record", 1961],
      ],
      sources: [wiki("Steve_Van_Buren"), wiki("Norm_Van_Brocklin"), wiki("Sonny_Jurgensen"), wiki("Harold_Carmichael")],
    },
    overtime: {
      prompt: "In 2018, which Eagle caught 116 passes, at the time the NFL record for a tight end?",
      answer: "Zach Ertz",
      wrong: ["Brent Celek", "Dallas Goedert", "Keith Jackson"],
      explanation: "Zach Ertz broke Jason Witten's mark of 110 catches, set in 2007.",
      sources: [wiki("Zach_Ertz")],
    },
  }),

  puzzle(15, {
    scout: {
      clue: "Taken second overall out of North Dakota State in 2016, this quarterback threw 33 touchdown passes in 2017 before tearing his ACL against the Rams in December.",
      answer: "Carson Wentz",
      wrong: ["Sam Bradford", "Chase Daniel", "Nick Foles"],
      explanation: "Carson Wentz watched from the sideline as Nick Foles won Super Bowl LII, and was traded to the Colts in 2021.",
      sources: [wiki("Carson_Wentz")],
    },
    teammates: {
      athletes: ["Norm Van Brocklin", "Ron Jaworski"],
      shared: "team",
      answer: "Los Angeles Rams",
      wrong: ["Minnesota Vikings", "Kansas City Chiefs", "Miami Dolphins"],
      explanation: "Both quarterbacks came to Philadelphia in trades with the Los Angeles Rams, Van Brocklin in 1958 and Jaworski in 1977. Van Brocklin only coached the Vikings; Jaworski later played for Miami and Kansas City.",
      sources: [wiki("Norm_Van_Brocklin"), wiki("Ron_Jaworski")],
    },
    replay: {
      clue: "Running toward the sideline against Jacksonville in November 2024, a running back spins and leaps backward over a defender without looking, a move instantly dubbed the 'reverse hurdle'.",
      answer: "Saquon Barkley",
      wrong: ["Kenneth Gainwell", "Will Shipley", "Boston Scott"],
      explanation: "Saquon Barkley's backward hurdle over Jarrian Jones was the highlight of the season in which he ran for 2,005 yards.",
      sources: [wiki("Saquon_Barkley")],
    },
    timeline: {
      events: [
        ["Mike Quick's 99-yard overtime touchdown", 1985],
        ["Vince Papale makes the team from an open tryout", 1976],
        ["Wilbert Montgomery's NFC Championship run against Dallas", 1981],
        ["Ron Jaworski arrives in a trade with the Rams", 1977],
      ],
      sources: [wiki("Vince_Papale"), wiki("Ron_Jaworski"), wiki("Wilbert_Montgomery"), wiki("Mike_Quick")],
    },
    overtime: {
      prompt: "Whom did the Eagles take with the first pick of the NFL's first draft, in 1936?",
      answer: "Jay Berwanger",
      wrong: ["Riley Smith", "Bill Shakespeare", "Sam Francis"],
      explanation: "Jay Berwanger, the first Heisman Trophy winner, never played pro football. The Eagles traded his rights to the Bears.",
      sources: [wiki("1936_NFL_draft"), wiki("Jay_Berwanger")],
    },
  }),

  puzzle(16, {
    scout: {
      clue: "Nicknamed 'the Golden Greek', this Indiana end played both ways for the 1948 and 1949 champions and led the NFL in receptions in each of his last three seasons.",
      answer: "Pete Pihos",
      wrong: ["Jack Ferrante", "Bobby Walston", "Neill Armstrong"],
      explanation: "Pete Pihos led the league in catches from 1953 to 1955, then retired. He entered the Hall of Fame in 1970.",
      sources: [wiki("Pete_Pihos")],
    },
    teammates: {
      athletes: ["DeMarco Murray", "Sam Bradford"],
      shared: "coach",
      answer: "Chip Kelly",
      wrong: ["Andy Reid", "Doug Pederson", "Nick Sirianni"],
      explanation: "Chip Kelly brought in Murray and Bradford for 2015, his final season. Both were gone before Doug Pederson coached a game.",
      sources: [wiki("Chip_Kelly"), wiki("2015_Philadelphia_Eagles_season")],
    },
    replay: {
      clue: "A 30-year-old substitute teacher and part-time bartender who never played college football turns a 1976 open tryout into three seasons on the Eagles' special teams.",
      answer: "Vince Papale",
      wrong: ["John Bunting", "Herman Edwards", "Bill Bergey"],
      explanation: "Vince Papale's story became the 2006 film Invincible, with Mark Wahlberg in the lead role.",
      sources: [wiki("Vince_Papale")],
    },
    timeline: {
      events: [
        ["Ricky Watters's 'For who? For what?' debut", 1995],
        ["Eric Allen's 94-yard interception return against the Jets", 1993],
        ["Randall Cunningham's 91-yard punt", 1989],
        ["'Gang Green' finishes first in the NFL in total defense", 1991],
      ],
      sources: [wiki("Randall_Cunningham"), wiki("1991_Philadelphia_Eagles_season"), wiki("Eric_Allen"), wiki("Ricky_Watters")],
    },
    overtime: {
      prompt: "Wartime player shortages merged the Eagles with which team for the 1943 season?",
      answer: "Pittsburgh Steelers",
      wrong: ["Chicago Cardinals", "Brooklyn Dodgers", "Boston Yanks"],
      explanation: "The Eagles and Pittsburgh Steelers played as the 'Steagles'. The next year the Steelers merged with the Chicago Cardinals instead.",
      sources: [wiki("Steagles")],
    },
  }),

  puzzle(17, {
    scout: {
      clue: "Acquired from the Rams in 1977 for tight end Charle Young, this Youngstown State quarterback started Super Bowl XV and later spent two decades as a television analyst.",
      answer: "Ron Jaworski",
      wrong: ["Roman Gabriel", "Mike Boryla", "Joe Pisarcik"],
      explanation: "Ron Jaworski, 'the Polish Rifle', started 116 straight games, then the NFL record for a quarterback.",
      sources: [wiki("Ron_Jaworski")],
    },
    teammates: {
      athletes: ["Malcolm Jenkins", "Cris Carter"],
      shared: "college",
      answer: "Ohio State",
      wrong: ["Michigan", "Penn State", "Notre Dame"],
      explanation: "Cris Carter, whom the Eagles took in the 1987 supplemental draft, and Malcolm Jenkins, who signed in 2014, both played at Ohio State.",
      sources: [wiki("Cris_Carter"), wiki("Malcolm_Jenkins")],
    },
    replay: {
      clue: "In his Eagles debut in 1995, a newly signed running back pulls up short of a pass over the middle. Asked afterward why he didn't go all out for the ball, he answers: 'For who? For what?'",
      answer: "Ricky Watters",
      wrong: ["Charlie Garner", "Fred Barnett", "Calvin Williams"],
      explanation: "Ricky Watters was booed for the comment but went on to three straight 1,000-yard seasons in Philadelphia.",
      sources: [wiki("Ricky_Watters")],
    },
    timeline: {
      events: [
        ["Terrell Owens joins the Eagles", 2004],
        ["Brian Westbrook's punt return beats the Giants", 2003],
        ["Donovan McNabb is drafted second overall", 1999],
        ["McNabb throws four touchdowns on a broken ankle", 2002],
      ],
      sources: [wiki("Donovan_McNabb"), wiki("Brian_Westbrook"), wiki("Terrell_Owens")],
    },
    overtime: {
      prompt: "Who has won the most games as Eagles head coach?",
      answer: "Andy Reid",
      wrong: ["Greasy Neale", "Nick Sirianni", "Dick Vermeil"],
      explanation: "Andy Reid won 130 regular-season games and 10 playoff games in 14 seasons, from 1999 to 2012.",
      sources: [wiki("Andy_Reid"), wiki("List_of_Philadelphia_Eagles_head_coaches")],
    },
  }),

  puzzle(18, {
    scout: {
      clue: "An Australian rugby league prospect who had never played American football, he was a seventh-round pick in 2018 and grew into the Eagles' starting left tackle.",
      answer: "Jordan Mailata",
      wrong: ["Andre Dillard", "Matt Pryor", "Jason Peters"],
      explanation: "Jordan Mailata took over from Jason Peters at left tackle and protected Jalen Hurts in two Super Bowls.",
      sources: [wiki("Jordan_Mailata")],
    },
    teammates: {
      athletes: ["Malcolm Jenkins", "Darren Sproles"],
      shared: "team",
      answer: "New Orleans Saints",
      wrong: ["San Diego Chargers", "Kansas City Chiefs", "Atlanta Falcons"],
      explanation: "Jenkins and Sproles were teammates on the New Orleans Saints, and both came to the Eagles in 2014. Sproles had started his career with San Diego.",
      sources: [wiki("Malcolm_Jenkins"), wiki("Darren_Sproles")],
    },
    replay: {
      clue: "After a Thanksgiving Day rout in Dallas in 1989, the Cowboys' coach claims the Eagles had put bounties on his quarterback and on his kicker, a former Eagle who was flattened on a kickoff.",
      prompt: "Which Eagles coach was accused of putting bounties on the Cowboys?",
      answer: "Buddy Ryan",
      wrong: ["Dick Vermeil", "Marion Campbell", "Rich Kotite"],
      explanation: "Jimmy Johnson accused Buddy Ryan of targeting Troy Aikman and Luis Zendejas. The December rematch in Philadelphia became 'Bounty Bowl II'.",
      sources: [wiki("Bounty_Bowl")],
    },
    timeline: {
      events: [
        ["Chip Kelly is fired", 2015],
        ["Michael Vick's six-touchdown Monday night", 2010],
        ["Malcolm Jenkins signs with the Eagles", 2014],
        ["Nick Foles throws seven touchdown passes in Oakland", 2013],
      ],
      sources: [wiki("Michael_Vick"), wiki("Nick_Foles"), wiki("Malcolm_Jenkins"), wiki("Chip_Kelly")],
    },
    overtime: {
      prompt: "Which team beat the Eagles in the last game at Veterans Stadium, the January 2003 NFC Championship Game?",
      answer: "Tampa Bay Buccaneers",
      wrong: ["St. Louis Rams", "Carolina Panthers", "Atlanta Falcons"],
      explanation: "Ronde Barber's 92-yard interception return sealed the Tampa Bay Buccaneers' 27–10 win, and they went on to win the Super Bowl.",
      sources: [wiki("Veterans_Stadium"), wiki("2002_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(19, {
    scout: {
      clue: "A Louisville kicker who once played for NFL Europe's Berlin Thunder, he joined the Eagles in 1999, won the 4th-and-26 playoff game in overtime, and left in 2011 as the franchise's career scoring leader.",
      answer: "David Akers",
      wrong: ["Jake Elliott", "Cody Parkey", "Alex Henery"],
      explanation: "David Akers moved on to San Francisco and set an NFL record with 44 field goals in 2011.",
      sources: [wiki("David_Akers")],
    },
    teammates: {
      athletes: ["Carson Wentz", "Zach Ertz"],
      shared: "coach",
      answer: "Doug Pederson",
      wrong: ["Chip Kelly", "Nick Sirianni", "Andy Reid"],
      explanation: "Wentz played all five of his Eagles seasons for Doug Pederson. Ertz also played for Chip Kelly and Nick Sirianni, but Wentz had been traded before Sirianni's first game.",
      sources: [wiki("Doug_Pederson")],
    },
    replay: {
      clue: "On the last play of the 1960 NFL Championship Game, Packers fullback Jim Taylor is dragged down at the Eagles' 9-yard line, and the tackler stays on top of him until the clock runs out.",
      answer: "Chuck Bednarik",
      wrong: ["Maxie Baughan", "Tom Brookshier", "Chuck Weber"],
      explanation: "Chuck Bednarik, who played 58 minutes that day, reportedly told Taylor, 'You can get up now. This game's over.'",
      sources: [wiki("1960_NFL_Championship_Game"), wiki("Chuck_Bednarik")],
    },
    timeline: {
      events: [
        ["Jalen Carter is drafted ninth overall", 2023],
        ["Carson Wentz tears his ACL against the Rams", 2017],
        ["Carson Wentz is traded to the Colts", 2021],
        ["Zach Ertz sets the tight end receptions record", 2018],
      ],
      sources: [wiki("Carson_Wentz"), wiki("Zach_Ertz"), wiki("Jalen_Carter")],
    },
    overtime: {
      prompt: "Which team beat the Eagles in the NFC Championship Game after the 2003 season, their third straight loss in that round?",
      answer: "Carolina Panthers",
      wrong: ["Tampa Bay Buccaneers", "St. Louis Rams", "Atlanta Falcons"],
      explanation: "After losing to St. Louis and Tampa Bay the two previous years, the Eagles fell 14–3 to the Carolina Panthers at Lincoln Financial Field.",
      sources: [wiki("2003_Philadelphia_Eagles_season")],
    },
  }),

  puzzle(20, {
    scout: {
      clue: "A Duke quarterback drafted by the Eagles in 1957, he backed up Norm Van Brocklin in 1960, set an NFL record with 3,723 passing yards in 1961, and was traded to Washington in 1964.",
      answer: "Sonny Jurgensen",
      wrong: ["Norm Snead", "King Hill", "Pete Liske"],
      explanation: "Sonny Jurgensen was dealt for Norm Snead and went on to a Hall of Fame career in Washington.",
      sources: [wiki("Sonny_Jurgensen")],
    },
    teammates: {
      athletes: ["Troy Vincent", "Corey Clement"],
      shared: "college",
      answer: "Wisconsin",
      wrong: ["Iowa", "Minnesota", "Michigan State"],
      explanation: "Vincent was a star cornerback at Wisconsin, and Clement ran for the Badgers before joining the Eagles as an undrafted rookie in 2017.",
      sources: [wiki("Troy_Vincent"), wiki("Corey_Clement")],
    },
    replay: {
      clue: "Sure that a blizzard would postpone the 1948 NFL Championship Game, the Eagles' star running back nearly stays home, then makes his way through the snow to Shibe Park and scores the game's only touchdown.",
      answer: "Steve Van Buren",
      wrong: ["Bosh Pritchard", "Tommy Thompson", "Pete Pihos"],
      explanation: "Steve Van Buren's fourth-quarter touchdown gave the Eagles a 7–0 win over the Chicago Cardinals and their first NFL title.",
      sources: [wiki("1948_NFL_Championship_Game"), wiki("Steve_Van_Buren")],
    },
    timeline: {
      events: [
        ["Jordan Mailata is drafted", 2018],
        ["Lane Johnson is drafted fourth overall", 2013],
        ["Brandon Graham is drafted 13th overall", 2010],
        ["Fletcher Cox is drafted 12th overall", 2012],
      ],
      sources: [wiki("Brandon_Graham_(American_football)"), wiki("Fletcher_Cox"), wiki("Lane_Johnson"), wiki("Jordan_Mailata")],
    },
    overtime: {
      prompt: "The Eagles' franchise was created in 1933 to replace which defunct Philadelphia-area NFL team?",
      answer: "Frankford Yellow Jackets",
      wrong: ["Philadelphia Quakers", "Pottsville Maroons", "Providence Steam Roller"],
      explanation: "Bert Bell and Lud Wray were granted the franchise left vacant when the Frankford Yellow Jackets folded during the 1931 season.",
      sources: [wiki("Frankford_Yellow_Jackets"), wiki("History_of_the_Philadelphia_Eagles")],
    },
  }),
];
