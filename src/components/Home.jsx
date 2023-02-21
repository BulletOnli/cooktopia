import React, { useEffect } from "react";
import { useGlobalContext } from "../Context";
import "../index.scss";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import CategoryContainer from "./CategoryContainer";
import SearchResults from "./SearchResults";

const Home = () => {
    const { searchResult } = useGlobalContext();

    return (
        <div className="Home">
            <Navbar />
            <div className="sub-header">
                <h1>Find a Recipe</h1>
                <SearchBar />
                <h5>Search the recipe of your favorite meal</h5>
            </div>
            {searchResult.length ? <SearchResults /> : ""}
            <CategoryContainer />
        </div>
    );
};

export default Home;
