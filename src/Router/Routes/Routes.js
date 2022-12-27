
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AddTask from "../../pages/AddTask/AddTask";
import CompletedTask from "../../pages/CompletedTask/CompletedTask";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyTask from "../../pages/MyTask/MyTask";
import Signup from "../../pages/Signup/Signup";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/mytask',
                element : <MyTask></MyTask>
            },
            {
                path : '/addtask',
                element : <AddTask></AddTask>
            },
            {
                path : '/completedtask',
                element : <CompletedTask></CompletedTask>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <Signup></Signup>
            }
        ]
    }
])

export default router;