type GameCardData = {
  name: string,
  price: number,
  image: string,
};

function GameCard({ data }: { data: GameCardData }) {
  console.log(data.image)
  return (
    <div className="rounded-lg overflow-hidden bg-red-400">
      <img className="object-cover w-full h-52" src={data.image} />
      <div className="p-2 grid grid-cols-gamecard">
        <span className="font-bold">{data.name}</span>
        <span>${data.price}</span>
        <button className="col-start-2 row-start-1 row-end-3 px-6 rounded hover:bg-slate-50">
          Buy
        </button>
      </div>
    </div>
  );
}

export default GameCard;
export { type GameCardData };
