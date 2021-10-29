import React, {useState} from "react";
import './DesignerAddProject.css';
import {TabContainer} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DesignerAddProjectTab from "./DesignerAddProjectTab/DesignerAddProjectTab";
import DesignerAddProjectNav from "./DesignerAddProjectNav/DesignerAddProjectNav";
import ToModerateModal from "../Modals/ToModerateModal";

function DesignerAddProject(props) {
    const [showToModerate, setShowToModerate] = useState(false);

    const handleCloseToModerate = () => setShowToModerate(false);
    const handleShowToModerate = () => setShowToModerate(true);

    return (
        <div className="add-project">
            <h3>Загружайте свой существующий проект или сделайте новый дизайн-проект.</h3>
            <button>пример проекта</button>
            <div className="add-project-fill">
                <TabContainer defaultActiveKey='full-project'>
                    <DesignerAddProjectNav />
                    <DesignerAddProjectTab projects={props.projects} />
                    <Button className='send-to-moderator' onClick={handleShowToModerate}>отправить на модерацию</Button>
                </TabContainer>
            </div>
            <ToModerateModal
                showToModerate={showToModerate}
                handleCloseToModerate={handleCloseToModerate}
            />
        </div>
    )
}

export default DesignerAddProject;
