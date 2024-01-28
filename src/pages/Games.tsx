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
    <main className="grid grid-cols-gamepage grid-rows-gamepage gap-4 m-4 bg-orange-50">
      <div className="col-start-2 row-start-1">
        <input
          type="text"
          placeholder="Enter game title here..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border-solid border-2 border-amber-500 rounded-md p-2"
        />
      </div>
      <div className="col-start-1 row-span-2 border-r-8 border-amber-950">
        <h2 className="text-lg font-bold">Filter</h2>
        <p className="font-bold">Category</p>
        <p className="font-bold">Price</p>
        {/* <MultiSlider
          min={0}
          max={100}
          minValue={minPrice}
          maxValue={maxPrice}
          onInput={(e) => {
            setMinPrice(e.minValue);
            setMaxPrice(e.maxValue);
          }}
          minCaption={`$${minPrice}`}
          maxCaption={`$${maxPrice}`}
          minLabel="$0"
          maxLabel="$100"
        />

        <h3 className="font-bold">Players</h3>
        <input type="checkbox" />
        <label>2</label>
        <input type="checkbox" />
        <label>3</label>
        <input type="checkbox" />
        <label>4</label>
        <input type="checkbox" />
        <label>5</label> */}
      </div>

      <div className="col-start-2 row-start-2 grid grid-cols-autofit gap-16">
        {games.map((data, i) => (
          <GameCard data={data} key={i} />
        ))}
      </div>
    </main>
  );
}

export default Games;
