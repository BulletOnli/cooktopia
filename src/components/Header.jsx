import React from "react";
import "../index.scss";
import BigMeal from "../assets/images/BigMeal.png";

const Header = () => {
    return (
        <div className="Header">
            <img src={BigMeal} alt="Big meal img" />
            <div className="header-col-right">
                <div className="header-title">
                    <h1>Fantastic</h1>
                    <span>Recipe</span>
                </div>
                <div className="header-btns">
                    <button className="btn-1">Subscribe</button>
                    <button className="btn-2">Learn more!</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
