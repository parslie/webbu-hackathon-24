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
      image:
        "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },
    {
      name: "Monopoly",
      price: 29.99,
      image:
        "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },
    {
      name: "Muffin Time",
      price: 29.99,
      image:
        "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },
    {
      name: "Chess",
      price: 29.99,
      image:
        "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },
    {
      name: "Risk",
      price: 29.99,
      image:
        "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },
    {
      name: "Diamant",
      price: 29.99,
      image:
        "https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg",
    },
  ];

  return (
    <main className="grid grid-rows-gamepage gap-4 m-4">
      <div className="row-start-2 grid grid-cols-autofit">
        {gameCards.map((data, i) => (
          <GameCard data={data} key={i} />
        ))}
      </div>
    </main>
  );
}

export default Games;
