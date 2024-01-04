import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { login, isAuthenticated } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            const { from } = location.state || { from: { pathname: "/" } };
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, location, navigate]);
    return <button onClick={login}>Login</button>;
};

export default Login;
