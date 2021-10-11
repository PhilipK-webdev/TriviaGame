import React, { useEffect, useState } from 'react'
import "../components/CardQuestion.css";
function CardQuestion({ objSport }) {
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (Object.keys(objSport).length !== 0) {
            setQuestion(objSport[index].question.replace(/[^a-zA-Z ]/g, ""));
            setAnswers([...objSport[index].incorrect_answers, objSport[index].correct_answer]);
            setCorrectAnswer(objSport[index].correct_answer);
        }
    }, [objSport])
    const nextQuestion = (e) => {
        e.preventDefault();
        setIndex(index + 1);
        if (index < 10) {
            setQuestion(objSport[index].question.replace(/[^a-zA-Z ]/g, ""));
            setAnswers([...objSport[index].incorrect_answers, objSport[index].correct_answer]);
            setCorrectAnswer(objSport[index].correct_answer);
        } else {
            setQuestion("GAME OVER");
            setAnswers("");
            setCorrectAnswer("")
        }
    }
    return (
        <div>
            <button className="btn-next" onClick={nextQuestion}>Next</button>
            <div className="quiz">
                <div className="quiz__question">
                    <h1><span><i className="fa fa-question-circle" aria-hidden="true"></i>
                    </span>{!question ? "Loading" : <span>{question}<ul>
                        {answers !== "" ? answers.map((res, index) => (
                            <li li key={index}>{res}</li>
                        )) : <li></li>}
                    </ul></span>}</h1>

                </div>
                <div className="quiz__answer">
                    <h1 className="icon"><span><i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                    </span>{correctAnswer}</h1>
                </div>
            </div>
        </div >

    )
}

export default CardQuestion
