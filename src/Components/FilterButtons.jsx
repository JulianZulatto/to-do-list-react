import { CButton, CContainer } from "@coreui/react";

function FilterButtons ({onFilterChange, currentFilter}){

    return(
        <CContainer className="text-center mt-3">
        <CButton className="m-3" color={currentFilter === "all" ? "primary" : "secondary"} onClick={()=> onFilterChange("all")}>Todas las tareas</CButton>
        <CButton className="m-3" color={currentFilter === "active" ? "primary" : "secondary"} onClick={() => onFilterChange("active")}>Pendientes</CButton>
        <CButton className="m-3" color={currentFilter === "completed" ? "primary" : "secondary"} onClick={()=> onFilterChange("completed")}>Realizadas</CButton>
        </CContainer>
    )
}

export default FilterButtons;