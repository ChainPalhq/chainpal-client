import { Route, Switch, Redirect } from "wouter";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Onboard from "./pages/onboard";
import Verify from "./pages/verify";
import AccountType from "./pages/accounttype";
import BusinessName from "./pages/businessname";
import Dashboard from "./pages/dashboard";
import Transactions from "./pages/transactions";
import Payout from "./pages/payout";
import { QueryClient, QueryClientProvider } from "react-query";

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
          <Route path="/payout" component={Payout} />
        </Switch>
      </QueryClientProvider>
    </div>
  );
}

export default App;
