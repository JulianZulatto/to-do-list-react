import { CCard, CCardBody, CCardHeader, CContainer } from "@coreui/react";
import TasksInputs from "./TasksInputs";
import TaskList from "./TaskList ";
import { useState } from "react";

function Layout (){
    const [tasks, setTasks] = useState([])

            const handleAddTask = (newTaskText) =>{
                const newTask = {
                    id: Date.now(),
                    text: newTaskText,
                    completed: false
                }
                setTasks([...tasks, newTask]);

            }

            const handleDeleteTask = (taskId) =>{
                const newArrayTask = tasks.filter(task => {
                    return task.id !== taskId})
                setTasks(newArrayTask)
            }

            const handleToggleCompleted = (taskId) =>{
                const updatedTasks = tasks.map(task =>{
                    if(task.id === taskId){
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task
                })
                setTasks(updatedTasks)
            }
    return(
        <CContainer>
            <CCard>
            <CCardHeader className="text-center fs-3 fw-bold">
                Lista de Tareas
            </CCardHeader>
            <CCardBody>
            <TasksInputs onAdd={handleAddTask}/>
            <TaskList task={tasks} onDelete={handleDeleteTask} onToggle={handleToggleCompleted}/>
            </CCardBody>
            </CCard>
        </CContainer>
    )
}

export default Layout;