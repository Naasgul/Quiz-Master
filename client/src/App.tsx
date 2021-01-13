import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Dashboard from "./pages/Dashboard";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
`;

function App() {
  return (
    <Wrapper>
      <Dashboard />
    </Wrapper>
  );
}

export default App;
