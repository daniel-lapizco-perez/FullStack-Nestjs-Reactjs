import React, { createContext, useState, useEffect } from "react";
import { getTasksRequest, deleteTaskRequest, updateTaskRequest } from "../api/tasks";
import { Task, createTask, updateTask } from "../interfaces/tasks.interface";
import { createTaskRequest } from "../api/tasks";

interface TaskContentValues {
    tasks: Task[];
    createTask: (task: createTask) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    updateTask: (id: string, task:updateTask) => Promise<void>;
}

export const TaskContext = createContext<TaskContentValues>({
    tasks: [],
    createTask: async () => {},
    deleteTask: async () => {},
    updateTask: async () => {}
});

    interface Props {
        children: React.ReactNode;
    }

export const TaskProvider: React.FC<Props> = ({children}) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getTasksRequest()
        .then((response) => response.json())
        .then((data) => setTasks(data))
    }, []);

    const createTask = async (task: createTask) => {
        const response = await createTaskRequest(task);
        console.log(response)
        const data = await response.json();
        setTasks([...tasks, data])
    }

    const deleteTask = async (id: string) => {
        const res = await deleteTaskRequest(id);
        console.log(res)
        if(res.status === 204){
            setTasks((tasks.filter(tasks => tasks._id !== id)))
        }
    }

    const updateTask = async (id:string, task: updateTask) => {
        const res = await updateTaskRequest(id, task);
        const data = await res.json();
        console.log(data)
        setTasks(tasks.map((task) => (task._id === id ?  {...task, ...data}: task)))
        
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    );
};