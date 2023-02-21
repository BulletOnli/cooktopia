import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    categories: [],
    filteredCategory: [],
    searchResult: [],
    loading: false,
    errorMessage: "Meal not Found, try again",
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState("");

    async function fetchCategories() {
        dispatch({ type: "LOADING" });
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        dispatch({ type: "FETCH_DATA", payload: data.categories });
        dispatch({ type: "LOADING" });
    }

    async function searchMeal(name) {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        );
        const data = await response.json();
        // if error show error modal
        if (data.meals === null) {
            alert("Error");
            return;
        }
        dispatch({ type: "SEARCH_DATA", payload: data.meals });
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <AppContext.Provider
            value={{ ...state, inputValue, setInputValue, searchMeal }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
