import React, { useEffect, useState } from 'react';
import "../components/CardQuestion.css";
function CardQuestion({ objSport, objMusic, objFilm, objTelevision, idClick }) {
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [index, setIndex] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [title, setTitle] = useState("");

    useEffect(() => {
        setDisabled(false);
        if (
            Object.keys(objSport).length !== 0 ||
            Object.keys(objMusic).length !== 0 ||
            Object.keys(objFilm).length !== 0 ||
            Object.keys(objTelevision).length !== 0
        ) {
            switch (idClick) {
                case "1":
                    setQuestion(objSport[index].question.replace(/[^a-zA-Z ]/g, ""));
                    setAnswers([...objSport[index].incorrect_answers, objSport[index].correct_answer]);
                    setCorrectAnswer(objSport[index].correct_answer);
                    setTitle("Sport");
                    break;
                case "2":
                    setQuestion(objMusic[index].question.replace(/[^a-zA-Z ]/g, ""));
                    setAnswers([...objMusic[index].incorrect_answers, objMusic[index].correct_answer]);
                    setCorrectAnswer(objMusic[index].correct_answer);
                    setTitle("Music");
                    break;
                case "3":
                    setQuestion(objFilm[index].question.replace(/[^a-zA-Z ]/g, ""));
                    setAnswers([...objFilm[index].incorrect_answers, objFilm[index].correct_answer]);
                    setCorrectAnswer(objFilm[index].correct_answer);
                    setTitle("Film");
                    break;
                case "4":
                    setQuestion(objTelevision[index].question.replace(/[^a-zA-Z ]/g, ""));
                    setAnswers([...objTelevision[index].incorrect_answers, objTelevision[index].correct_answer]);
                    setCorrectAnswer(objTelevision[index].correct_answer);
                    setTitle("Television");
                    break;
                default:
                    break;
            }

        }
    }, [objSport, objMusic, objFilm, objTelevision])

    const nextQuestion = (e) => {
        e.preventDefault();

        if (index < 10 && (
            Object.keys(objSport).length !== 0 ||
            Object.keys(objMusic).length !== 0 ||
            Object.keys(objFilm).length !== 0 ||
            Object.keys(objTelevision).length !== 0
        )) {
            switch (idClick) {
                case "1":
                    setQuestion(objSport[index].question.replace(/[^a-zA-Z ]/g, ""));
                    setAnswers([...objSport[index].incorrect_answers, objSport[index].correct_answer]);
                    setCorrectAnswer(objSport[index].correct_answer);
                    break;
                case "2":
                    setQuestion(objMusic[index].question.replace(/[^a-zA-Z ]/g, ""));
                    setAnswers([...objMusic[index].incorrect_answers, objMusic[index].correct_answer]);
                    setCorrectAnswer(objMusic[index].correct_answer);
                    break;
                case "3":
                    setQuestion(objFilm[index].question.replace(/[^a-zA-Z ]/g, ""));
                    setAnswers([...objFilm[index].incorrect_answers, objFilm[index].correct_answer]);
                    setCorrectAnswer(objFilm[index].correct_answer);
                    break;
                case "4":
                    setQuestion(objTelevision[index].question.replace(/[^a-zA-Z ]/g, ""));
                    setAnswers([...objTelevision[index].incorrect_answers, objTelevision[index].correct_answer]);
                    setCorrectAnswer(objTelevision[index].correct_answer);
                    break;
                default:
                    break;
            }
            setIndex(index + 1);
        } else {
            setQuestion("");
            setAnswers("");
            setCorrectAnswer("");
            setIndex(0);
        }
    }
    return (
        <div className="div-main">
            <div className="card-question">
                <div className="quiz">
                    <div className="quiz__question">
                        <h1><span><i className="fa fa-question-circle" aria-hidden="true"></i>
                        </span>{!question ? "To start the game please choose from the Categorie" : <div>
                            <p>{title}</p>
                            <span>{question}
                                <ul>
                                    {answers !== "" ? answers.map((res, index) => (
                                        <li key={index}>* {res}</li>
                                    )) : <li></li>}
                                </ul></span></div>}</h1>
                    </div>
                    <div className="quiz__answer">
                        <h1 className="icon"><span><i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                        </span><p className="correct-answer">{correctAnswer}</p></h1>
                    </div>
                </div>
            </div>
            <div className="btn-div">
                <button className="btn-next" onClick={nextQuestion} disabled={!question ? true : false}>Next</button>
            </div>
        </div >


    )
}

export default CardQuestion
