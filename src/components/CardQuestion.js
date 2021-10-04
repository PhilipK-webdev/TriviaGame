import React from 'react'
import "../components/CardQuestion.css";
function CardQuestion({ idChoose }) {
    return (
        <div className="quiz">
            <div className="quiz__question">
                <h1><span><i className="fa fa-question-circle" aria-hidden="true"></i>
                </span>What is the Capital of Jamaica?</h1>
            </div>
            <div className="quiz__answer">
                <h1 className="icon"><span><i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                </span>Kingston</h1>
                <button className="btn-next">Next</button>
            </div>
        </div>
    )
}

export default CardQuestion
