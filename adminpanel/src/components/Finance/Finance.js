import React from "react";
import './Finance.css';
import Apartment1 from '../../img/Apartment1.png'

function Balance(props) {
    return (
        <div className='balance'>
            <h3>Баланс</h3>
            <span>{props.money} ₽</span>
            <button className='withdraw'>вывод средств</button>
        </div>
    )
}

function Finance(props) {
    console.log(props.data.projects.projs[0].series);

    if (props.data.projects) {
        return (
            <div className='finance-wrapper'>
                <Balance money={props.data.money} />
                <div className='sell-statistic'>
                    <h3>Статистика продаж</h3>
                    <div className='sell-statistic-projects'>
                        <div className="project">
                            <h5>Полный проект</h5>
                            <img src={Apartment1} alt="Apartment"/>
                            <span>Серия I-515, 35 м<sup><small>2</small></sup></span>
                            <h3>Купили: 1 раз</h3>
                        </div>
                        <div className="project">
                            <h5>Кухня</h5>
                            <img src={Apartment1} alt="Apartment"/>
                            <span>Серия I-515, 35 м<sup><small>2</small></sup></span>
                            <h3>Купили: 0 раз</h3>
                        </div>
                        <div className="project">
                            <h5>Полный проект</h5>
                            <img src={Apartment1} alt="Apartment"/>
                            <span>Серия I-515, 35 м<sup><small>2</small></sup></span>
                            <h3>Купили: 1 раз</h3>
                        </div>
                        <div className="project">
                            <h5>Кухня</h5>
                            <img src={Apartment1} alt="Apartment"/>
                            <span>Серия I-515, 35 м<sup><small>2</small></sup></span>
                            <h3>Купили: 0 раз</h3>
                        </div>
                        <div className="project">
                            <h5>Полный проект</h5>
                            <img src={Apartment1} alt="Apartment"/>
                            <span>Серия I-515, 35 м<sup><small>2</small></sup></span>
                            <h3>Купили: 1 раз</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Balance money={props.data.money} />
                <div className='balance-no-projects'>
                    <h3>У вас пока нет проектов для продажи</h3>
                    <button>Добавить проект</button>
                </div>
            </div>
        )
    }
}

export default Finance;