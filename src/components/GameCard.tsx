import plank from "../images/Wood-texture-1.jpg";

type GameCardData = {
  name: string;
  price: number;
  image: string;
};

function GameCard({ data }: { data: GameCardData }) {
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
            <button className="col-start-2 row-start-1 row-end-3 fonts-bold px-6 rounded text-white bg-amber-500">
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
export { type GameCardData };
