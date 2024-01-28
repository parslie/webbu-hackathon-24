import { useState } from "react";

import GameCard from "../components/GameCard";
import MultiSlider from "../components/input/MultiRangeSlider";
import { getAllGames } from "../api/games";

function Games() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");

  const games = getAllGames();

  return (
    <main className="grid grid-rows-gamepage gap-4 m-4">
      <div className="row-start-2 grid grid-cols-autofit">
        {games.map((data, i) => (
          <GameCard data={data} key={i} />
        ))}
      </div>
    </main>
  );
}

export default Games;
