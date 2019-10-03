import React from 'react';
import "./NavBar.css";

const NavBar = props => {
    return (
        <div className="navbar">
            <div> Clicky Game</div>
            <div 
            className={props.navTextColor}>{props.navText}
            </div>
            
            <div>
                Score: {props.score} <span className="divider">|</span> High Score: {props.highScore}
            </div>
        </div>
    )
}
export default NavBar;