import { Route, Switch, Redirect } from "wouter";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Onboard from "./pages/onboard";
import Wallet from "./pages/wallet";
import FiatWallet from "./pages/fiatwallet";
import CryptoWallet from "./pages/cryptowallet";
import Invoice from "./pages/invoice";
import CreateInvoice from "./pages/createinvoice";
import Verify from "./pages/verify";
import AccountType from "./pages/accounttype";
import BusinessName from "./pages/businessname";
import Dashboard from "./pages/dashboard";
import Transactions from "./pages/transactions";
import PaymentLink from "./pages/paymentlink";
import TransactionDetail from "./pages/transactiondetail";
import StoreFront from "./pages/storefront";
import Customers from "./pages/customers";
import Payout from "./pages/payout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div className="bg-neutral text-contrast">
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/" component={() => <Redirect to="/sign-up" />} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/onboard" component={Onboard} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/verify" component={Verify} />
          <Route path="/account-type" component={AccountType} />
          <Route path="/business-name" component={BusinessName} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/transactions" component={Transactions} />
          <Route
            path="/transactions/:transactionId"
            component={TransactionDetail}
          />
          <Route path="/payout" component={Payout} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/wallet/fiat" component={FiatWallet} />
          <Route path="/wallet/crypto" component={CryptoWallet} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/invoice/new" component={CreateInvoice} />
          <Route path="/payment-link" component={PaymentLink} />
          <Route path="/storefront" component={StoreFront} />
          <Route path="/customers" component={Customers} />
        </Switch>
      </QueryClientProvider>
    </div>
  );
}

export default App;
