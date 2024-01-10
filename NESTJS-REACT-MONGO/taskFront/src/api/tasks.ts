import { createTask, updateTask } from "../interfaces/tasks.interface";

const API = 'http://localhost:3001/api'

export const createTaskRequest = (task: createTask) => 
    fetch(`${API}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const getTasksRequest = () => fetch(`${API}/tasks`);

export const deleteTaskRequest = (id: string) => 
    fetch(`${API}/tasks/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

export const updateTaskRequest = (id: string, task: updateTask) => 
    fetch(`${API}/tasks/${id}`,{
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })