import './CityModal.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import X from "../../img/X.svg";
import React from "react";

function CityModal(props) {
    return (
        <Modal backdrop="static" show={props.showCity} onHide={props.handleCloseCity} centered>
            <Modal.Header>
                <Modal.Title>Ваш регион или город</Modal.Title>
                <Button onClick={props.handleCloseCity}>
                    <img src={X} alt="Close"/>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Button className='city-moscow-button' onClick={props.handleCity}>
                    Москва
                </Button>
                <Button className='area-moscow-button' onClick={props.handleCity}>
                    Московская область
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default CityModal;