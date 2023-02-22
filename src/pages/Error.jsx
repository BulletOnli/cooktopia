import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";

const Error = () => {
    return (
        <div className="Error-page">
            <h1>Something went wrong!</h1>
            <Link to="/">- Go Back -</Link>
        </div>
    );
};

export default Error;
