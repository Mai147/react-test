import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Home = () => {
    const { logout, user } = useAuth();
    return (
        <div>
            <div>Home</div>
            <div>
                <Link to={"/about"}>
                    <button>About</button>
                </Link>
            </div>
            <button onClick={logout}>Logout</button>
            <div>{user?.role}</div>
        </div>
    );
};

export default Home;
