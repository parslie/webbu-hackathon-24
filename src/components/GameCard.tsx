type GameCardData = {
  name: string,
  price: number,
  image: string,
};

function GameCard({ data }: { data: GameCardData }) {
  return (
    <div className="pr-3 pt-3 rounded-3xl bg-[#707070]">
      <div className="rounded-xl overflow-hidden bg-[#ccc]">
        <img className="object-cover w-full h-52" src={data.image} />
        <div className="p-2 grid grid-cols-gamecard">
          <span className="font-bold">{data.name}</span>
          <span>${data.price}</span>
          <button className="col-start-2 row-start-1 row-end-3 px-6 rounded bg-[#707070]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
export { type GameCardData };
