import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { UserContext } from "./context/UserContext";

const Wrapper = styled.div``;

function App() {
  const startQuiz = async () => {};

  const [name, setName] = useState("User");
  const [context, setContext] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setContext(name);
  };

  return (
    <>
      <Router>
        <Link to="/quiz"> To Quiz </Link>
        <UserContext.Provider value={context}>
          <GlobalStyles />
          <Wrapper>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} />
            </form>
            <Switch>
              <Route path="/quiz">
                <Dashboard />
              </Route>
            </Switch>
          </Wrapper>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
