import React from "react";
import "../index.scss";
import SearchBar from "./SearchBar";

const SubHeader = () => {
    return (
        <div className="SubHeader">
            <h1>Find a Recipe</h1>
            <SearchBar />
            <h5>Search the recipe of your favorite meal</h5>
        </div>
    );
};

export default SubHeader;
