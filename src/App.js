import { useSelector } from "react-redux";

import CreateCustomer from "./features/customers/CreateCustomer";
import AccountOperations from "./features/accounts/AccountOperations";
import Balance from "./features/accounts/Balance";
import Customer from "./features/customers/Customer";
import DateDisplay from "./DateDisplay";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <div>
      <h1>🏦 Bank Account Manager</h1>
      <DateDisplay />
      {fullName === "" && <CreateCustomer />}
      {fullName !== "" && (
        <>
          <Customer />
          <Balance />
          <AccountOperations />
        </>
      )}
    </div>
  );
}

export default App;
