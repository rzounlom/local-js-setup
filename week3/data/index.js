const myDog = {
  name: "Rusty",
  breed: "German Shepherd",
  bark: "loud",
  "favorite food": "steak",
};

const employees = [
  {
    id: 1,
    name: "James",
    title: "PM",
    exp: 5,
    active: true,
  },
  {
    id: 2,
    name: "John",
    title: "PM",
    exp: 5,
    active: false,
  },
  {
    id: 3,
    name: "Kim",
    title: "Software Engineer",
    exp: 8,
    active: true,
  },
  {
    id: 4,
    name: "Renee",
    title: "Software Engineer 3",
    exp: 12,
    active: true,
  },
  {
    id: 5,
    name: "Jane",
    title: "Software Engineer Manager",
    exp: 15,
    active: true,
  },
];

const nflTeams = {
  AFC: {
    AFC_North: [
      {
        name: "Baltimore Ravens",
        city: "Baltimore",
        conference: "AFC",
        division: "AFC_North",
      },
      {
        name: "Cincinnati Bengals",
        city: "Cincinnati",
        conference: "AFC",
        division: "AFC_North",
      },
      {
        name: "Cleveland Browns",
        city: "Cleveland",
        conference: "AFC",
        division: "AFC_North",
      },
      {
        name: "Pitsburg Stealers",
        city: "Pitsburg",
        conference: "AFC",
        division: "AFC_North",
      },
    ],
    AFC_South: [
      {
        name: "Houston Texans",
        city: "Houston",
        conference: "AFC",
        division: "AFC_South",
      },
      {
        name: "Indinapolis Colts",
        city: "Indinapolis",
        conference: "AFC",
        division: "AFC_South",
      },
      {
        name: "Jacksonville Jaguars",
        city: "Jacksonville",
        conference: "AFC",
        division: "AFC_South",
      },
      {
        name: "Tennessee Titans",
        city: "Tennessee",
        conference: "AFC",
        division: "AFC_South",
      },
    ],
    AFC_East: [
      {
        name: "Buffalo Bills",
        city: "Buffalo",
        conference: "AFC",
        division: "AFC_East",
      },
      {
        name: "Miami Dolphons",
        city: "Miami",
        conference: "AFC",
        division: "AFC_East",
      },
      {
        name: "New England Patriots",
        city: "New England",
        conference: "AFC",
        division: "AFC_East",
      },
      {
        name: "New York Jets",
        city: "New York",
        conference: "AFC",
        division: "AFC_East",
      },
    ],
    AFC_West: [
      {
        name: "Denver Broncos",
        city: "Denver",
        conference: "AFC",
        division: "AFC_West",
      },
      {
        name: "Kansas City Chiefs",
        city: "Kansas City",
        conference: "AFC",
        division: "AFC_West",
      },
      {
        name: "Las Vagas Raiders",
        city: "Las Vagas",
        conference: "AFC",
        division: "AFC_West",
      },
      {
        name: "Los Angeles Chargers",
        city: "Los Angeles",
        conference: "AFC",
        division: "AFC_West",
      },
    ],
  },
  NFC: {
    NFC_North: [
      {
        name: "Chicago Bears",
        city: "Chicago",
        conference: "NFC",
        division: "NFC_North",
      },
      {
        name: "Detroit Lions",
        city: "Detroit",
        conference: "NFC",
        division: "NFC_North",
      },
      {
        name: "Green Bay Packers",
        city: "Green Bay",
        conference: "NFC",
        division: "NFC_North",
      },
      {
        name: "Minnesota Vikings",
        city: "Minnesota",
        conference: "NFC",
        division: "NFC_North",
      },
    ],
    NFC_South: [
      {
        name: "Atlanta Falcons",
        city: "Atlanta",
        conference: "NFC",
        division: "NFC_South",
      },
      {
        name: "Carolina Panthers",
        city: "Carolina",
        conference: "NFC",
        division: "NFC_South",
      },
      {
        name: "New Orleans Saints",
        city: "New Orleans",
        conference: "NFC",
        division: "NFC_South",
      },
      {
        name: "Tampa Bay Buccaneers",
        city: "Tampa Bay",
        conference: "NFC",
        division: "NFC_South",
      },
    ],
    NFC_East: [
      {
        name: "Philadelphia Eagles",
        city: "Philadelphia",
        conference: "NFC",
        division: "NFC_East",
      },
      {
        name: "Dallas Cowboys",
        city: "Dallas",
        conference: "NFC",
        division: "NFC_East",
      },
      {
        name: "New York Giants",
        city: "New York",
        conference: "NFC",
        division: "NFC_East",
      },
      {
        name: "Washington Commanders",
        city: "Washington",
        conference: "NFC",
        division: "NFC_East",
      },
    ],
    NFC_West: [
      {
        name: "San Francisco 49ers",
        city: "San Francisco",
        conference: "NFC",
        division: "NFC_West",
      },
      {
        name: "Seattle Seahawks",
        city: "Seattle",
        conference: "NFC",
        division: "NFC_West",
      },
      {
        name: "Los Angeles Rams",
        city: "Los Angeles",
        conference: "NFC",
        division: "NFC_West",
      },
      {
        name: "Arizona Cardinals",
        city: "Arizona",
        conference: "NFC",
        division: "NFC_West",
      },
    ],
  },
};

module.exports = {
  nflTeams,
  myDog,
  employees,
};
