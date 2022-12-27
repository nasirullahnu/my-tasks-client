
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AddTask from "../../pages/AddTask/AddTask";
import CompletedTask from "../../pages/CompletedTask/CompletedTask";
import Home from "../../pages/Home/Home";
import MyTask from "../../pages/MyTask/MyTask";


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
            }
        ]
    }
])

export default router;