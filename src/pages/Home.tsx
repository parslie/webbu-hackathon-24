import headerImg from "../res/maxresdefault.jpg";
import searchIcon from "../res/search-icon.webp";

function Home() {
  return (
    <main>
        <header className="relative overflow-hidden">
          <img src={headerImg} className="absolute top-[50%] left-[50%] 
                                          -translate-x-[50%] -translate-y-[50%]
                                          -z-[1]"/>
          <div className="w-max mx-auto my-12 p-2 bg-[#d9d9d9] rounded-lg
                          relative z-10">
            <div className="bg-white flex flex-row">
              <img src={searchIcon} className="box-content w-10 pl-4 pr-2 py-2
                                               opacity-50" />
              <input type="text" placeholder="Enter search terms..."
                     className="pr-4 font-bold" />
            </div>
          </div>
        </header>
        
        {/* TODO: only show when logged in */}
        <article className="m-12 p-4 bg-[#787878] rounded-lg">
          <h2 className="text-lg font-bold text-white">Recommended games</h2>
          <div className="grid grid-cols-autofit">
            {/* TODO: fill with games */}
          </div>
        </article>
        
        <article className="m-12 p-4 bg-[#787878] rounded-lg">
          <h2 className="text-lg font-bold text-white">Popular games</h2>
          <div className="grid grid-cols-autofit">
            {/* TODO: fill with games */}
          </div>
        </article>
    </main>
  );
}

export default Home;
