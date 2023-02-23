import React from "react";
import "../index.scss";
import { useGlobalContext } from "../Context";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import SearchResults from "../components/SearchResults";
import FilteredMeal from "../components/FilteredMeal";
import Error from "./Error";

const Category = () => {
    const { showResults, filteredMeal, loading } = useGlobalContext();

    if (filteredMeal.length === 0 && !loading) {
        return <Error />;
    }

    return (
        <div className="Category-page">
            <Navbar />
            <SubHeader />
            {showResults ? <SearchResults /> : ""}
            <FilteredMeal />
        </div>
    );
};

export default Category;
