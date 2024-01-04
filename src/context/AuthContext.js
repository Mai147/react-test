import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");
        const userInfo = JSON.parse(localStorage.getItem("user"));
        setIsAuthenticated(!!isLogin);
        setUser(userInfo);
    }, [isAuthenticated]);
    const login = () => {
        localStorage.setItem("isLogin", true);
        localStorage.setItem(
            "user",
            JSON.stringify({
                role: "dev",
            })
        );
        setIsAuthenticated(true);
    };
    const logout = () => {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
    };
    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
