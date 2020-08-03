import React from 'react';
import {Link} from "react-router-dom";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

const NotFound = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <Link to='/'><ArrowBackOutlinedIcon/> Go back to main page</Link>
        </div>)
};

export default NotFound;