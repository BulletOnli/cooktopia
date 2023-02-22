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
    if (action.type === "FILTER_CATEGORY") {
        return { ...state, filteredCategory: action.payload };
    }
    if (action.type === "CLEAR_SEARCH_RESULTS") {
        return { ...state, searchResult: [], showResults: false };
    }
    if (action.type === "FETCH_MEAL_DETAILS") {
        return { ...state, mealDetails: action.payload, loading: false };
    }
};

export default reducer;
