import React from "react"
import { createBrowserHistory } from "history";

import { Switch, Route, Router } from "react-router-dom"

import { Index, Login } from "./index"

export default function Component() {

  return (
    <Router history={createBrowserHistory() }>
      <Switch>
        <Route path="/" exact component={Index }/>
        <Route path="/login" exact component={Login }/>
      </Switch>
    </Router>
  )
}
