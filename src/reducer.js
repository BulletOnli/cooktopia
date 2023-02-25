const reducer = (state, action) => {
    if (action.type === "FETCH_CATEGORY") {
        return { ...state, categories: action.payload };
    }
    if (action.type === "SEARCH_MEAL") {
        return { ...state, searchResult: action.payload, showResults: true };
    }
    if (action.type === "LOADING") {
        return { ...state, loading: !state.loading };
    }
    if (action.type === "FILTER_MEAL") {
        return { ...state, filteredMeal: action.payload };
    }
    if (action.type === "CLEAR_SEARCH_RESULTS") {
        return { ...state, searchResult: [], showResults: false };
    }
    // BUG HERE
    if (action.type === "FETCH_MEAL_DETAILS") {
        const newData = action.payload.map((data) => {
            // this hardcoded isFavorited is the problem
            // it return always false every render of the meal
            return { ...data, isFavorited: false };
        });
        return { ...state, mealDetails: newData };
    }
    if (action.type === "TOGGLE_FAVORITES") {
        const updatedMeal = {
            ...state.mealDetails[0],
            isFavorited: !state.mealDetails[0].isFavorited,
        };

        return {
            ...state,
            mealDetails: [updatedMeal],
            favoriteMeals: [...state.favoriteMeals, updatedMeal],
        };
    }
    if (action.type === "RENDER_FAVORITES") {
        const updatedFavorites = state.favoriteMeals.filter(
            (meal) => meal.isFavorited
        );

        return {
            ...state,
            favoriteMeals: updatedFavorites,
        };
    }
    if (action.type === "REMOVE_FROM_FAVORITES") {
        return {
            ...state,
            favoriteMeals: action.payload,
        };
    }
};

export default reducer;
