import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import EventScreen from "./screens/EventScreen/EventScreen";
import Menu from "./components/menu/Menu";
import Main from "./screens/Main/Main";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Router>
        <div>
          <Switch>
            <Route path="/event">
              <EventScreen />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
