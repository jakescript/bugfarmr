import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import NewBug from "./components/NewBug"
import About from "./components/About"
import MainNav from "./components/Nav"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewBug} />
          {/* <Route exact path="/about" component={About} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
