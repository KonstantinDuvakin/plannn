import React, {useState} from "react";
import './Adminpanel.css';
import TabContainer from 'react-bootstrap/TabContainer';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Header} from "../Header/Header";
import Navpanel from "../Navpanel/Navpanel";
import Content from "../Content/Content";

function Adminpanel() {
    let projs = [
        {id: 1, name: 'plannn.ru', series: 'I-515', square: 35},
        {id: 2, name: 'plannn2.ru', series: 'П-44', square: 44},
        {id: 3, name: 'plannn3.ru', series: 'I-34', square: 32},
    ];

    const [isDesigner, setIsDesigner] = useState('true');
    const [projects, setProjects] = useState({projs});

    return (
        <div className='h-100'>
            <TabContainer id="left-tabs" defaultActiveKey='addProjects'>
                <Row className="h-100">
                    <Col md={3} className="nav-wrapper d-flex flex-column justify-content-between">
                        <Navpanel isDesigner={isDesigner} />
                        <div className="d-flex justify-content-center pb-2">
	                        <Button variant="outline-secondary logout-btn">Выйти из аккаунта</Button>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Header />
                        <Content isDesigner={isDesigner} projects={projects} />
                    </Col>
                </Row>
            </TabContainer>
        </div>
    );
}

export default Adminpanel;
