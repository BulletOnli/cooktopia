import React from "react";
import { useGlobalContext } from "../Context";
import "../index.scss";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import CategoryContainer from "./CategoryContainer";

const Home = () => {
    const { categories } = useGlobalContext();

    return (
        <div className="Home">
            <Navbar />
            <div className="sub-header">
                <h1>Find a Recipe</h1>
                <SearchBar />
                <h5>Search the recipe of your favorite meal</h5>
            </div>
            <div className="category-section">
                <h1>Categories</h1>
                <CategoryContainer categories={categories} />
            </div>
        </div>
    );
};

export default Home;
