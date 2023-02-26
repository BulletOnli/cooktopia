import React from "react";
import { useGlobalContext } from "../Context";
import "../index.scss";

import Navbar from "../components/Navbar";
import CategoryContainer from "../components/CategoryContainer";
import SearchResults from "../components/SearchResults";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    const { showResults, loading } = useGlobalContext();

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="Home">
            <Navbar />
            <Header />
            <SearchBar />
            {showResults ? <SearchResults /> : ""}
            <CategoryContainer />
            <Footer />
        </div>
    );
};

export default Home;
