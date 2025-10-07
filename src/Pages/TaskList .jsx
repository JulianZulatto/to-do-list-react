import { CContainer, CFormCheck, CListGroup, CListGroupItem } from "@coreui/react";


function TaskList (){

    return (
    <CContainer>
    <CListGroup className="mt-3">
        <CListGroupItem>
            <CFormCheck hitArea="full" label="First checkbox" value="" id="firstCheckboxStretched"></CFormCheck>
        </CListGroupItem>
    </CListGroup>
    </CContainer>
    )
}

export default TaskList;