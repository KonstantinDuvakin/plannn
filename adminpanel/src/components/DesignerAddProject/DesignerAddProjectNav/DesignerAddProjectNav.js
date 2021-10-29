import React from "react";
import './DesignerAddProjectNav.css';
import {Nav, NavItem} from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";

function DesignerAddProjectNav() {
    return (
        <Nav variant="pills" activeKey="link-0">
            <NavItem>
                <NavLink eventKey="full-project">загрузка полного проекта</NavLink>
            </NavItem>
            <NavItem>
                <NavLink eventKey="part-project">загрузка частичного проекта</NavLink>
            </NavItem>
        </Nav>
    )
}

export default DesignerAddProjectNav;
