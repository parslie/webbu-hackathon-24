import theMystery from "../images/The mystery.png";
import planttopia from "../images/planttopia.png";
import imTheCaptain from "../images/I'm the captain.png";

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
      name: "The Mystery",
      price: 24.99,
      image: theMystery,
      minPlayers: 2,
      maxPlayers: 10,
      score: 4,
    },{
      id: 1,
      name: "Planttopia",
      price: 29.99,
      image: planttopia,
      minPlayers: 2,
      maxPlayers: 10,
      score: 1,
    },{
      id: 2,
      name: "I'm the Captain",
      price: 19.99,
      image: imTheCaptain,
      minPlayers: 2,
      maxPlayers: 10,
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
