import { useTask } from "../context/useTask"
import { Task } from "../interfaces/tasks.interface"

interface Props{
    task: Task
}

export function TaskItem ({task}: Props) {

    const {deleteTask, updateTask} = useTask();

    return(
        <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <div>
                <button onClick={async () => {
                    if(!window.confirm('Are you sure you want to delete it? '))
                    return;
                    await deleteTask(task._id)
                }}>
                    delete
                </button>

                <button onClick={async () => {
                    updateTask(task._id, {
                        done: !task.done
                    });
                }}>
                    {task.done ? "undone" : "done"}
                </button>
            </div>
        </div>
    )
}