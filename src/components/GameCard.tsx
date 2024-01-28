import { addToCart } from "../api/cart";
import { Game } from "../api/games";
import plank from "../images/Wood-texture-1.jpg";

function GameCard({ data }: { data: Game }) {
  const onBuy = () => {
    addToCart(data);
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="mx-4 mt-4 bg-white border-amber-500 border-2">
          <img
            className="object-cover w-full h-52"
            alt="Box art"
            src={data.image}
          />
          <div className="p-2 grid grid-cols-gamecard">
            <span className="font-bold">{data.name}</span>
            <span>${data.price}</span>
            <button
              onClick={onBuy}
              className="col-start-2 row-start-1 row-end-3 fonts-bold px-6 rounded text-white bg-amber-500 hover:bg-white hover:text-amber-500 border-2 border-amber-500"
            >
              Buy
            </button>
          </div>
        </div>

        <div className="bg-hero-pattern bg-cover bg-center h-10 shadow-inner border-y-2 border-red-950 "></div>
      </div>
      {/* <img src={plank} alt="" className=" bg-repeat"/> */}
    </>
  );
}

export default GameCard;
