import React, {useState} from "react";
import './Header.css';
import ArrowRight from './../../img/Arrow-right.svg'
import Cart from './../../img/Cart.svg'
import Person from './../../img/Person.svg'
import {Offcanvas} from "react-bootstrap";

export const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);

    const handleClose = () => setShowCart(false);
    const handleShow = () => setShowCart(true);

    return (
        <div className="pr-3 justify-content-between lk-buttons">
            <button className="backBtn">
                <img src={ArrowRight} alt="Arrow" />
                    <span>на главную</span>
            </button>
            <div className='lk-right-buttons'>
                <button type="button" className="mr-4 col-2 cart" onClick={handleShow}>
                    <img src={Cart} alt="Cart"/>
                </button>

                <Offcanvas show={showCart} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists.
                    </Offcanvas.Body>
                </Offcanvas>

                <button type="button" className="col-2 person" onClick={() => setMenuOpened(!menuOpened)}>
                    <div className='user-img'>
                        <img src={Person} alt="Person"/>
                    </div>
                </button>
            </div>
            <div className={`menu ${menuOpened ? '' : 'hide'}`}>
                <ul>
                    <li><a className="item" href="#">Профиль</a></li>
                    <li><a className="item" href="#">Настройки</a></li>
                    <li><a className="item" href="#">Выйти</a></li>
                </ul>
            </div>
        </div>
    );
}
