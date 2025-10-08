import { CCard, CCardBody, CCardHeader, CContainer } from "@coreui/react";
import TasksInputs from "./TasksInputs";
import TaskList from "./TaskList ";
import { useState } from "react";
import FilterButtons from "../Components/FilterButtons";

function Layout (){
    const [tasks, setTasks] = useState([])
    const [filterStatus, setFilterStatus] =useState("all");

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

            const handleFilterTasks = (newStatus) =>{
                setFilterStatus(newStatus);
            }

            let filteredTasks = tasks;

            if(filterStatus === "active"){
                filteredTasks = tasks.filter(task => !task.completed)
            } else if (filterStatus === "completed"){
                filteredTasks = tasks.filter(task => task.completed)
            }
    return(
        <CContainer>
            <CCard>
            <CCardHeader className="text-center fs-3 fw-bold">
                Lista de Tareas
            </CCardHeader>
            <CCardBody>
            <TasksInputs onAdd={handleAddTask}/>
            <FilterButtons onFilterChange={handleFilterTasks} currentFilter={filterStatus}></FilterButtons>
            <TaskList task={filteredTasks} onDelete={handleDeleteTask} onToggle={handleToggleCompleted}/>
            </CCardBody>
            </CCard>
        </CContainer>
    )
}

export default Layout;