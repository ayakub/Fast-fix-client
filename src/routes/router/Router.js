import AllService from "../../componants/Home/AllService/AllService";
import Login from "../../componants/Login/Login/Login";
import Register from "../../componants/Login/Register/Register";
import Blog from "../../componants/Other/Blog/Blog";
import CheckOut from "../../componants/Other/CheckOut/CheckOut";
import SingleServices from "../../componants/Other/SingleServices/SingleServices"


const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../componants/Home/Home/Home");
const { default: Main } = require("../../layouts/Main");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },

            {
                path: '/allService', element: <AllService></AllService>,
                loader: () => fetch('http://localhost:5000/services/all')
            },
            {
                path: '/single/:id',
                element: <SingleServices></SingleServices>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/all/${params.id}`)
            }
            ,
            {
                path: '/checkOut/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/all/${params.id}`)
            }

        ]
    }
])