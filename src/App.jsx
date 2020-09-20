import React from 'react';
import './App.css';
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import {
  Switch,Route
} from "react-router-dom";


function App() {
  return (
    <div className="app">
        <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route exact path="/search">
    <SearchPage/>
    </Route>
    </Switch>

    </div>

  );
}

export default App;
