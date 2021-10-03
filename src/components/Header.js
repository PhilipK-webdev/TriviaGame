import React from 'react'
import "../components/Header.css"
import Options from './component/Options'
function Header() {
    return (
        <div className="header">
            <div className="header-title">
                <h1 className="title">Welcome To <img src="https://t4.ftcdn.net/jpg/03/86/51/37/240_F_386513740_XvaSu6bhfHTGf0I2Z1DNAdOn80JQ1xtP.jpg"></img> Game <span role="img" aria-label="Good Luck">✌</span></h1>
            </div>
            <div>
                <Options options={"options"} choose={"choose"} />
            </div>
        </div>
    )
}

export default Header
