import { CButton, CContainer, CForm, CFormInput, CFormLabel } from "@coreui/react";


function TasksInputs (){

 return (
    <CContainer>
        <CForm className="text-center">
            <CFormLabel className="fw-bold fs-5">Nueva Tarea</CFormLabel>
            <CFormInput
            type="text"
            id="new-task"
            placeholder="Ingrese una nueva tarea"
            aria-describedby="exampleFormControlInputHelpInline"
            />
            <CButton color="primary" className="mt-3">Añadir Tarea</CButton>
        </CForm>

    </CContainer>
 )
}

export default TasksInputs;