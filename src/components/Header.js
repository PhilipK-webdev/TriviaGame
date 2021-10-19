import React, { useState } from 'react'
import "../components/Header.css"
import Popup from './component/Popup';

function Header({ clickHandler }) {
    const [openOptions, setOpenOptions] = useState(false);
    const mouseEnter = () => {
        setOpenOptions(true);
    }
    const mouseLeave = () => {
        setOpenOptions(false)
    }

    return (
        <div>
            <div className="header-title">
                <h1 className="title">Welcome To <img src="https://t4.ftcdn.net/jpg/03/86/51/37/240_F_386513740_XvaSu6bhfHTGf0I2Z1DNAdOn80JQ1xtP.jpg"></img> Game</h1>
            </div>
            <div className="header">
                <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    {!openOptions ? <p className="p-categorie">Categories </p> : <Popup options={"options"} choose={"choose"} clickHandler={clickHandler} />}
                </div>
            </div>
        </div>


    )
}

export default Header
