import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import "../index.scss";

const Navbar = () => {
    const { mealDetails, favoriteMeals, dispatch } = useGlobalContext();

    return (
        <div className="Navbar">
            <Link
                to="/favorites"
                onClick={() => {
                    dispatch({ type: "RENDER_FAVORITES" });
                }}
            >
                <i className="fa-solid fa-bars"></i>
            </Link>
            <Link
                to="/"
                id="back"
                onClick={() => {
                    console.log(favoriteMeals);
                }}
            >
                back
            </Link>
            {/* <Link to="/">Logo</Link> */}
            <span>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
            </span>
        </div>
    );
};

export default Navbar;
