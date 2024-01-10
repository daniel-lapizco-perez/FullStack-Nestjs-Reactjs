import { ChangeEvent, FormEvent, useState } from "react";
import { useTask } from "../context/useTask";

function TaskForm(){

    const [task, setTask] = useState({
        title: "",
        description: "",
        done: false
    })

    const {createTask} = useTask();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {target} = e
        setTask({...task, [target.name]: target.value})
    }
        
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(task);
        createTask(task);
    }

    return(
        <>
            <h1 className="flex justify-center text-lg">TaskForm</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                        Title
                    </label>
                    <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whitedark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required onChange={handleChange}>
                    
                    </input>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                        Description
                    </label>
                    <textarea rows={3} name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whitedark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required onChange= {handleChange}>

                    </textarea>
                </div>

                <label className="mt-2 inline-flex items-center gap-x-2">
                    <input type="checkbox" className="h-5 w-5 text-blue-500" 
                    onChange={(e) => setTask({...task, done: !task.done})}
                    />
                    <span>Done</span>
                </label>

                <button type="submit" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">Save</button>

            </form>
        </>
    )
}

export default TaskForm;