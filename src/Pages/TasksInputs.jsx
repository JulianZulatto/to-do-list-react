import { CButton, CContainer, CForm, CFormInput, CFormLabel } from "@coreui/react";
import { useState } from "react";


function TasksInputs ({onAdd}){

    const[newTaskText, setNewTaskText] = useState("");

    const handleChangeTask = (event) =>{
        const inputValue = event.target.value;

        setNewTaskText(inputValue)

    }

    const handleSubmit = () =>{
        if(newTaskText.trim() !== ""){
            onAdd(newTaskText)
            setNewTaskText("")
        }
    }


 return (
    <CContainer>
        <CForm className="text-center">
            <CFormLabel className="fw-bold fs-5">Nueva Tarea</CFormLabel>
            <CFormInput
            type="text"
            id="new-task"
            value={newTaskText}
            onChange={handleChangeTask}
            placeholder="Ingrese una nueva tarea"
            aria-describedby="exampleFormControlInputHelpInline"
            />
            <CButton color="primary" className="mt-3" onClick={handleSubmit}>Añadir Tarea</CButton>
        </CForm>

    </CContainer>
 )
}

export default TasksInputs;