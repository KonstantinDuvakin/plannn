import React from "react";
import './BoughtProjects.css';
import SadFace from './../../img/Sad-face.svg'
import ProjectElement from "../ProjectElement/ProjectElement";

function BoughtProjects(props) {
    if (props.find) {
        return (
            <>
                <ProjectElement where={props.where} />
            </>
        )
    } else {
        return (
            <div className="content-nothing">
                <p>У вас пока нет купленных проектов</p>
                <img src={SadFace} alt="SadFace"/>
            </div>
        )
    }
}

export default BoughtProjects;