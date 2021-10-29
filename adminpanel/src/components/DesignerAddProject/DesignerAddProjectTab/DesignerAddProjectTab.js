import React, {useState} from "react";
import './DesignerAddProjectTab.css';
import {TabContent, TabPane} from "react-bootstrap";
import Attention from './../../../img/Attention.svg'
import CityModal from "../../Modals/CityModal";
import LayoutModal from "../../Modals/LayoutModal";
import ProjectModal from "../../Modals/ProjectModal";

function DesignerAddProjectTab(props) {
    const [showCity, setShowCity] = useState(false);
    const [showLayout, setShowLayout] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [city, setCity] = useState('выбрать город')
    const [layout, setLayout] = useState('выбрать планировку')
    const [project, setProject] = useState('выбрать проект')

    const handleCloseCity = () => setShowCity(false);
    const handleCloseLayout = () => setShowLayout(false);
    const handleCloseProject = () => setShowProject(false);
    const handleShowCity = () => setShowCity(true);
    const handleShowLayout = () => setShowLayout(true);
    const handleShowProject = () => setShowProject(true);

    const handleCity = (event) => {
        const place = event.target.innerText;
        setCity(place);
        handleCloseCity();
    }

    function handleLayout(data, id) {
        let foundRoom = data.find(el => {
            return el.id === id;
        })
        setLayout(`Серия: ${foundRoom.series}`);
    }

    const handleProject = (event) => {
        const project = event.target.innerText;
        setProject(project);
        handleCloseProject();
    }

    return (
        <>
            <TabContent>
                <TabPane eventKey="full-project">
                    <div className='city choose'>
                        <h3>1. Выбор города</h3>
                        <div className='city choose-content'>
                            <button type="button" onClick={handleShowCity}>{city}</button>
                            <img src={Attention} alt="Attention"/>
                            <p>В зависимости от города мы подбираем планировки квартир, так же выбор города влияет на
                               выбор
                               материалов, оборудования и мебели.</p>
                        </div>
                    </div>
                    <div className='layout choose'>
                        <h3>2. Выбор планировки</h3>
                        <div className='layout choose-content'>
                            <button type="button" onClick={handleShowLayout}>{layout}</button>
                            <img src={Attention} alt="Attention"/>
                            <p>Мы подготовили наиболее актуальные планировки для продажи проекта.</p>
                        </div>
                        <div className='choose-description'>
                            <p>скачать планировку квартиры <br/> dwg, 3ds</p>
                        </div>


                    </div>
                    <div className='project-download choose'>
                        <h3>3. Загрузка проекта</h3>
                        <div className='project-download choose-content'>
                            <button type="button">загрузить проект</button>

                            <img src={Attention} alt="Attention"/>
                            <p>Загрузите чертежи в формате PDF. Смотрите пример проекта.<br/><br/> Загрузите в формате
                               PDF
                               все товары
                               применяемые в дизайн-проекте. Обязательно укажите фото, название, описание, цену, ссылку
                               или
                               адрес на товар. Смотрите пример проекта.</p>
                        </div>
                    </div>
                </TabPane>
                <TabPane eventKey="part-project">
                    <div className='design-project choose'>
                        <h3>1. Выбор полного дизайн-проекта</h3>
                        <div className='design-project choose-content'>
                            <button type="button" onClick={handleShowProject}>{project}</button>

                            <img src={Attention} alt="Attention"/>
                            <p>Выберите из своего списка полный дизайн-проект.</p>
                        </div>
                    </div>
                    <div className='layout choose'>
                        <h3>2. Название помещения</h3>
                        <div className='layout choose-content'>
                            <input type="text" placeholder='Помещение'/>

                            <img src={Attention} alt="Attention"/>
                            <p>Введите название помещения, которое хотите загрузить на сервис.</p>
                        </div>
                    </div>
                    <div className='project-download choose'>
                        <h3>3. Загрузка проекта</h3>
                        <div className='project-download choose-content'>
                            <button type="button">загрузить проект</button>

                            <img src={Attention} alt="Attention"/>
                            <p>Загрузите чертежи в формате PDF. Смотрите пример проекта.<br/><br/> Загрузите в формате
                               PDF
                               все товары
                               применяемые в дизайн-проекте. Обязательно укажите фото, название, описание, цену, ссылку
                               или
                               адрес на товар. Смотрите пример проекта.</p>
                        </div>
                    </div>
                </TabPane>
            </TabContent>

            <CityModal
                showCity={showCity}
                handleCloseCity={handleCloseCity}
                handleCity={handleCity}
            />
            <LayoutModal
                showLayout={showLayout}
                handleCloseLayout={handleCloseLayout}
                handleLayout={handleLayout}
            />
            <ProjectModal
                showProject={showProject}
                handleCloseProject={handleCloseProject}
                handleProject={handleProject}
                projects={props.projects}
            />
        </>
    )
}

export default DesignerAddProjectTab;
