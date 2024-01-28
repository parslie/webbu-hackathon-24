import { useState } from "react";
import { getCart, type CartItem, setCartItemCount, buyCartItems } from "../api/cart";
import { useNavigate } from "react-router-dom";

function CartItemCard({ data, updateCart }: { data: CartItem, updateCart: () => void }) {
  const onSetCount = (n: number) => {
    setCartItemCount(data.game, n);
    updateCart();
  };
  
  return (
    <div className="flex flex-row gap-2 even:bg-slate-200 odd:bg-white">
      <img className=""
           src={data.game.image}
           alt="Box art" />
      <span className="flex-grow">{data.game.name}</span>
      <span>${data.game.price}</span>
      <span className="self-center">×</span>
      <input type="number" value={data.count} 
             onChange={(e) => onSetCount(parseInt(e.target.value))}
             className="w-[3ch] text-center" />
    </div>
  );
}

function Cart() {
  const [cart, setCart] = useState(getCart());
  const navigate = useNavigate();

  let total = 0;
  cart.forEach((cartItem, i) => {
    total += cartItem.count * cartItem.game.price
  });

  const updateCart = () => {
    setCart(getCart());
  };

  const onBuy = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      confirm: { value?: boolean },
    };

    if (target.confirm.value && cart.length !== 0) {
      buyCartItems();
      setCart([]);
      navigate("/account");
    }
  };
  
  return (
    <main className="flex flex-row gap-2">
      <div className="flex flex-col flex-grow">
        {cart.map((cartItem, i) => (
          <CartItemCard key={i} data={cartItem} updateCart={updateCart} />
        ))}
      </div>

      <form onSubmit={onBuy} className="bg-white flex flex-col self-start p-3">
        <div className="flex flex-row gap-2">
          <span className="flex-grow">Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex flex-row gap-2">
          <span>Do you accept the purchase?</span>
          <input id="confirm" name="confirm" type="checkbox" />
        </div>
        <input type="submit" value="Buy" />
      </form>
    </main>
  );
}

export default Cart;
export { CartItemCard };
