import React, { usestate } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import "../styles/header.css";

export default function Header() {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="selected" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/page1">
            Page 1
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/page2">
            Page 2
          </NavLink>
        </li>
      </ul>

      <Switch>
        {/* for deployment */}
        <Route path="/2021">
          <Redirect to="/" />
        </Route>
        <Route exact path="/"></Route>

        <Route path="page1">
          <Page1 />
        </Route>
        <Route path="page2">
          <Page2 />
        </Route>
      </Switch>
    </div>
  );
}
