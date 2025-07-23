import React from 'react';
import './styles.css';

const Plan = () => {
    return (
        <div className="schedule-page">
            <div className="wedding-header">
                <h1 className="couple-names">План мероприятия</h1>
            </div>

            <div className="timeline-container">
                <div className="timeline-event">
                    <div className="event-time">13:00 - 15:00</div>
                    <div className="event-card">
                        <h3 className="event-title">ТРАНСФЕР ИЗ СПБ НА ПЛОЩАДКУ</h3>
                        <p className="event-description">Сбор гостей и организованный трансфер на площадку</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="event-time">15:00 – 16:30</div>
                    <div className="event-card">
                        <h3 className="event-title">ВСТРЕЧА ГОСТЕЙ / ФУРШЕТ</h3>
                        <p className="event-description">Легкие закуски и напитки в неформальной обстановке</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="event-time">23:00</div>
                    <div className="event-card">
                        <h3 className="event-title">ОКОНЧАНИЕ ОФИЦИАЛЬНОЙ ЧАСТИ</h3>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="event-time">23:00</div>
                    <div className="event-card">
                        <h3 className="event-title">ТРАНСФЕР В СПБ</h3>
                        <p className="event-description">Организованный возврат в Санкт-Петербург</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;