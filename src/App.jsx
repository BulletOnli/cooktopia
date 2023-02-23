import React from "react";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Meal from "./pages/Meal";
import Favorites from "./pages/Favorites";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/category/meals" element={<Category />} />
                <Route path="/meal-details" element={<Meal />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
