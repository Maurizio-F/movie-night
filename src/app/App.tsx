import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homescreen from "./pages/Homescreen/Homescreen";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Planen from "./pages/Plan/Plan";
import Zufallsgenerator from "./pages/Zufallsgenerator/Zufallsgenerator";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
        <Route exact path="/planen">
          <Planen />
        </Route>
        <Route exact path="/zufallsgenerator">
          <Zufallsgenerator />
        </Route>
        <Route exact path="/movies/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
