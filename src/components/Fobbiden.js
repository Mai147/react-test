import React from "react";
import { Link } from "react-router-dom";

const Fobbiden = () => {
    return (
        <div>
            <div>403 Not authorize</div>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Fobbiden;
