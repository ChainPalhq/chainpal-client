import { Route, Switch, Redirect } from "wouter";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Onboard from "./pages/onboard";

function App() {
  return (
    <div className="bg-neutral text-contrast">
      <Switch>
        <Route path="/" component={() => <Redirect to="/sign-up" />} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/onboard" component={Onboard} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
