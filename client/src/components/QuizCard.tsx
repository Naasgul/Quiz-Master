import styled from "styled-components";
import React, { FC, ReactElement } from "react";

const Wrapper = styled.div`
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

type Props = {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  answers: string[];
  userAnswer: any;
  callback: any;
  correct: string;
  nextQuestion: any;
};

const QuizCard: React.FC<Props> = ({
  question,
  questionNumber,
  totalQuestions,
  answers,
  userAnswer,
  callback,
  nextQuestion,
  correct,
}) => {
  return (
    <Wrapper>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      {answers.map((answer) => (
        <div key={answer}>
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
      <button onClick={nextQuestion}>Next Question</button>
    </Wrapper>
  );
};

export default QuizCard;
