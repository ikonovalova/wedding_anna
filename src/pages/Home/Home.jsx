import React from 'react';
import './styles.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="wedding-header">
                <h1 className="couple-names">Степан <span className="amp">&</span> Анна</h1>
                <div className="wedding-date">Свадьба 05 & 07.09.2025</div>
            </div>

            <div className="info-card">
                <h2 className="info-title">Регистрация в ЗАГС</h2>
                <p className="info-text">
                    <strong>Дата:</strong> 05.09.2025<br />
                    <strong>Время:</strong> 19:00<br />
                    <strong>Место:</strong> Дворец бракосочетания №1<br />
                    <strong>Адрес:</strong> Санкт-Петербург, Английская наб., 28
                </p>
            </div>

            <div className="info-card">
                <h2 className="info-title">Банкет</h2>
                <p className="info-text">
                    <strong>Дата:</strong> 07.09.2025<br />
                    <strong>Время:</strong> 15:00<br />
                    <strong>Место:</strong> Площадка Forest Symphony<br />
                    <strong>Адрес:</strong> Ленинградская область, 31 км Приозерского шоссе <br />
                    <strong>Трансфер:</strong> 13:00 (место будет позже)<br />
                    <strong>Обратный трансфер:</strong>  22:00-23:00
                </p>
            </div>

            <div className="info-card">
                <h2 className="info-title">Дресс-код</h2>
                <p className="info-text">Вечерние наряды в пастельных тонах</p>
            </div>

            <div className="info-card attention">
                <h2 className="info-title">Важная информация</h2>
                <p className="info-text">
                    1) К сожалению, на мероприятии не будет аниматора и детской зоны.
                    А также мероприятие планируется быть за городом и долгое.
                    2) Мы бы хотели попросить воздержаться от призывов "Горько". Нам будет неуютно и некомфортно от этой традиции.
                </p>
            </div>

            <div className="info-card contacts">
                <h2 className="info-title">Контакты организаторов</h2>
                <p className="info-text">
                    <strong>Ведущий:</strong> +7 (XXX) XXX-XX-XX<br />
                    <strong>Координатор:</strong> +7 (XXX) XXX-XX-XX
                </p>
            </div>
        </div>
    );
};

export default Home;