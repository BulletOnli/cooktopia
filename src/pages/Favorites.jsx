import React, { useEffect } from "react";
import "../index.scss";
import { useGlobalContext } from "../Context";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const Favorites = () => {
    const { favoriteMeals, loading } = useGlobalContext();

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="Favorites">
            <Navbar />
            <main>
                <span>
                    <div className="line"></div>
                    <h1>
                        {favoriteMeals.length !== 0
                            ? "Favorites"
                            : "No Favorites"}
                    </h1>
                    <div className="line"></div>
                </span>
                {favoriteMeals.map((meal, index) => (
                    <div className="favorite-box" key={index}>
                        <img src={meal.strMealThumb} alt="Meal img" />
                        <div className="box-details">
                            <h2>{meal.strMeal}</h2>
                            <h4>Category: {meal.strCategory}</h4>
                            <small>Small description</small>

                            <i
                                className="fa-solid fa-xmark"
                                onClick={() => console.log(meal.strMeal)}
                            />
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Favorites;
