import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import SignIn from "./Components/SignIn";
import SignUp from "./SignUp";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
