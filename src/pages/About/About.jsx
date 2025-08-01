import React from 'react';
import * as S from './styles';
import SliderImg from "../../components/SliderImg/SliderImg.jsx";

const About = () => {
    return (
        <S.AboutPage>
            <S.HeroSection>
                <S.HeroText>
                    Мы — Анна и Степан, пара, которую объединяет любовь к приключениям,
                    уютным вечерам и всему, что делает жизнь интереснее.
                </S.HeroText>
                <S.HeroText>
                    Познакомились в 2015 году в университете СПбГУ.
                    И вот уже 10 лет идем по жизни вместе.
                </S.HeroText>
            </S.HeroSection>

            <SliderImg />

            <S.ContentSection>
                <S.Section>
                    <S.SectionTitle>Что нас объединяет?</S.SectionTitle>
                    <S.TextBlock>
                        <p><S.Highlight>Интересы:</S.Highlight> компьютерные игры с открытым миром, танцы (бачата), детективы, сериалы, аниме, путешествия и наши любимые коты и растения.</p>

                        <p><S.Highlight>Стиль жизни:</S.Highlight> минимализм, умный дом, много зелени вокруг и стремление к уюту.</p>

                        <p><S.Highlight>Отдых:</S.Highlight> домашние вечеринки с друзьями, прогулки по экотропам, спортзал, мастерская в гараже и совместные поездки.</p>
                    </S.TextBlock>
                </S.Section>

                <S.Section>
                    <S.SectionTitle>Наши любимые моменты</S.SectionTitle>
                    <S.TextBlock>
                        <p><S.Highlight>Первое свидание:</S.Highlight> морозный Петергоф, пустые аллеи, тонны снега и кинотеатр с «Выжившим».</p>

                        <p><S.Highlight>Теплые воспоминания:</S.Highlight> домашние посиделки, поездки в гараж, совместные тренировки и вечера под сериалы.</p>
                    </S.TextBlock>
                </S.Section>

                <S.Section>
                    <S.SectionTitle>О чем мечтаем?</S.SectionTitle>
                    <S.TextBlock>
                        <p>О квартире, наполненной светом, растениями и технологиями. О путешествиях, которые еще впереди.</p>

                        <p>О свадьбе, которая будет яркой, комфортной и по-настоящему нашей — без лишних традиций, но с драйвом, танцами и теплыми эмоциями.</p>

                        <p>Наш стиль: <S.Highlight>доверительный, помогающий, открытый</S.Highlight>. Любим вкусную еду (особенно острую), позитивные эмоции и дорогих нам людей.</p>
                    </S.TextBlock>
                </S.Section>

                <S.FinalNote>
                    Спасибо, что разделяете нашу радость — для нас важно, что вы будете рядом в этот день!
                </S.FinalNote>
            </S.ContentSection>
        </S.AboutPage>
    );
};

export default About;