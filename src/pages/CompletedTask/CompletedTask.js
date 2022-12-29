import React from 'react';

const CompletedTask = () => {
    return (
        <div>
            <h1>This is completed task</h1>

            
        




            {/* <div key={task._id} class="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="h.h">
                        <img alt="task" class="p-8 rounded-t-lg" src={task.taskImage} />
                    </a>
                    <div class="px-5 pb-5">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{task.taskName}</h5>
                        <div class="flex items-center mt-2.5 mb-5">
                            <p className='text-white'>{task.taskDetails}</p>
                        </div>
                        <div class="flex items-center mt-2.5 mb-5">
                            <p className='text-white'>Action Date : </p>
                            <p className='text-yellow-400'>{task.taskDate}</p>
                        </div>
                        <div class="flex items-center mt-2.5 mb-5">
                            <p className='text-white'>Added on : </p>
                            <p className='text-white'>{task.taskAdded}</p>
                            <p className='text-white'>{task.userName}</p>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                            <button onClick={() => handleDelete(task._id)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
                            {
                                task.status !== "completed" &&(
                                    <button onClick={() => endTask(task._id)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">End Task</button>
                                )
                            }
                            {
                                task.status === "completed" && <p className='text-white'>Completed</p>
                            }
                            
                        </div>
                    </div>
                </div> */}





        </div>
    );
};

export default CompletedTask;