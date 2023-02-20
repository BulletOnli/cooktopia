import React from "react";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import FilteredCategory from "./components/FilteredCategory";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/category" element={<FilteredCategory />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
