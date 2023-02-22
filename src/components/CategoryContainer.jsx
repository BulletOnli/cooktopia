import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import { useGlobalContext } from "../Context";

const CategoryContainer = () => {
    const { categories, filterCategory, dispatch } = useGlobalContext();

    return (
        <div className="category-section">
            <h1>Categories</h1>
            <div className="CategoryContainer">
                {categories.map((category) => (
                    <Link
                        to="/category"
                        key={category.idCategory}
                        onClick={() => {
                            dispatch({
                                type: "CLEAR_SEARCH_RESULTS",
                            });
                            filterCategory(category.strCategory);
                        }}
                    >
                        <div className="Meal-box">
                            <img src={category.strCategoryThumb} alt="img" />
                            <p>{category.strCategory}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryContainer;
