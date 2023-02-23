import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    categories: [],
    filteredMeal: [],
    searchResult: [],
    mealDetails: [],
    favoriteMeals: [],
    showResults: false,
    loading: false,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState("");

    // Function to fetch Different Categories
    async function fetchCategories() {
        dispatch({ type: "LOADING" });
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        dispatch({ type: "FETCH_CATEGORY", payload: data.categories });
        dispatch({ type: "LOADING" });
    }

    // Function to fetch Meal name from input value
    async function searchMeal(name) {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        );
        const data = await response.json();
        dispatch({ type: "SEARCH_MEAL", payload: data.meals });
    }

    // Function to fetch meals based of category
    async function filterMeal(category) {
        dispatch({ type: "LOADING" });
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const data = await response.json();
        dispatch({ type: "FILTER_MEAL", payload: data.meals });
        dispatch({ type: "LOADING" });
    }

    // Function to fetch specific meal details
    async function fetchMealDetails(id) {
        dispatch({ type: "LOADING" });
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        dispatch({ type: "FETCH_MEAL_DETAILS", payload: data.meals });

        // To delay the render of the Meal Details
        setTimeout(() => {
            dispatch({ type: "LOADING" });
        }, 500);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <AppContext.Provider
            value={{
                ...state,
                inputValue,
                setInputValue,
                searchMeal,
                dispatch,
                filterMeal,
                fetchMealDetails,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
