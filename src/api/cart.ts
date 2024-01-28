import { Game } from "./games";
import { getSelf, isLoggedIn } from "./user";

const CART_KEY = "cart";
const BUY_HISTORY_KEY = "buy_history";

type CartItem = {
  id: number,
  game: Game,
  count: number,
};

type Cart = CartItem[];

type HistoryItem = {
  id: number,
  cart: Cart,
  total: number,
};

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

function getBuyHistory() : HistoryItem[] {
  if (isLoggedIn()) {
    let user = getSelf();
    let historyStr = localStorage.getItem(BUY_HISTORY_KEY + user?.username);
    let history: HistoryItem[] = [];
    if (historyStr !== null) {
      history = JSON.parse(historyStr);
    }
    return history;
  } else {
    return [];
  }
}

function buyCartItems() {
  if (isLoggedIn()) {
    let user = getSelf();
    let history = getBuyHistory();
    let cart = getCart();
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.count * cartItem.game.price;
    });
    history.push({
      id: history.length,
      cart: cart,
      total: total,
    })
    const historyStr = JSON.stringify(history);
    localStorage.setItem(BUY_HISTORY_KEY + user?.username, historyStr);
  }

  localStorage.removeItem(CART_KEY);
}

export { buyCartItems, getBuyHistory, getCart, addToCart, removeFromCart, setCartItemCount, type Cart, type CartItem, type HistoryItem };
