import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import { useGlobalContext } from "../Context";

const CategoryContainer = () => {
    const { categories, loading } = useGlobalContext();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="category-section">
            <h1>Categories</h1>
            <div className="CategoryContainer">
                {categories.map((category) => (
                    <Link to="/category" key={category.idCategory}>
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
