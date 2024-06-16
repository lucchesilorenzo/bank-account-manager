import { useSelector } from "react-redux";

const formatBalance = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(value);

function Balance() {
  const { balance } = useSelector((store) => store.account);

  return (
    <div className="balance-wrapper">
      <h1>{formatBalance(balance)}</h1>
    </div>
  );
}

export default Balance;
