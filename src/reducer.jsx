const reducer = (state, action) => {
    if (action.type === "FETCH_DATA") {
        return { ...state, categories: action.payload.categories };
    }
};

export default reducer;
