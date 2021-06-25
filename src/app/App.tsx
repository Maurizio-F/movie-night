import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Planen } from "./components/HomescreenLink/HomescreenLink.stories";
import Homescreen from "./pages/Homescreen/Homescreen";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import { ZufallsgeneratorPage } from "./pages/Zufallsgenerator/Zufallsgenerator.stories";

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
          <ZufallsgeneratorPage />
        </Route>
        <Route exact path="/movies/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
