import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import { useGlobalContext } from "../Context";

const SearchResults = () => {
    const { searchResult } = useGlobalContext();

    return (
        <div className={`SearchResults`}>
            <h1>Search Result:</h1>
            <div className="SearchContainer">
                {searchResult.map((meal) => (
                    <div className="Meal-box" key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt="img" />
                        <p>{meal.strMeal.substring(0, 20)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
