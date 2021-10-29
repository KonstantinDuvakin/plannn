import './LayoutModal.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import X from "../../img/X.svg";
import React from "react";
import RenderLayout from "../DesignerAddProject/RenderLayout/RenderLayout";
import OneRoom from "../../img/One-room.svg";
import TwoRoom from "../../img/Two-room.svg";
import ThreeRoom from "../../img/Three-room.svg";
import FourRoom from "../../img/Four-room.svg";

const layoutData = {
    oneRoom: [
        {
            id: 1,
            img: OneRoom,
            series: 'П-44',
            square: 38,
            replanning: 'не рекомендуется',
        },
        {
            id: 2,
            img: OneRoom,
            series: 'I-515',
            square: 35,
            replanning: 'возможна',
        },
        {
            id: 3,
            img: OneRoom,
            series: 'II-18',
            square: 36,
            replanning: 'возможна',
        },
        {
            id: 4,
            img: OneRoom,
            series: 'I-511',
            square: 40,
            replanning: 'не рекомендуется',
        },
    ],
    twoRoom: [
        {
            id: 5,
            img: TwoRoom,
            series: 'П-44',
            square: 38,
            replanning: 'не рекомендуется',
        },
        {
            id: 6,
            img: TwoRoom,
            series: 'I-515',
            square: 35,
            replanning: 'возможна',
        },
        {
            id: 7,
            img: TwoRoom,
            series: 'II-18',
            square: 36,
            replanning: 'возможна',
        },
        {
            id: 8,
            img: TwoRoom,
            series: 'I-511',
            square: 40,
            replanning: 'не рекомендуется',
        },
    ],
    threeRoom: [
        {
            id: 9,
            img: ThreeRoom,
            series: 'П-44',
            square: 38,
            replanning: 'не рекомендуется',
        },
        {
            id: 10,
            img: ThreeRoom,
            series: 'I-515',
            square: 35,
            replanning: 'возможна',
        },
        {
            id: 11,
            img: ThreeRoom,
            series: 'II-18',
            square: 36,
            replanning: 'возможна',
        },
        {
            id: 12,
            img: ThreeRoom,
            series: 'I-511',
            square: 40,
            replanning: 'не рекомендуется',
        },
    ],
    fourRoom: [
        {
            id: 13,
            img: FourRoom,
            series: 'П-44',
            square: 38,
            replanning: 'не рекомендуется',
        },
        {
            id: 14,
            img: FourRoom,
            series: 'I-515',
            square: 35,
            replanning: 'возможна',
        },
        {
            id: 15,
            img: FourRoom,
            series: 'II-18',
            square: 36,
            replanning: 'возможна',
        },
        {
            id: 16,
            img: FourRoom,
            series: 'I-511',
            square: 40,
            replanning: 'не рекомендуется',
        },
    ],
}


function LayoutModal(props) {

    return (
        <Modal backdrop="static" show={props.showLayout} onHide={props.handleCloseLayout} centered
               className='layout-modal' size="xl">
            <Modal.Header>
                <div>
                    <Modal.Title>Выберите планировку</Modal.Title>
                    <p>Мы подобрали наиболее актуальные на данный момент планировки для лучшего
                       заработка</p>
                </div>
                <Button onClick={props.handleCloseLayout}>
                    <img src={X} alt="Close"/>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <h5>1-комнатные</h5>
                <div className="one-room layout-buttons">
                    <RenderLayout rooms={layoutData.oneRoom} handleLayout={props.handleLayout}/>
                </div>
                <h5>2-комнатные</h5>
                <div className="two-room layout-buttons">
                    <RenderLayout rooms={layoutData.twoRoom} handleLayout={props.handleLayout}/>
                </div>
                <h5>3-комнатные</h5>
                <div className="three-room layout-buttons">
                    <RenderLayout rooms={layoutData.threeRoom} handleLayout={props.handleLayout}/>
                </div>
                <h5>4-комнатные</h5>
                <div className="four-room layout-buttons">
                    <RenderLayout rooms={layoutData.fourRoom} handleLayout={props.handleLayout}/>
                </div>
            </Modal.Body>
            <Button className='layout-choose-button yellow-button'>выбрать</Button>
        </Modal>
    )
}

export default LayoutModal;