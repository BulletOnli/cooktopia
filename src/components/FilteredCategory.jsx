import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import { useGlobalContext } from "../Context";

const FilteredCategory = () => {
    const { filteredCategory, fetchMealDetails, loading } = useGlobalContext();

    if (loading) {
        return <h1>Loading meals...</h1>;
    }

    return (
        <div className="FilteredCategory">
            <h1>Meals</h1>
            <div className="FilteredCategory-container">
                {filteredCategory.map((category) => (
                    <Link
                        to="/meal"
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

export default FilteredCategory;
