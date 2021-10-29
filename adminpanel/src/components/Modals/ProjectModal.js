import './ProjectModal.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import X from "../../img/X.svg";
import React from "react";

function ProjectModal(props) {
    if (props.projects) {
        return (
            <Modal backdrop="static" show={props.showProject} onHide={props.handleCloseProject} centered
                   className='project-modal' size='lg'>
                <Modal.Header>
                    <Modal.Title>Мои проекты</Modal.Title>
                    <Button onClick={props.handleCloseProject}>
                        <img src={X} alt="Close"/>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    {props.projects.projs.map((project) => {
                        return (
                            <>
                                <Button className='project-button-modal yellow-button' onClick={props.handleProject}>
                                    {project.name}.pdf
                                </Button>
                                <span>Серия {project.series}, {project.square} м2</span>
                            </>
                        )
                    })}
                </Modal.Body>
            </Modal>
        )
    } else {
        return (
            <Modal backdrop="static" show={props.showProject} onHide={props.handleCloseProject} centered
                   className='project-modal' size='lg'>
                <Modal.Header>
                    <Modal.Title>Мои проекты</Modal.Title>
                    <Button onClick={props.handleCloseProject}>
                        <img src={X} alt="Close"/>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <p>У вас нет загруженых проектов :(</p>
                </Modal.Body>
            </Modal>
        )
    }
}

export default ProjectModal;