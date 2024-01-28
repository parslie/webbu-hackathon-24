import { Game } from "./games";

const CART_KEY = "";

type CartItem = {
  id: number,
  game: Game,
  count: number,
};

type Cart = CartItem[];

function getCart() : Cart {
  const cartStr = localStorage.getItem(CART_KEY);
  if (cartStr === null) {
    return [];
  }

  const cart = JSON.parse(cartStr);
  return cart;
}

function addToCart(game: Game) {
  let cart = getCart();

  let gameInCart = false;
  for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i];
    if (cartItem.game.id === game.id) {
      cartItem.count++;
      cart[i] = cartItem;
      gameInCart = true;
      break;
    }
  }

  if (!gameInCart) {
    const cartItem: CartItem = {
      id: cart.length,
      game: game,
      count: 1,
    };
    cart.push(cartItem);
  }
  
  const cartStr = JSON.stringify(cart);
  localStorage.setItem(CART_KEY, cartStr);
}

function removeFromCart(game: Game) {
  let cart = getCart();

  for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i];
    if (cartItem.game.id === game.id) {
      cart.splice(i, 1);
      break;
    }
  }

  const cartStr = JSON.stringify(cart);
  localStorage.setItem(CART_KEY, cartStr);
}

function setCartItemCount(game: Game, count: number) {
  if (count <= 0) {
    removeFromCart(game);
  } else {
    let cart = getCart();

    for (let i = 0; i < cart.length; i++) {
      let cartItem = cart[i];
      if (cartItem.game.id === game.id) {
        cartItem.count = count;
        cart[i] = cartItem;
        break;
      }
    }

    const cartStr = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartStr);
  }
}

export { getCart, addToCart, removeFromCart, setCartItemCount, type Cart, type CartItem };
