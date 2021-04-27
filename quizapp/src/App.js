import React from "react";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Dashboard from "./Components/Dashboard";
import Registration from "./Components/Registration";

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Questions from "./Components/Questions";
import Result from "./Components/Result";
import "../src/css/main.css"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/questions" component={Questions}></Route>
        <Route path="/result" component={Result}></Route>
        <Route component={NotFound}></Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
