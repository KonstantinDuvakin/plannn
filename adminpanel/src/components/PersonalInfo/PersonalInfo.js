import React from "react";
import './PersonalInfo.css';
import Person from "../../img/Person.svg";

function PersonalInfoToggle(props) {
    if(props.isDesigner) {
        return (
            <div>
                <div className='user-img'>
                    <img src={Person} alt='Person'/>
                </div>
                <span>фото должно быть в формате jpg, размером не более 5 мб</span>
                <button className="btn btn-add-photo">Добавить фото</button>
                <form>
                    <div className="inputField">
                        <label htmlFor="personalInfoName" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="personalInfoName" placeholder="Имя"/>
                    </div>
                    <div className="inputField">
                        <label htmlFor="personalInfoSurname" className="form-label">Фамилия</label>
                        <input type="text" className="form-control" id="personalInfoSurname" placeholder="Фамилия"/>
                    </div>
                    <div className="inputField">
                        <label htmlFor="personalInfoCity" className="form-label">Город</label>
                        <input type="text" className="form-control" id="personalInfoCity" placeholder='Город'/>
                    </div>
                    <div className="inputField">
                        <label htmlFor="personalInfoTel" className="form-label">Телефон</label>
                        <input type="telephone" className="form-control" id="personalInfoTel"
                               placeholder='Введите телефон'/>
                    </div>
                    <div className="inputField">
                        <label htmlFor="personalInfoEmail" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="personalInfoEmail"
                               placeholder='Введите e-mail'/>
                    </div>
                    <button type="submit" className="btn">Сохранить</button>
                </form>
            </div>
        )
    } else {
        return (
            <form>
                <div className="inputField">
                    <label htmlFor="personalInfoFullName" className="form-label">Полное имя</label>
                    <input type="text" className="form-control" id="personalInfoFullName" placeholder="Фамилия Имя" />
                </div>
                <div className="inputField">
                    <label htmlFor="personalInfoCity" className="form-label">Город</label>
                    <input type="text" className="form-control" id="personalInfoCity" placeholder='Город' />
                </div>
                <div className="inputField">
                    <label htmlFor="personalInfoTel" className="form-label">Телефон</label>
                    <input type="telephone" className="form-control" id="personalInfoTel" placeholder='Введите телефон' />
                </div>
                <div className="inputField">
                    <label htmlFor="personalInfoEmail" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="personalInfoEmail" placeholder='Введите e-mail' />
                </div>
                <button type="submit" className="btn">Сохранить</button>
            </form>
        )
    }
};

function PersonalInfoCheckboxes(props) {
    if(props.isDesigner) {
        return (
            <div className='checkboxes'>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkDownloadedProjects"/>
                    <label className="form-check-label" htmlFor="checkDownloadedProjects">
                        Информация о загруженных проектах
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="actionsWithProjects"/>
                    <label className="form-check-label" htmlFor="actionsWithProjects">
                        Действия с вашими проектами
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="recommendedLayout"/>
                    <label className="form-check-label" htmlFor="recommendedLayout">
                        Рекомендуемые планировки
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkUpdate"/>
                    <label className="form-check-label" htmlFor="checkUpdate">
                        Обновления Plannn.ru
                    </label>
                </div>
            </div>
        )
    } else {
        return (
            <div className='checkboxes'>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkBoughtProjects"/>
                    <label className="form-check-label" htmlFor="checkBoughtProjects">
                        Информация о купленных проектах
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkPromo"/>
                    <label className="form-check-label" htmlFor="checkPromo">
                        Акции и предложения
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="checkUpdate"/>
                    <label className="form-check-label" htmlFor="checkUpdate">
                        Обновления Plannn.ru
                    </label>
                </div>
            </div>
        )
    }
}

function PersonalInfo(props) {
    return (
        <div className='personal-info'>
            <h1>Персональные данные</h1>
            <PersonalInfoToggle isDesigner={props.isDesigner} />
            <div className='additionalSettings'>
                <h1>Уведомления</h1>
                <p>Мы обязательно будем сообщать вам о любых важных изменениях</p>
                <h3>По электронной почте</h3>
                <p>Выберите, какие уведомления будут приходить вам по электронной почте (кроме сообщений, касающихся
                   конфиденциальности и аккаунта)</p>
                <PersonalInfoCheckboxes isDesigner={props.isDesigner} />
                <h1>Изменение аккаунта</h1>
                <p>Удалить аккаунт и его данные</p>

                <button>удалить аккаунт</button>
            </div>
        </div>
    )
}

export default PersonalInfo;