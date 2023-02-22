import React from "react";
import { useGlobalContext } from "../Context";
import "../index.scss";

import Navbar from "../components/Navbar";
import CategoryContainer from "../components/CategoryContainer";
import SearchResults from "../components/SearchResults";
import SubHeader from "../components/SubHeader";
import Loader from "../components/Loader";

const Home = () => {
    const { showResults, loading } = useGlobalContext();

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="Home">
            <Navbar />
            <SubHeader />
            {showResults ? <SearchResults /> : ""}
            <CategoryContainer />
        </div>
    );
};

export default Home;
