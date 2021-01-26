import { useContext, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Difficulty, fetchQuizQuestions, QuestionState } from "../API";
import QuizCard from "../components/QuizCard";
import { UserContext } from "../context/UserContext";
import React from "react";

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Wrapper = styled.div`
  text-align: center;
`;

function Dashboard() {
  const name = useContext(UserContext);
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
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
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <Wrapper>
      <h1>Quiz-App</h1>
      <span>
        {" "}
        {number + 1}/{TOTAL_QUESTIONS}
      </span>
      <span> Score:{score}</span>
      {loading && <p>Es lädt...</p>}
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startTrivia}>Start</button>
      ) : null}
      <h2>{`Herzlich Willkommen ${name}!`}</h2>

      {!loading && !gameOver && (
        <QuizCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
          correct={questions[number].correct_answer}
          nextQuestion={nextQuestion}
        />
      )}
    </Wrapper>
  );
}

export default Dashboard;
