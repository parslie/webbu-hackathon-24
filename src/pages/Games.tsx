import { useState } from "react";

import { type GameCardData } from "../components/GameCard";
import GameCard from "../components/GameCard";
import MultiSlider from "../components/input/MultiRangeSlider";

function Games() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");

  const gameCards: GameCardData[] = [
    {
      name: "Uno",
      price: 20.49,
      image: "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },{
      name: "Monopoly",
      price: 29.99,
      image: "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },{
      name: "Muffin Time",
      price: 29.99,
      image: "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },{
      name: "Chess",
      price: 29.99,
      image: "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },{
      name: "Risk",
      price: 29.99,
      image: "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },{
      name: "Diamant",
      price: 29.99,
      image: "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    }
  ];

  return (
    <main className="grid grid-cols-gamepage grid-rows-gamepage gap-4">
        <div className="col-start-1 row-span-2 ">
          <h2 className="text-lg font-bold">Filter</h2>
          
          <h3 className="font-bold">Category</h3>
          
          <h3 className="font-bold">Price</h3>
          <MultiSlider min={0}
                       max={100}
                       minValue={minPrice}
                       maxValue={maxPrice}
                       onInput={e => {
                        setMinPrice(e.minValue);
                        setMaxPrice(e.maxValue);
                       }}
                       minCaption={`$${minPrice}`}
                       maxCaption={`$${maxPrice}`}
                       minLabel="$0"
                       maxLabel="$100" />

          <h3 className="font-bold">Players</h3>
          <input type="checkbox" />
          <label>2</label>
          <input type="checkbox" />
          <label>3</label>
          <input type="checkbox" />
          <label>4</label>
          <input type="checkbox" />
          <label>5</label>
        </div>
        
        <div className="col-start-2 row-start-1">
          <input type="text"
                 placeholder="Enter game title here..." 
                 onChange={e => setSearchTerm(e.target.value)}
                 className="w-full border-solid border-2 border-black rounded-lg p-1" />
        </div>

        <div className="col-start-2 row-start-2 grid grid-cols-autofit gap-4">
          {gameCards.map(((data, i) => (
            <GameCard data={data} key={i} />
          )))}
        </div>
    </main>
  );
}

export default Games;
