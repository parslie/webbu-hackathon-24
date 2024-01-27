import { Game } from "./games";

const CART_KEY = "";

type Cart = Game[];

function getCart() : Cart {
  const cartStr = localStorage.getItem(CART_KEY);
  if (cartStr === null) {
    return [];
  }

  const cart = JSON.parse(cartStr);
  return cart;
}

export { getCart, type Cart };
