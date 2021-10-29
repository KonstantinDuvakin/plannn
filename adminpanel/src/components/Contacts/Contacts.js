import React from "react";
import './Contacts.css';
import Telegram from './../../img/Telegram.svg'
import WhatsApp from './../../img/WhatsApp.svg'

function Contacts(props) {
    return (
        <div className='contacts-info'>
            <h3>По любым вопросам вы можете обратиться к нашему менеджеру</h3>
            <div className='contact-buttons'>
                <button className="telegram-link">
                    <img src={Telegram} alt="Telegram"/>
                    Telegram
                </button>
                <button className="whatsapp-link">
                    <img src={WhatsApp} alt="WhatsApp"/>
                    WhatsApp
                </button>
            </div>
            <p>E-mail: plannn.ru@gmail.com</p>
            <p>Телефон: +7 900 00 00 007</p>
        </div>
    )
}

export default Contacts;