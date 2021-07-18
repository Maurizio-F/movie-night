import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homescreen from "./pages/Homescreen/Homescreen";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Overview from "./pages/Overview/Overview";
import Planen from "./pages/Plan/Plan";
import SwipeGame from "./pages/SwipeGame/SwipeGame";
import Randomizer from "./pages/Randomizer/Randomizer";
import styles from "./App.module.css";

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homescreen />
          </Route>
          <Route exact path="/planen">
            <Planen />
          </Route>
          <Route exact path="/zufallsgenerator">
            <Randomizer />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/swipegame">
            <SwipeGame />
          </Route>
          <Route exact path="/uebersicht">
            <Overview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
