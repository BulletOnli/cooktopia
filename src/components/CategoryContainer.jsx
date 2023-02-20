import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";

const CategoryContainer = (props) => {
    return (
        <div className="CategoryContainer">
            {props.categories.map((category) => (
                <Link to="/category" key={category.idCategory}>
                    <div className="Category">
                        <img src={category.strCategoryThumb} alt="img" />
                        <p>{category.strCategory}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CategoryContainer;
