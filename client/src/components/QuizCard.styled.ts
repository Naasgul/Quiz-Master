import styled from "styled-components";

type WrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: 50% 50%;
  border: 1px solid black;

  p {
    grid-column: 1 / span 2;
    justify-self: center;
  }
  div {
    justify-self: center;
    align-self: center;
  }
`;

export const ButtonWrapper = styled.div<WrapperProps>`
  button {
    background-color: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : "white"};
  }
`;
