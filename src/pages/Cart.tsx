import { useState } from "react";
import { getCart, type CartItem } from "../api/cart";

function CartItemCard({ data }: { data: CartItem }) {
  const [count, setCount] = useState(data.count);

  const onSetCount = (n: number) => {
    // TODO:
  };
  
  return (
    <div className="flex flex-row gap-2 even:bg-slate-200">
      <img className=""
           src={data.game.image}
           alt="Box art" />
      <span className="flex-grow">{data.game.name}</span>
      <span>{data.game.price}</span>
      <input type="number" value={count} 
            //  onChange={(e) => onSetCount(e.target.value as typeof number)}
             className="w-[3ch] text-center" />
    </div>
  );
}

function Cart() {
  let cart = getCart();
  
  return (
    <main className="flex flex-row">
      <div className="flex flex-col flex-grow">
        {/* Games */}
        {cart.map((cartItem, i) => (
          <CartItemCard key={i} data={cartItem} />
        ))}
      </div>
      <div>
        {/* Prissummering med godkänn check och köpknapp */}
      </div>
    </main>
  );
}

export default Cart;
