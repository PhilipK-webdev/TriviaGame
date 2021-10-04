import React, { useState } from 'react'
import "../components/Header.css"
import Popup from './component/Popup';

function Header() {
    const [openOptions, setOpenOptions] = useState(false);
    const mouseEnter = () => {
        setOpenOptions(true);
    }
    const mouseLeave = () => {
        setOpenOptions(false)
    }
    const clickHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <div className="header">
            <div className="header-title">
                <h1 className="title">Welcome To <img src="https://t4.ftcdn.net/jpg/03/86/51/37/240_F_386513740_XvaSu6bhfHTGf0I2Z1DNAdOn80JQ1xtP.jpg"></img> Game <span role="img" aria-label="Good Luck">✌</span></h1>
            </div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                {!openOptions ? <p>Categories <i className="fa fa-list-alt" aria-hidden="true"></i></p> : <Popup options={"options"} choose={"choose"} clickHandler={clickHandler} />}
            </div>
        </div>
    )
}

export default Header
