import { useParams } from "react-router-dom";

function Account() {
  let { id } = useParams();

  return (
    <main>
      <h1>Konto #{id}</h1>
      <h3>Här finns info om ett konto. Kanske möjlighet att redigera om man har tillgång.</h3>
    </main>
  );
}

export default Account;
