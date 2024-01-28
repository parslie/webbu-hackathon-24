import { addToCart } from "../api/cart";
import { Game } from "../api/games";

function GameCard({ data }: { data: Game }) {
  const onBuy = () => {
    addToCart(data);
  };
  
  return (
    <div className="overflow-hidden bg-white shadow-xl max-h-80">
      <img
        className="object-cover w-full h-52"
        alt="Box art"
        src={data.image}
      />
      <div className="p-2 grid grid-cols-gamecard">
        <span className="font-bold">{data.name}</span>
        <span>${data.price}</span>
        <button className="col-start-2 row-start-1 row-end-3 px-6 rounded"
                onClick={onBuy}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default GameCard;
