import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute
                            Component={Home}
                            roles={["dev", "pl", "pm"]}
                        />
                    }
                ></Route>
                <Route
                    path="/about"
                    element={
                        <ProtectedRoute Component={About} roles={["pm"]} />
                    }
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
