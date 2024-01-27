type Game = {
  id: number,
  name: string,
  price: number,
  image: string,
  minPlayers: number,
  maxPlayers: number,
  score: number,
};

function getAllGames() : Game[] {
  return [
    {
      id: 0,
      name: "Uno",
      price: 29.99,
      image: "",
      minPlayers: 2,
      maxPlayers: 10,
      score: 4,
    },{
      id: 1,
      name: "Monopoly",
      price: 39.99,
      image: "",
      minPlayers: 2,
      maxPlayers: 8,
      score: 2,
    },{
      id: 2,
      name: "Cards Against Humanity",
      price: 29.99,
      image: "",
      minPlayers: 3,
      maxPlayers: 8,
      score: 3,
    },{
      id: 3,
      name: "Chess",
      price: 40.97,
      image: "",
      minPlayers: 2,
      maxPlayers: 2,
      score: 5,
    },{
      id: 4,
      name: "Chinese checkers",
      price: 40.97,
      image: "",
      minPlayers: 2,
      maxPlayers: 6,
      score: 2,
    },
  ];
}

function getPopularGames(count: number) : Game[] {
  const games = getAllGames();
  let sortedGames: Game[] = [];
  
  for (let i = 0; i < games.length; i++)
  {
    let spliceIdx = 0;

    for (let j = 0; j < sortedGames.length; j++) {
      if (games[i].score > sortedGames[j].score) {
        break;
      } else {
        spliceIdx++;
      }
    }

    sortedGames.splice(spliceIdx, 0, games[i]);
  }

  return sortedGames.slice(0, count);
}

export { getAllGames, getPopularGames, type Game };
