import { useContext, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Difficulty, fetchQuizQuestions, QuestionState } from "../API/API";
import QuizCard from "../components/QuizCard";
import { UserContext } from "../context/UserContext";
import React from "react";

export const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Wrapper = styled.div`
  text-align: center;
`;

function Dashboard() {
  const history = useHistory();
  //@ts-ignore
  const { valueA, setValueA } = useContext(UserContext);
  //@ts-ignore
  const { score, setScore } = useContext(UserContext);
  //@ts-ignore
  const { setFiftyUsed } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setShowScore(true);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setFiftyUsed(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev: number) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
      setShowScore(false);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <Wrapper>
      <h1>Quiz-App</h1>
      <h2>{valueA}</h2>
      {showScore ? (
        <>
          <span>
            {number + 1}/{TOTAL_QUESTIONS}
          </span>
          <span>
            {" "}
            Score:{score}/{TOTAL_QUESTIONS}
          </span>
        </>
      ) : null}

      {loading && <p>Es lädt...</p>}

      {userAnswers.length === TOTAL_QUESTIONS ? (
        <>
          <button onClick={startTrivia}>Try again</button>
          <button>Zum Leadboard</button>
        </>
      ) : gameOver ? (
        <button onClick={startTrivia}>Start</button>
      ) : null}

      {!loading && !gameOver && (
        <QuizCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          incorrectAnswers={questions[number].incorrect_answers}
          correctAnswer={questions[number].correct_answer}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          nextQuestion={nextQuestion}
          number={number}
        />
      )}
    </Wrapper>
  );
}

export default Dashboard;
