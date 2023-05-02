import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import SingleChef from "../pages/SingleChef/SingleChef";
import Recipe from "../pages/Home/Recipe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch("http://localhost:5000/recipes")
            },
            {
                path: "recipes/:id",
                element:<SingleChef></SingleChef>,
                loader: ({params})=>fetch(`http://localhost:5000/recipes/${params.id}`)
            }
        ]
    },
    
]);
export default router;
