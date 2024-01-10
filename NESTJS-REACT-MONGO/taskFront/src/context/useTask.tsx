import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const useTask = () => {
    const context = useContext(TaskContext);
    if(!context) throw new Error('useContext must be used within a TaskProvider');
    return context;
}