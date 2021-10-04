import React from 'react'
import "../component/Popup.css";
function Popup(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <div >
                    <ul className={props.options}>
                        <li className={props.choose}>Sport</li>
                        <li className={props.choose}>Music</li>
                        <li className={props.choose}>Film</li>
                        <li className={props.choose}>Television</li>
                    </ul>
                </div>
            </div>
        </div>




    )
}

export default Popup

