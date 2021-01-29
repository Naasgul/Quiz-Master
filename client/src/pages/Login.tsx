import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { postUser } from "../API/Users";
import { UserContext } from "../context/UserContext";

const LoginWrapper = styled.div`
  text-align: center;
`;

function Login() {
  const [name, setName] = useState("User");

  const history = useHistory();

  //@ts-ignore
  const { valueA, setValueA } = useContext(UserContext);

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValueA(name);
    console.log(valueA);
    postUser({ name });
    history.push("/quiz");
  };
  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">To Quiz</button>
      </form>
    </LoginWrapper>
  );
}

export default Login;
