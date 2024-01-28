import { useParams } from "react-router-dom";

function Account() {
  let { username } = useParams();

  return (
    <main className="m-4 bg-white">
      <h1 className="">Weclome {username}</h1>
      <div className="shadow-xl">
        <h2>Köphistorik</h2>
        <div>Reapeata det som köpts</div>
      </div>
    </main>
  );
}

export default Account;
