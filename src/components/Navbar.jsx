import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.scss";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <div className="Navbar">
                <i
                    className="fa-solid fa-bars"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                ></i>
                <Link to="/" className="logo">
                    CookTopia
                </Link>
                <span>
                    <a
                        href="https://www.facebook.com/Solidbullet"
                        target="_blank"
                    >
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/gem.muel/"
                        target="_blank"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://github.com/BulletOnli" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </span>
            </div>
            <div
                className={`NavLinks-container ${
                    isNavOpen ? "showNavLinks" : ""
                }`}
            >
                <Link to="/">
                    <i className="fa-solid fa-house"></i> Home
                </Link>
                <Link to="/favorites">
                    <i className="fa-solid fa-heart"></i> Favorites
                </Link>
                <Link to="#">
                    <i className="fa-solid fa-circle-info"></i> About
                </Link>
            </div>
        </>
    );
};

export default Navbar;
