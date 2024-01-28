import { useParams } from "react-router-dom";
import { HistoryItem, getBuyHistory } from "../api/cart";
import { useState } from "react";
import { getSelf } from "../api/user";

function HistoryItemCard({ data }: { data: HistoryItem }) {
  return (
    <div className="flex flex-col">
      {data.cart.map((cartItem, i) => (
        <div key={i} className="even:bg-slate-200">
          <img src={cartItem.game.image}
               alt="Box art" />
        </div>
      ))}
    </div>
  );
}

function Account() {
  const user = getSelf();
  const history = getBuyHistory();  

  return (
    <main className="m-4 bg-white">
      {user === null ? (
        <h1>You are not logged in!</h1>
      ) : (
        <>
          <h1 className="">Weclome {user.username}</h1>
          <div className="shadow-xl">
            <h2>Köphistorik</h2>
            {history.map((historyItem, i) => (
              <HistoryItemCard key={i} data={historyItem} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default Account;
