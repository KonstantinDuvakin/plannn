import React from "react";
import './Content.css';
import TabContent from 'react-bootstrap/TabContent'
import TabPane from "react-bootstrap/TabPane";
import BoughtProjects from "../BoughtProjects/BoughtProjects";
import LikedProjects from "../LikedProjects/LikedProjects";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Contacts from "../Contacts/Contacts";
import Finance from "../Finance/Finance";
import DesignerProjects from "../DesignerProgects/DesignerProjects";
import DesignerAddProject from "../DesignerAddProject/DesignerAddProject";

function Content(props) {
    if (props.isDesigner) {
        return (
            <div>
                <TabContent>
                    <TabPane eventKey="addProjects">
                        <DesignerAddProject projects={props.projects} />
                    </TabPane>
                    <TabPane eventKey="myProjects" className='myProjects'>
                        <DesignerProjects where='designer' projects={props.projects}/>
                    </TabPane>
                    <TabPane eventKey="Settings">
                        <PersonalInfo isDesigner={props.isDesigner} />
                    </TabPane>
                    <TabPane eventKey="Finance">
                        <Finance data={{money: 7658, projects: props.projects}}/>
                    </TabPane>
                    <TabPane eventKey="Contacts">
                        <Contacts/>
                    </TabPane>
                </TabContent>
            </div>
        );
    } else {
        return (
            <div>
                <TabContent>
                    <TabPane eventKey="boughtProjects" className='boughtProjects'>
                        <BoughtProjects where='bought' find={true}/>
                    </TabPane>
                    <TabPane eventKey="likedProjects" className='likedProjects'>
                        <LikedProjects where='liked' find={true}/>
                    </TabPane>
                    <TabPane eventKey="Settings">
                        <PersonalInfo isDesigner={props.isDesigner} />
                    </TabPane>
                    <TabPane eventKey="Contacts">
                        <Contacts/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Content;
