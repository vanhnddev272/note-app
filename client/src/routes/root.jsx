import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";

const AuthLayout = () => {
    return <AuthProvider><Outlet/></AuthProvider>
}

export default createBrowserRouter([
    {
        element: <AuthLayout/>,
        children: [
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])