import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";

const Navbar = () => {
    return (
        <div className="Navbar">
            <i className="fa-solid fa-bars"></i>
            <Link to="/">Logo</Link>
            <span>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
            </span>
        </div>
    );
};

export default Navbar;
