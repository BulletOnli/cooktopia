import React from "react";
import "../index.scss";
import { useGlobalContext } from "../Context";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Error from "./Error";

const Meal = () => {
    const { mealDetails, loading } = useGlobalContext();

    if (mealDetails.length === 0 && !loading) {
        return <Error />;
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="Meal-page">
            <Navbar />
            <div className="mealInfo-container">
                <div className="info-header">
                    <span>
                        <h1>{mealDetails[0].strMeal}</h1>
                        <h4>Category: {mealDetails[0].strCategory}</h4>

                        <small>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate aliquid ullam autem aperiam. Quae
                            expedita eligendi eos, excepturi quod tempora?
                        </small>
                    </span>
                    <img src={mealDetails[0].strMealThumb} alt="img" />
                </div>
                <div className="line"></div>
                <div className="ingredients-container">
                    <h2>Ingredients</h2>
                    <ul>
                        <li>{mealDetails[0].strIngredient1}</li>
                        <li>{mealDetails[0].strIngredient2}</li>
                        <li>{mealDetails[0].strIngredient3}</li>
                        <li>{mealDetails[0].strIngredient4}</li>
                        <li>{mealDetails[0].strIngredient5}</li>
                        <li>{mealDetails[0].strIngredient6}</li>
                        <li>{mealDetails[0].strIngredient7}</li>
                        <li>{mealDetails[0].strIngredient8}</li>
                        <li>{mealDetails[0].strIngredient9}</li>
                        <li>{mealDetails[0].strIngredient10}</li>
                        <li>{mealDetails[0].strIngredient11}</li>
                        <li>{mealDetails[0].strIngredient12}</li>
                        <li>{mealDetails[0].strIngredient13}</li>
                        <li>{mealDetails[0].strIngredient14}</li>
                        <li>{mealDetails[0].strIngredient15}</li>
                        <li>{mealDetails[0].strIngredient16}</li>
                        <li>{mealDetails[0].strIngredient17}</li>
                        <li>{mealDetails[0].strIngredient18}</li>
                        <li>{mealDetails[0].strIngredient19}</li>
                        <li>{mealDetails[0].strIngredient20}</li>
                    </ul>
                </div>
                <div className="line"></div>
                <div className="instructions-container">
                    <h2>Instructions</h2>
                    <p>{mealDetails[0].strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default Meal;
