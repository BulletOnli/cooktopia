import React from "react";
import "../index.scss";
import { useGlobalContext } from "../Context";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import SearchResults from "../components/SearchResults";
import FilteredCategory from "../components/FilteredCategory";
import Error from "./Error";

const Category = () => {
    const { showResults, filteredCategory, loading } = useGlobalContext();

    if (filteredCategory.length === 0 && !loading) {
        return <Error />;
    }

    return (
        <div className="Category-page">
            <Navbar />
            <SubHeader />
            {showResults ? <SearchResults /> : ""}
            <FilteredCategory />
        </div>
    );
};

export default Category;
