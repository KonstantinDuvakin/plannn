import React from "react";
import './ProjectElement.css';
import InteriorRoom from './../../img/Interior-room1.png'
import ArrowLeftYellow from './../../img/Arrow-left-yellow.svg'
import Attention from './../../img/Attention.svg'
import StarActive from './../../img/Star-active.svg'
import StarDisabled from './../../img/Star-disabled.svg'
import LikeOutline from './../../img/Like-outline.svg'
import LikeFilled from './../../img/Like-filled.svg'
import Trash from './../../img/Trash.svg'
import {Accordion} from "react-bootstrap";

function Icon(props) {
    if (props.where === 'bought') {
        return (
            <div className="like position-absolute">
                <img className="likeOutline" src={LikeOutline} alt="Like"/>
            </div>
        )
    } else if (props.where === 'liked') {
        return (
            <div className="like position-absolute">
                <img className="likeFilled" src={LikeFilled} alt="Like"/>
            </div>
        )
    } else {
        return (
            <div className="like position-absolute">
                <img className="trash" src={Trash} alt="Trash"/>
            </div>
        )
    }
}

function ProjectElement(props) {

    return (
        <>
            <div onMouseOver={() => {
                document.querySelector('.interiorCard .more').classList.remove('hide')
            }}
                 onMouseLeave={() => {
                     document.querySelector('.interiorCard .more').classList.add('hide')
                 }}
                 className="interiorPreview position-relative">
                <div className="interiorCard">
                    <div className="intCard">
                        <img className="bg-img" src={InteriorRoom} alt="Interior"/>
                        <div className="more position-absolute d-flex align-items-center hide">
                            <span>Подробнее</span>
                            <img src={ArrowLeftYellow} alt="Arrow"/>
                        </div>
                        <p>интерьер 2-комнатной</p>
                        <p><b>7320 ₽</b></p>
                        <p>стоимость полного проекта</p>
                    </div>

                    <Accordion>
                        <Accordion.Item eventKey={0}>
                            <div className="estimate position-absolute align-items-center">
                                <Accordion.Header>
                                    <div className="d-flex">
                                        <img src={Attention} alt="Attention"/>
                                        <span>смета</span>
                                        <div className="stars row">
                                            <img src={StarActive} alt="Star-active"/>
                                            <img src={StarDisabled} alt="Star-disabled"/>
                                            <img src={StarDisabled} alt="Star-disabled"/>
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="estimationDesc">
                                        <p>смета проекта</p>
                                        <p>от 1млн ₽</p>
                                    </div>
                                </Accordion.Body>
                            </div>
                        </Accordion.Item>
                    </Accordion>
                    <Icon where={props.where}/>
                </div>
            </div>
        </>
    )
}

export default ProjectElement;