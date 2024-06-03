import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { QuestionCard } from "@components/questionCard/QuestionCard";
import { triviaFetch } from "../../axios/config";
import axios from "axios";
import "./Match.css";

export const Match = () => {
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameReset, setGameReset] = useState(false);
    const username = location.state.username //está sendo usado para acessar o estado passado durante a navegação.
                                            /*Neste caso, location.state.username está acessando o nome de usuário que 
                                            foi passado como estado durante a navegação. Isso permite que você passe 
                                            dados entre diferentes rotas sem precisar usar um estado global ou local.*/

    const handleTotalCorrectAnswer = (isCorrect) => {
        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
            console.log('total de respostas corretas:', correctAnswers + 1);
        }
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setGameOver(true);
            postScore(username, correctAnswers);
        }
    };

    const fetchQuestions = async () => {
        try {
            const response = await triviaFetch.get(
                "/v2/questions?categories=science"
            );
            const data = response.data;
            setQuestions(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [gameReset]);

    const postScore = async (name, score) => {
        try {
            const response = await axios.post("http://localhost:3000/score", {
                name: name,
                score: score,
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error posting score:", error);
        }
    };

    const handlePlayAgain = () => {
        setGameOver(false);
        setGameReset(true);
        setTimeout(() => setGameReset(false), 0);
        setCorrectAnswers(0);
        setCurrentQuestionIndex(0);
    };

    if (gameOver) {
        return (
            <div>
                <div className="game-over-container">
                    <h2 className="last-title">Parabéns {username}!</h2>
                    <p className="final-paragraph">
                        Você acertou {correctAnswers} de {questions.length}{" "}
                        perguntas.
                    </p>
                    <button onClick={handlePlayAgain}>Jogar Novamente</button>
                    <button onClick={() => navigate("/")}>Sair</button>
                </div>
            </div>
        );
    }

    return (
        <div className="match">
            {questions.length === 0 && <h3>Loading...</h3>}
            {questions.length > 0 && (
                <QuestionCard
                    question={questions[currentQuestionIndex].question.text}
                    correctAnswer={
                        questions[currentQuestionIndex].correctAnswer
                    }
                    incorrectAnswer={
                        questions[currentQuestionIndex].incorrectAnswers
                    }
                    id={questions[currentQuestionIndex].id}
                    onAnswer={handleTotalCorrectAnswer}
                />
            )}
        </div>
    );
};
