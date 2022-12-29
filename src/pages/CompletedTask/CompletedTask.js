import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const CompletedTask = () => {
    const {user} = useContext(AuthContext)

    const url = `https://my-task-server-theta.vercel.app/myTask?email=${user?.email}`
    const {data: allTask =[], isLoading, refetch} = useQuery({
        queryKey : ['myTask'],
        queryFn: async() => {
            try{
                const res = fetch(url);
                const data = await (await res).json();
                return data;
            }
            catch(error){

            }
        }
    })

    // delete completed tasks 
    const handleDelete = (id) => {
        console.log(id);
        const proced = window.confirm("Confirm Delete?");
        if (proced) {
          fetch(`https://my-task-server-theta.vercel.app/myTask/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.deletedCount > 0){
                toast.success('Task deleted')
                refetch();
              }
            });
        }
      };

      if(isLoading){
        return <Loading></Loading>
      }

    return (
        <div>
            <div>
            <h1 className='text-3xl my-4'>Your Completed Tasks</h1>
            <Link to="/mytask">
                <button type="button" className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See not completed</button>
            </Link>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-5'>
                {  
                    allTask.map(task => task.status === "completed" &&  <div key={task._id} className="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="h.h">
                        <img alt="task" className="p-8 rounded-t-lg" src={task.taskImage} />
                    </a>
                    <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{task.taskName}</h5>
                        <div className="flex items-center mt-2.5 mb-5">
                            <p className='text-white'>{task.taskDetails}</p>
                        </div>
                        <div className="flex items-center mt-2.5 mb-5">
                            <p className='text-white'>Action Date : </p>
                            <p className='text-yellow-400'>{task.taskDate}</p>
                        </div>
                        <div className="flex items-center mt-2.5 mb-5">
                            <p className='text-white'>Added on : </p>
                            <p className='text-white'>{task.taskAdded}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Comment</button>
                            <button onClick={() => handleDelete(task._id)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
                            
                            
                        </div>
                    </div>
                </div>  )
                }
            </div>
            </div>
           

        
        </div>
    );
};

export default CompletedTask;