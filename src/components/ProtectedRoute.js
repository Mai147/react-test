import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Fobbiden from "./Fobbiden";

const ProtectedRoute = ({ roles = [], Component }) => {
    const { isAuthenticated, user } = useAuth();
    const location = useLocation();
    if (isAuthenticated === null) return <div>Loading</div>;
    if (!isAuthenticated)
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    const isAllow = roles?.length === 0 || roles?.includes(user.role);
    return isAllow ? <Component /> : <Fobbiden />;
};

export default ProtectedRoute;
