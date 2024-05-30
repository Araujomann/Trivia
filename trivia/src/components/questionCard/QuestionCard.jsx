import React, { useState, useMemo } from "react";
import "./questionCard.css";

export const QuestionCard = ({
  id,
  question,
  correctAnswer,
  incorrectAnswer,
  onAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(null);

  const allAnswers = useMemo(() => {
    const answers = [correctAnswer, ...incorrectAnswer];
    answers.sort(() => Math.random() - 0.5);
    return answers;
  }, [correctAnswer, incorrectAnswer]);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) setCorrectAnswers(correctAnswers + 1);
    setCurrentQuestionIndex(currentQuestion + 1);
  };
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    setTimeout(() => {
      onAnswer(correct);

      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 1000);
  };

  return (
    <div className="questionCard" key={id}>
      <h2>{question}</h2>
      <ul>
        {allAnswers.map((answer, index) => {
          return (
            <li key={index}>
              <button
                name="answer"
                onClick={() => handleAnswer(answer)}
                className={
                  selectedAnswer === answer
                    ? isCorrect
                      ? "correct"
                      : "incorrect"
                    : ""
                }
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
