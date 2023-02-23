import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import { useGlobalContext } from "../Context";

const SearchResults = () => {
    const { searchResult, fetchMealDetails } = useGlobalContext();

    return (
        <div className={`SearchResults`}>
            <h1>Search Result:</h1>
            {searchResult !== null ? (
                <div className="SearchContainer">
                    {searchResult.map((meal) => (
                        <Link
                            to="/meal-details"
                            key={meal.idMeal}
                            onClick={() => fetchMealDetails(meal.idMeal)}
                        >
                            <div className="Meal-box">
                                <img src={meal.strMealThumb} alt="img" />
                                <p>{meal.strMeal.substring(0, 20)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <span>Meal not found, Try again.</span>
            )}
        </div>
    );
};

export default SearchResults;
