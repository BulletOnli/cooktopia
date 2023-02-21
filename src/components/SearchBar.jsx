import React from "react";
import "../index.scss";
import { useGlobalContext } from "../Context";

const SearchBar = () => {
    const { inputValue, setInputValue, searchMeal } = useGlobalContext();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                searchMeal(inputValue);
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
    );
};

export default SearchBar;
