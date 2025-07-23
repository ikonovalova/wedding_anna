import React, { useState } from 'react';
import './styles.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "Где можно остановиться, если вы не проживаете в СПб?",
            answer: "Инфа"
        },
        {
            question: "Что подарить?",
            answer: "На свой выбор, мы рады любому подарку, особенно вашему присутствию. Но если вы все еще хотите что-то подарить сверху, то лучше деньги."
        },
        {
            question: "Можно ли прийти с ребенком?",
            answer: "Нет"
        },
        {
            question: "Дресс-код",
            answer: "Указан на главной странице"
        }
    ];

    return (
        <div className="faq-page">
            <div className="wedding-header">
                <h1 className="couple-names">Частые вопросы</h1>
            </div>

            <div className="faq-container">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className="faq-question">
                            {item.question}
                            <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;