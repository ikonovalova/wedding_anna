import React from 'react';
import {
    SchedulePage,
    WeddingHeader,
    CoupleNames,
    TimelineContainer,
    TimelineEvent,
    EventTime,
    EventCard,
    EventTitle,
    EventDescription
} from './styles';

const Plan = () => {
    return (
        <SchedulePage>
            <WeddingHeader>
                <CoupleNames>План мероприятия</CoupleNames>
            </WeddingHeader>

            <TimelineContainer>
                <TimelineEvent>
                    <EventTime>13:00 - 15:00</EventTime>
                    <EventCard>
                        <EventTitle>ТРАНСФЕР ИЗ СПБ НА ПЛОЩАДКУ</EventTitle>
                        <EventDescription>Сбор гостей и организованный трансфер на площадку</EventDescription>
                    </EventCard>
                </TimelineEvent>

                <TimelineEvent>
                    <EventTime>15:00 – 15:30</EventTime>
                    <EventCard>
                        <EventTitle>ВСТРЕЧА ГОСТЕЙ / ФУРШЕТ</EventTitle>
                        <EventDescription>Легкие закуски и напитки в неформальной обстановке</EventDescription>
                    </EventCard>
                </TimelineEvent>

                <TimelineEvent>
                    <EventTime>22:00 - 23:00</EventTime>
                    <EventCard>
                        <EventTitle>ОКОНЧАНИЕ ОФИЦИАЛЬНОЙ ЧАСТИ</EventTitle>
                    </EventCard>
                </TimelineEvent>

                <TimelineEvent>
                    <EventTime>22:00 - 23:00</EventTime>
                    <EventCard>
                        <EventTitle>ОБРАТНЫЙ ТРАНСФЕР В СПБ</EventTitle>
                        <EventDescription>Организованный возврат в Санкт-Петербург</EventDescription>
                    </EventCard>
                </TimelineEvent>
            </TimelineContainer>
        </SchedulePage>
    );
};

export default Plan;