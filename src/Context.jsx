import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
    categories: [],
    filteredCategory: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function fetchCategories() {
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        dispatch({ type: "FETCH_DATA", payload: data });
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
