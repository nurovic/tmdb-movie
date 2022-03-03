
import { Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import About from "../components/MovieDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
          <Home />
        
      </Route>
      <Route path="/:id"
      component={About} >
        
      </Route>
    </Switch>
  );
};

export default Routes;
