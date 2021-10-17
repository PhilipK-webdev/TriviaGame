import React from 'react'
import "../component/Popup.css";
function Popup({ options, choose, clickHandler }) {
    return (
        <div className="popup-box">
            <div className="box">
                <ul className={options}>
                    <li className={choose} onClick={clickHandler} data-id="1">Sport</li>
                    <li className={choose} onClick={clickHandler} data-id="2">Music</li>
                    <li className={choose} onClick={clickHandler} data-id="3">Film</li>
                    <li className={choose} onClick={clickHandler} data-id="4">Television</li>
                </ul>
            </div>
        </div>




    )
}

export default Popup

