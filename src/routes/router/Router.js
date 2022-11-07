import Login from "../../componants/Login/Login/Login";
import Register from "../../componants/Login/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../componants/Home/Home/Home");
const { default: Main } = require("../../layouts/Main");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> }

        ]
    }
])