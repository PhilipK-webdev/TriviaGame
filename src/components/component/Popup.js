import React from 'react'
import "../component/Popup.css";
function Popup({ options, choose, clickHandler }) {
    return (
        <div className="popup-box">
            <div className="box">
                <div>
                    <ul className={options}>
                        <li className={choose} onClick={clickHandler}>Sport</li>
                        <li className={choose} onClick={clickHandler}>Music</li>
                        <li className={choose} onClick={clickHandler}>Film</li>
                        <li className={choose} onClick={clickHandler}>Television</li>
                    </ul>
                </div>
            </div>
        </div>




    )
}

export default Popup

