import React from "react";
import "../index.scss";
import { useGlobalContext } from "../Context";

const SearchBar = () => {
    const { inputValue, setInputValue, searchMeal } = useGlobalContext();

    return (
        <div className="SearchBar">
            <h1>Find a Recipe</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    searchMeal(inputValue);
                    setInputValue("");
                }}
            >
                <input
                    type="text"
                    placeholder="Search a meal"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
            <h5>Search the recipe of your favorite meal</h5>
        </div>
    );
};

export default SearchBar;
