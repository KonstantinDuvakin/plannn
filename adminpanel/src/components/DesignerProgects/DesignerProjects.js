import React from "react";
import './DesignerProjects.css';
import ProjectElement from "../ProjectElement/ProjectElement";

function DesignerProjects(props) {
    if (props.projects) {
        return (
            <>
                <span className='project-on-moderate'>Проектов на модерации: 1</span>
                <ProjectElement where={props.where} />
            </>
        )
    } else {
        return (
            <div className="no-projects">
                <p>нет загруженных дизайн-проектов</p>
                <button>Добавить проект</button>
            </div>
        )
    }
}

export default DesignerProjects;