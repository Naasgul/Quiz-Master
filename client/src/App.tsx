/* eslint-disable no-restricted-globals */
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import UserProvider from "./context/UserContext";

const Wrapper = styled.div``;

function App() {
  return (
    <UserProvider>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/quiz">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
