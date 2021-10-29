import React from "react";
import './LikedProjects.css';
import SadFace from './../../img/Sad-face.svg'
import ProjectElement from "../ProjectElement/ProjectElement";

function LikedProjects(props) {
    if (props.find) {
        return (
            <div>
                <ProjectElement where={props.where} />
            </div>
        )
    } else {
        return (
            <div className="content-nothing">
                <p>У вас пока нет избранных проектов</p>
                <img src={SadFace} alt="SadFace"/>
            </div>
        )
    }
}

export default LikedProjects;