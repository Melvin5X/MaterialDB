
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Materials from './Components/Materials';
import CreateMaterial from './Components/CreateMaterial';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Materials} />
        <Route exact path='/materials/create' component={CreateMaterial} />
        <Route exact path='/materials' component={Materials} />

      </Switch>
    </Router>
  );
}

export default App;
