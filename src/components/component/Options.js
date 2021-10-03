import React from 'react'
import "../component/Options.css"
function Options(props) {
    return (
        <div className="trivia">
            <ul className={props.options}>
                <li className={props.choose}>Sport</li>
                <li className={props.choose}>Music</li>
                <li className={props.choose}>Film</li>
                <li className={props.choose}>Television</li>
            </ul>
        </div>
    )
}

export default Options
