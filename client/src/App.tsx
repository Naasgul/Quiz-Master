import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";

const Wrapper = styled.div``;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </>
  );
}

export default App;
