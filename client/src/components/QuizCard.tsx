import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Wrapper, ButtonWrapper } from "./QuizCard.styled";
import { AnswerObject } from "../pages/Dashboard";
import { shuffleArray } from "../utils";
import { UserContext } from "../context/UserContext";

type Props = {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  answers: string[];
  userAnswer: AnswerObject | undefined;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  incorrectAnswers: string[];
  correctAnswer: string;
  nextQuestion: any;
  number: number;
};

const QuizCard: React.FC<Props> = ({
  question,
  questionNumber,
  totalQuestions,
  answers,
  incorrectAnswers,
  correctAnswer,
  number,
  userAnswer,
  callback,
  nextQuestion,
}) => {
  const [antworten, setAntworten] = useState(answers);
  //@ts-ignore
  const { fiftyUsed, setFiftyUsed } = useContext(UserContext);

  useEffect(() => {
    setAntworten(answers);
  }, [answers]);

  const fiftyfifty = () => {
    const fiftyfifty = antworten.filter(
      (antwort) => antwort !== incorrectAnswers[0]
    );
    const fiftyfifty2 = fiftyfifty.filter(
      (antwort) => antwort !== incorrectAnswers[1]
    );
    setAntworten(fiftyfifty2);
    setFiftyUsed(true);
  };

  return (
    <Wrapper>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      {antworten.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
          {/*@ts-ignore*/}
        </ButtonWrapper>
      ))}
      {!userAnswer && !fiftyUsed ? (
        <button onClick={fiftyfifty}>50/50</button>
      ) : null}

      {userAnswer && number + 1 !== totalQuestions ? (
        <button onClick={nextQuestion}>Next Question</button>
      ) : null}
    </Wrapper>
  );
};

export default QuizCard;
