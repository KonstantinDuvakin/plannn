import './CityModal.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import X from "../../img/X.svg";
import React from "react";

function ToModerateModal(props) {
    return (
        <Modal backdrop="static" show={props.showToModerate} onHide={props.handleCloseToModerate} centered
               className='to-moderate-modal' size='lg'>
            <Modal.Body>
                <p>Проект загружен и отправлен на модерацию</p>
                <button type='button' onClick={props.handleCloseToModerate} className='yellow-button'>ок</button>
            </Modal.Body>
        </Modal>
    )
}

export default ToModerateModal;