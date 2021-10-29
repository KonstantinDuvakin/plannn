import React from "react";
import './Navpanel.css';
import Nav from 'react-bootstrap/Nav'
import NavLink from "react-bootstrap/NavLink";
import Logo from '../../img/Logo.svg'
import Person from './../../img/Person.svg'
import Cloud from './../../img/Cloud.svg'
import File from './../../img/File.svg'
import Gear from './../../img/Gear.svg'
import TrendArrow from './../../img/Trend-arrow.svg'
import Mail from './../../img/Mail.svg'
import Like from './../../img/Like.svg'

function Navpanel(props) {

    if (props.isDesigner) {
        return (
            <div>
	            <div className="d-flex justify-content-center">
		            <img className='logo-img' src={Logo} alt="logo"/>
	            </div>
                <div className='user-info text-center'>
                    <div className='user-img'>
                        <img src={Person} alt='Person'/>
                    </div>
                    <span className='user-name'>Имя</span>
                    <span className='user-city'>Город</span>
                </div>
                <Nav defaultActiveKey='addProjects' className="flex-column navBtns">
                    <NavLink eventKey='addProjects'>
                        <img src={Cloud} alt="Cloud"/>
                        Добавить проект
                    </NavLink>
                    <NavLink eventKey="myProjects">
                        <img src={File} alt="File"/>
                        Мои проекты
                    </NavLink>
                    <NavLink eventKey="Settings">
                        <img src={Gear} alt="Gear"/>
                        Настройки
                    </NavLink>
                    <NavLink eventKey="Finance">
                        <img src={TrendArrow} alt="Trend"/>
                        Финансы
                    </NavLink>
                    <NavLink eventKey="Contacts">
                        <img src={Mail} alt="Mail"/>
                        Связаться с нами
                    </NavLink>
                </Nav>
            </div>
        );
    } else {
        return (
            <div>
	            <div className="d-flex justify-content-center">
		            <img className='logo-img' src={Logo} alt="logo"/>
	            </div>
                <div className='user-info'>
                    <span className='user-name'>Имя</span>
                    <span className='user-city'>Город</span>
                </div>
                <Nav defaultActiveKey="boughtProjects" className="flex-column navBtns">
                    <NavLink eventKey="boughtProjects">
                        <img src={File} alt="File"/>
                        Купленные проекты
                    </NavLink>
                    <NavLink eventKey="likedProjects">
                        <img src={Like} alt="Like"/>
                        Избранные проекты
                    </NavLink>
                    <NavLink eventKey="Settings">
                        <img src={Gear} alt="Gear"/>
                        Настройки
                    </NavLink>
                    <NavLink eventKey="Contacts">
                        <img src={Mail} alt="Mail"/>
                        Связаться с нами
                    </NavLink>
                </Nav>
            </div>
        );
    }
}

export default Navpanel;
