import { CCard, CCardBody, CCardHeader, CContainer } from "@coreui/react";
import TasksInputs from "./TasksInputs";
import TaskList from "./TaskList ";

function Layout (){

    return(
        <CContainer>
            <CCard>
            <CCardHeader className="text-center fs-3 fw-bold">
                Lista de Tareas
            </CCardHeader>
            <CCardBody>
            <TasksInputs/>
            <TaskList/>
            </CCardBody>
            </CCard>
        </CContainer>
    )
}

export default Layout;