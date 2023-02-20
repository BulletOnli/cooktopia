import React from "react";
import "../index.scss";

const SearchBar = () => {
    return (
        <form>
            <input type="text" placeholder="Search a meal" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </form>
    );
};

export default SearchBar;
