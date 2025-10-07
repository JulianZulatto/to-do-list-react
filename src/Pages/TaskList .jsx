import { CButton, CFormCheck, CListGroup, CListGroupItem } from "@coreui/react";


function TaskList ({task, onDelete, onToggle}){

    return (
    <CListGroup className="mt-3">
        {task.map((task)=>{
            return (
            <CListGroupItem className="d-flex justify-content-between align-items-center" key={task.id}>
                <CFormCheck label={task.text} id={task.id} checked={task.completed} onChange={()=> onToggle(task.id)} ></CFormCheck>
                <CButton color="danger" onClick={()=> onDelete(task.id)} size="sm">Eliminar tarea</CButton>
            </CListGroupItem>
            )
        })}
    </CListGroup>
    )
}

export default TaskList;