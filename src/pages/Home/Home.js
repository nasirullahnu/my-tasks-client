import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center items-center'>
                    <img className='w-96' src="https://i.ibb.co/GJcgm2P/task2.jpg" alt="banner" />
                </div>
                <div>
                    <Link to="/mytask">
                        <button type="button" className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Not Completed</button>
                    </Link>
                    <Link to="/completedtask">
                        <button type="button" className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Completed</button>
                    </Link>
                    <Link to="/addtask">
                        <button type="button" className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Task</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;