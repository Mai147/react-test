import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div>About</div>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
};

export default About;
