import React, { useState, useMemo } from "react";
import "./questionCard.css";

export const QuestionCard = ({
    id,
    question,
    correctAnswer,
    incorrectAnswer,
    onAnswer
}) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const shuffleAnswers = (array) => {
        for( let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const cachedAllAnswers = useMemo(() => {
        const answers = [correctAnswer, ...incorrectAnswer];
        shuffleAnswers(answers);
        return answers;
    }, [correctAnswer, incorrectAnswer]);

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
                {cachedAllAnswers.map((answer, index) => {
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
