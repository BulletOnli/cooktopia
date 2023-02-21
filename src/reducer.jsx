const reducer = (state, action) => {
    if (action.type === "LOADING") {
        return { ...state, loading: !state.loading };
    }
    if (action.type === "FETCH_DATA") {
        return { ...state, categories: action.payload };
    }
    if (action.type === "SEARCH_DATA") {
        return { ...state, searchResult: action.payload };
    }
};

export default reducer;
