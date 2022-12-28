import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddTask = () => {
    const {user} = useContext(AuthContext)
    const imgHostKey = process.env.REACT_APP_imgbb_key
    // console.log(imgHostKey)
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const navigate = useNavigate()

    const addTask = event => {
        event.preventDefault()
        const form = event.target;
        const task = form.task.value;
        const details = form.details.value;
        const actionDate = form.date.value;
        const image = form.img.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imgHostKey}`

        if(!user){
            return toast.error('Please login first')
        }

        fetch(url,{
            method : 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url)
                const myTask = {
                    taskName : task,
                    taskDetails : details,
                    taskImage : imgData.data.url,
                    taskDate : actionDate,
                    userEmail : user.email,
                    userName : user.displayName,
                    taskAdded : date
                }
                console.log(myTask)
                // add my all task to database 
                fetch('http://localhost:5000/allTask', {
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json',
                    },
                    body : JSON.stringify(myTask)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    toast.success('Task added')
                    navigate('/mytask')
                })
            }
        })
        // console.log(task, details, date, image);
    }

  return (
    <div className='flex flex-col justify-center items-center mt-8 '>
        <h1 className="text-3xl my-4">Add your task</h1>
      <form onSubmit={addTask} className="w-1/2 bg-green-600 p-6 shadow-2xl">
        {/* task name  */}
        <div class="relative mb-3">
          <input
            type="text"
            name="task"
            id="floating_filled"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_filled"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Task name
          </label>
        </div>

        {/* task details  */}
        <div class="relative mb-3">
          <input
            type="text"
            name="details"
            id="floating_filled"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_filled"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Task Details
          </label>
        </div>

        {/* date  */}
        <div class="relative mb-3">
          <input
            type="text"
            name="date"
            id="floating_filled"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_filled"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Action Date
          </label>
        </div>

        {/* file input  */}
            <input name="img" class="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file"/>


        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
