import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import NewBug from "./components/NewBug"
import MainNav from "./components/Nav"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewBug} />
          <Route component={NotFound} /> 
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
