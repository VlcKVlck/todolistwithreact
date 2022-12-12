import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import {SignIn} from "./pages/SignIn";
import {ToDoList} from "./pages/ToDoList";
import {Welcome} from "./pages/Welcome";


 export const router = createBrowserRouter([
     {
         path: "/",
         element: <App/>,
         children: [
             {
                 path: "welcome",
                 element: <Welcome/>,
             },
             {
                 path: "signin",
                 element: <SignIn/>,
             },
             {
                 path: "todolist",
                 element: <ToDoList/>,
             },
            {
                 path: "error",
                 element: <Error/>,
             },


         ]
     }]
 )