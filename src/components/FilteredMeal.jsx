import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import { useGlobalContext } from "../Context";

const FilteredMeal = () => {
    const { filteredMeal, fetchMealDetails, loading } = useGlobalContext();

    if (loading) {
        return <h1>Loading meals...</h1>;
    }

    return (
        <div className="FilteredMeal">
            <h1>Filtered Meals</h1>
            <div className="FilteredMeal-container">
                {filteredMeal.map((category) => (
                    <Link
                        to="/meal-details"
                        key={category.idMeal}
                        onClick={() => fetchMealDetails(category.idMeal)}
                    >
                        <div className="Meal-box">
                            <img src={category.strMealThumb} alt="img" />
                            <p>{category.strMeal.substring(0, 20)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FilteredMeal;
