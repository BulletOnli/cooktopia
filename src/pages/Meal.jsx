import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.scss";
import { useGlobalContext } from "../Context";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Error from "./Error";

const Meal = () => {
    const navigate = useNavigate();
    const { mealDetails, loading, dispatch } = useGlobalContext();
    const ingredientsArray = [];
    const mealTags = [];

    if (loading) {
        return <Loader />;
    }

    if (mealDetails.length === 0 && !loading) {
        return <Error />;
    }

    if (mealDetails[0].strTags) {
        mealTags.push(mealDetails[0].strTags.split(","));
    }

    for (let i = 0; i <= 20; i++) {
        const ingredient = mealDetails[0][`strIngredient${i}`];
        const measurement = mealDetails[0][`strMeasure${i}`];
        if (ingredient) {
            ingredientsArray.push(`${ingredient} ( ${measurement} )`);
        }
    }

    const instructions = mealDetails[0].strInstructions.split("\r\n");

    return (
        <div className="Meal-page">
            <Navbar />
            <div className="mealInfo-container">
                <div className="nav-btns">
                    <i
                        className="fa-solid fa-arrow-left"
                        onClick={() => navigate("/")}
                    ></i>
                    <button
                        onClick={() => {
                            dispatch({
                                type: "TOGGLE_FAVORITES",
                                payload: mealDetails[0].idMeal,
                            });
                        }}
                    >
                        {mealDetails[0].isFavorited ? (
                            <>
                                <i className="fa-solid fa-heart" />
                                Favorite
                            </>
                        ) : (
                            <>
                                <i className="fa-regular fa-heart" />
                                !Favorite
                            </>
                        )}
                    </button>
                </div>

                <div className="info-header">
                    <div className="meal-details">
                        <h1>{mealDetails[0].strMeal}</h1>
                        <h4>
                            Category: <span>{mealDetails[0].strCategory}</span>
                        </h4>
                        <div className="tags">
                            <h5>Tags:</h5>
                            {mealTags.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </div>
                        <h5>
                            Tutorial:{" "}
                            <Link
                                to={mealDetails[0].strYoutube}
                                target="_blank"
                            >
                                {mealDetails[0].strYoutube}
                            </Link>
                        </h5>
                    </div>
                    <img src={mealDetails[0].strMealThumb} alt="img" />
                </div>

                <div className="line"></div>

                <div className="ingredients-container">
                    <h2>Ingredients</h2>
                    <ul>
                        {ingredientsArray.map((ingredient, index) => (
                            <li key={index}>• {ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div className="line"></div>

                <div className="instructions-container">
                    <h2>Instructions</h2>
                    {instructions.map((instruction, index) => (
                        <p key={index}>- {instruction}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Meal;
