import React, { useState } from 'react';
import {AnswerText, AnswerLink, FaqAnswer, FaqIcon, FaqItem, FaqPage, AnswerNote, AnswerSection, AnswerTitle, FaqContainer, FaqQuestion, WeddingHeader, CoupleNames} from "./styles.js";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "Где можно остановиться, если вы не проживаете в СПб?",
            answer: (
                <>
                    <AnswerText mb="15px">
                        Мы были бы рады разместить вас у нас! Но к сожалению, у нас нет отдельных комнат,
                        а наша квартира будет похожа на последствия урагана, поэтому мы не сможем
                        разместить гостей у себя.
                    </AnswerText>
                    <AnswerText mb="15px">
                        Мы хотели бы вам помочь и подсказать отличные варианты проживания рядом,
                        но мы не знаем их.
                    </AnswerText>
                    <AnswerSection>
                        <AnswerTitle>Некоторые варианты размещения:</AnswerTitle>
                        <AnswerText>
                            Вариант размещения в центре СПб:{' '}
                            <AnswerLink target="_blank" href="https://level.travel/hotels/9092428-Otel_Aleksandriya?start_date=2025-09-04&nights=4&search_type=hotel&adults=2&from=any-RU">
                                Отель Александрия
                            </AnswerLink>
                        </AnswerText>
                        <AnswerText>
                            Вариант размещения за городом около свадебной площадки (5 мин на машине):
                            {' '}
                            <AnswerLink target="_blank" href="https://xn--80aqagbtij7eb.xn--p1ai/house">
                                 Парк Шишкинъ
                            </AnswerLink>
                        </AnswerText>
                    </AnswerSection>
                </>
            )
        },
        {
            question: "Что подарить?",
            answer: (
                <AnswerText>
                    На свой выбор, мы рады любому подарку, особенно вашему присутствию.
                    Но если вы все еще хотите что-то подарить сверху, то лучше деньги.
                </AnswerText>
            )
        },
        {
            question: "Можно ли прийти с ребенком?",
            answer: (
                <>
                    <AnswerText mb="15px">
                        К сожалению, нет. Так как мероприятие продлится допоздна и не будет
                        аниматора с детской зоной, мы запланировали праздник без детей,
                        чтобы все гости могли расслабиться и насладиться вечером.
                    </AnswerText>
                    <AnswerNote>
                        Надеемся, вы сможете найти возможность провести этот вечер с нами!
                    </AnswerNote>
                </>
            )
        },
        {
            question: "Можно ли прийти +1?",
            answer: (
                <>
                    <AnswerText mb="10px">
                        К сожалению, нет, в связи с ограниченным количеством мест,
                        в этот раз мы вынуждены лимитировать количество гостей только приглашёнными.
                    </AnswerText>
                    <AnswerNote>
                        Надеемся на ваше понимание!
                    </AnswerNote>
                </>
            )
        },
        {
            question: "Как одеться? Есть ли дресс-код?",
            answer: (
                <>
                    <AnswerSection mb="20px">
                        <AnswerTitle>ЗАГС:</AnswerTitle>
                        <AnswerText>
                            Для свадебной регистрации в официальный наряд. Если это важно,
                            в Дворце Бракосочетания преобладают зеленые пастельные тона.
                        </AnswerText>
                    </AnswerSection>
                    <AnswerSection>
                        <AnswerTitle>Свадебное мероприятие:</AnswerTitle>
                        <AnswerText mb="10px">
                            Мы хотим вас видеть красивыми. Цветовая гамма: бежевый, коричневый, черный.
                        </AnswerText>
                        <AnswerText>
                            Подробнее на главной странице: <AnswerLink href="#">тык ССЫЛКа</AnswerLink>
                        </AnswerText>
                    </AnswerSection>
                </>
            )
        },
        {
            question: "Когда и куда нужно приходить?",
            answer: (
                <AnswerText>
                    На главной странице указана подробная информация.
                </AnswerText>
            )
        },
        {
            question: "Как добраться до площадки 7 сентября?",
            answer: (
                <>
                    <AnswerText mb="15px">
                        Будет организован трансфер. Но мы можете добраться на своей машине,
                        на площадке есть парковка для гостей.
                    </AnswerText>
                    <AnswerText mb="10px">
                        Если вы добираетесь самостоятельно, то нужно приехать на площадку к 15:00.
                    </AnswerText>
                    <AnswerNote>
                        Иначе смотрите информацию о трансфере на главной странице.
                    </AnswerNote>
                </>
            )
        },
        {
            question: "Я хочу подготовить номер или тост для ресторана. К кому мне обратиться?",
            answer: (
                <>
                    <AnswerText mb="15px">
                        Вы можете обратиться с этим вопросом к ведущему. По всем другим вопросам
                        в день ресторана 7 сентября вы можете обратиться к координатору.
                    </AnswerText>
                    <AnswerText>
                        На главной странице есть их контакты: <AnswerLink href="#">ССЫЛКА</AnswerLink>
                    </AnswerText>
                </>
            )
        },
        {
            question: "Что делать нельзя?",
            answer: (
                <AnswerText>
                    Мы бы хотели попросить воздержаться от призывов "Горько".
                    Нам будет неуютно и некомфортно от этой традиции...
                </AnswerText>
            )
        }
    ];

    return (
        <FaqPage>
            <WeddingHeader>
                <CoupleNames>Частые вопросы</CoupleNames>
            </WeddingHeader>

            <FaqContainer>
                {faqItems.map((item, index) => (
                    <FaqItem
                        key={index}
                        index={index}
                        active={activeIndex === index}
                        onClick={() => toggleAnswer(index)}
                    >
                        <FaqQuestion>
                            {item.question}
                            <FaqIcon>
                                {activeIndex === index ? '−' : '+'}
                            </FaqIcon>
                        </FaqQuestion>
                        {activeIndex === index && (
                            <FaqAnswer>
                                {item.answer}
                            </FaqAnswer>
                        )}
                    </FaqItem>
                ))}
            </FaqContainer>
        </FaqPage>
    );
};

export default Faq;