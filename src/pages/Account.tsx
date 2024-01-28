import { useParams } from "react-router-dom";
import { HistoryItem, getBuyHistory } from "../api/cart";
import { useState } from "react";
import { getSelf } from "../api/user";

function HistoryItemCard({ data }: { data: HistoryItem }) {
  return (
    <div className="flex flex-col border-slate-300 border-solid border-2 rounded-lg overflow-hidden mt-4">
      {data.cart.map((cartItem, i) => (
        <div key={i} className="flex flex-row items-center gap-2 even:bg-slate-200 odd:bg-white p-2">
          <img className="h-20"
              src={cartItem.game.image}
              alt="Box art" />
          <span className="flex-grow">{cartItem.game.name}</span>
          <span>${cartItem.game.price} × {cartItem.count}</span>
        </div>
      ))}
      <div className="flex flex-row items-center gap-2 even:bg-slate-200 odd:bg-white p-2">
        <span className="flex-grow font-bold text-right">Total:</span>
        <span>${data.total.toFixed(2)}</span>
      </div>
    </div>
  );
}

function Account() {
  const user = getSelf();
  const history = getBuyHistory();

  if (user === null) {
    return (
      <main className="p-4 bg-white p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">You are not logged in!</h1>
      </main>
    );
  } else {
    return (
      <main className="p-4 flex flex-col gap-4">
        <div className="bg-white p-4">
          <h1 className="text-2xl font-bold">Welcome {user.username}!</h1>
        </div>
        <div className="bg-white p-4">
          <h2 className="text-xl font-bold mb-4">Purchase History</h2>
          {history.map((historyItem, i) => (
            <HistoryItemCard key={i} data={historyItem} />
          ))}

        </div>
      </main>
    );
  }

  // return (
  //   <main className="m-4 bg-white p-4 flex flex-col gap-4">
  //     {user === null ? (
  //       <h1>You are not logged in!</h1>
  //     ) : (
  //       <>
  //         <h1 className="text-2xl font-bold">Weclome {user.username}!</h1>
  //         <div className="shadow-xl">
  //           <h2 className="text-xl font-bold p-4 pt-0">Köphistorik</h2>
  //           {history.map((historyItem, i) => (
  //             <HistoryItemCard key={i} data={historyItem} />
  //           ))}
  //         </div>
  //       </>
  //     )}
  //   </main>
  // );
}

export default Account;
