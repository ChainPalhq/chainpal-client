import { Route, Switch } from "wouter";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";

function App() {
  return (
    <div className="bg-neutral text-contrast">
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
