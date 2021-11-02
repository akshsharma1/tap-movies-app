import { Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Add from "./pages/Add";
import MovieDetails from "./pages/MovieDetails";

function Router() {
    return (
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add-movie">
          <Add />
        </Route>
        <Route exact path="/:movieId">
          <MovieDetails />
        </Route>
        </Switch>
    )
}

export default Router
