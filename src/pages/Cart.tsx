import { useState } from "react";
import {
  getCart,
  type CartItem,
  setCartItemCount,
  buyCartItems,
} from "../api/cart";
import { useNavigate } from "react-router-dom";

function CartItemCard({
  data,
  updateCart,
}: {
  data: CartItem;
  updateCart: () => void;
}) {
  const onSetCount = (n: number) => {
    setCartItemCount(data.game, n);
    updateCart();
  };
  return (
    <div className="flex flex-auto even:bg-slate-200 odd:bg-white border-4 max-w-lg">
      <img className="h-20" src={data.game.image} alt="Box art" />
      <span className=" mx-24 text-center self-center">{data.game.name}</span>
      <span className="self-center">${data.game.price}</span>
      <span className="self-center">×</span>
      <input
        type="number"
        value={data.count}
        onChange={(e) => onSetCount(parseInt(e.target.value))}
        className="w-[3ch] text-center"
      />
    </div>
  );
}

function Cart() {
  const [cart, setCart] = useState(getCart());
  const navigate = useNavigate();

  let total = 0;
  cart.forEach((cartItem, i) => {
    total += cartItem.count * cartItem.game.price;
  });

  const updateCart = () => {
    setCart(getCart());
  };

  const onBuy = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      confirm: { value?: boolean };
    };

    if (target.confirm.value && cart.length !== 0) {
      buyCartItems();
      setCart([]);
      navigate("/account");
    }
  };

  return (
    <main className="flex flex-row justify-center m-4">
      <div className="mr-4">
        {cart.map((cartItem, i) => (
          <CartItemCard key={i} data={cartItem} updateCart={updateCart} />
        ))}
      </div>

      <form onSubmit={onBuy} className="bg-white flex flex-col self-start p-3">
        <div className="flex flex-row">
          <span className="flex-grow">Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex flex-row">
          <span>Do you accept the purchase?</span>
          <input id="confirm" name="confirm" type="checkbox" />
        </div>
        <input
          type="submit"
          value="Buy"
          className="border-2 bg-amber-500 text-white hover:border-amber-500 hover:bg-white hover:text-amber-500"
        />
      </form>
    </main>
  );
}

export default Cart;
export { CartItemCard };
