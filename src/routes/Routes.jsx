import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import SingleChef from "../pages/SingleChef/SingleChef";
import Recipe from "../pages/Home/Recipe";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage> ,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch("https://recipe-server-syed-anwarul-haque-piash.vercel.app/recipes")
            },
            {
                path: "recipes/:id",
                element: <PrivateRoutes><SingleChef></SingleChef></PrivateRoutes>,
                loader: ({params})=>fetch(`https://recipe-server-syed-anwarul-haque-piash.vercel.app/recipes/${params.id}`)
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    },
    // {
    //     path:"/login",
    //     element: <Login></Login>
    // },
    // {
    //     path:"/register",
    //     element: <Register></Register>
    // }
    
]);
export default router;
