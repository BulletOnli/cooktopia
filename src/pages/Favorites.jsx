import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import "../index.scss";
import { useGlobalContext } from "../Context";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const Favorites = () => {
    const {
        favoriteMeals,
        loading,
        removeMealFromFavorites,
        fetchMealDetails,
    } = useGlobalContext();

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
                {favoriteMeals.map((meal) => (
                    <div className="favorite-box" key={nanoid()}>
                        <img src={meal.strMealThumb} alt="Meal img" />
                        <div className="box-details">
                            <Link
                                to="/meal-details"
                                onClick={() => fetchMealDetails(meal.idMeal)}
                            >
                                <h2>{meal.strMeal}</h2>
                            </Link>
                            <h4>Category: {meal.strCategory}</h4>
                            <small>Small description</small>
                        </div>
                        <i
                            className="fa-solid fa-xmark"
                            onClick={() => {
                                removeMealFromFavorites(meal.idMeal);
                            }}
                        />
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Favorites;
