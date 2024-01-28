import { getPopularGames } from "../api/games";
import GameCard from "../components/GameCard";
import headerImg from "../images/maxresdefault.jpg";
import searchIcon from "../images/search-icon.webp";

function Home() {
  const popularGames = getPopularGames(5);

  return (
    <main>
      <header className="relative overflow-hidden">
        <img
          src={headerImg}
          className="absolute top-[50%] left-[50%]-translate-x-[50%] -translate-y-[50%]"
          alt="header"
        />
        <div className="w-max mx-auto my-12 p-2 bg-[#d9d9d9] rounded-lg relative z-10">
          <div className="bg-white flex flex-row"></div>
        </div>
      </header>

      <article className="m-12 p-4 bg-[#787878] rounded-lg">
        <h2 className="text-lg font-bold text-white">Popular games</h2>
        <div className="grid grid-cols-autofit">
          {popularGames.map((game, i) => (
            <GameCard key={i} data={game} />
          ))}
        </div>
      </article>
    </main>
  );
}

export default Home;
