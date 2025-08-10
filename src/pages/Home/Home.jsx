import React from 'react';
import {
    HomePage,
    WeddingHeader,
    CoupleNames,
    Amp,
    WeddingDate,
    InfoCard,
    InfoTitle,
    InfoText,
    MapContainer, ContactPhoto, ContactLinks, TelegramLink, TelegramIcon, PhoneLink, ContactContainer, ContactListContainer,
    DressCodeImage
} from './styles';
import coordinatorPhoto from '../../assets/coord_small.jpg';
import toastmasterPhoto from '../../assets/toastmaster.jpg';
import dresscodePhoto from '../../assets/dresscode2.jpg';


const Home = () => {
    return (
        <HomePage>
            <WeddingHeader>
                <CoupleNames>Степан <Amp>&</Amp> Анна</CoupleNames>
                <WeddingDate>Свадьба 05 & 07.09.2025</WeddingDate>
            </WeddingHeader>

            <InfoCard>
                <InfoTitle>Регистрация в ЗАГС</InfoTitle>
                <InfoText>
                    <strong>Дата:</strong> 05.09.2025<br />
                    <strong>Время:</strong> 19:00<br />
                    <strong>Место:</strong> Дворец бракосочетания №1<br />
                    <strong>Адрес:</strong> Санкт-Петербург, Английская наб., 28
                </InfoText>
                <MapContainer>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=30.293945%2C59.933918&z=16&mode=search&text=%D0%94%D0%B2%D0%BE%D1%80%D0%B5%D1%86%20%D0%B1%D1%80%D0%B0%D0%BA%D0%BE%D1%81%D0%BE%D1%87%D0%B5%D1%82%D0%B0%D0%BD%D0%B8%D1%8F%20%E2%84%961&sll=30.293945%2C59.933918&sspn=0.030041%2C0.008604"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                        title="Дворец бракосочетания №1"
                    ></iframe>
                </MapContainer>
            </InfoCard>

            <InfoCard>
                <InfoTitle>Банкет</InfoTitle>
                <InfoText>
                    <strong>Дата:</strong> 07.09.2025<br />
                    <strong>Время:</strong> 15:00<br />
                    <strong>Место:</strong> Площадка Forest Symphony<br />
                    <strong>Адрес:</strong> Ленинградская область, 31 км Приозерского шоссе <br />
                    <strong>Трансфер:</strong> 13:00 (место будет позже)<br />
                    <strong>Обратный трансфер:</strong> 22:00-23:00
                </InfoText>
                <MapContainer>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=30.360731%2C60.164041&z=15&mode=search&text=Forest%20Symphony&sll=30.360731%2C60.164041&sspn=0.01%2C0.01&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcyNjI5MhJI0KDQvtGB0YHQuNGPLCDQkdCw0YjQutC-0YDQvtCz0L7RgdGC0LjRjywg0KTRgNCw0L3RhtC40Y8g0KHQu9C-0LzQtdC90YLQsNGA0Ys%2C&z=15"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        allowFullScreen
                        title="Площадка Forest Symphony"
                    ></iframe>
                </MapContainer>
            </InfoCard>

            <InfoCard>
                <InfoTitle>Дресс-код</InfoTitle>
                <InfoText>Наш праздник пройдёт в духе уютной осени, и мы будем безумно рады, если вы поддержите эту атмосферу в своих нарядах. Дресс-код: нарядная одежда в тёплой палитре — бежевый, коричневый, тёмно-шоколадный, чёрный.
                     <DressCodeImage src={dresscodePhoto} alt="Координатор" />
                </InfoText>
            </InfoCard>

            <InfoCard attention>
                <InfoTitle>Важная информация</InfoTitle>
                <InfoText>
                    1) К сожалению, на мероприятии не будет аниматора и детской зоны.
                    А также мероприятие планируется быть за городом и долгое.
                    <br /><br /> 2) Мы бы хотели попросить воздержаться от призывов "Горько". Нам будет неуютно и некомфортно от этой традиции.
                     <br /><br /> 3) Нам важно предупредить заранее, что на территории свадебной площадки возможны перебои с мобильным интернетом. Это может затруднить вызов такси через приложения в конце вечера.
                </InfoText>
            </InfoCard>

            <InfoCard contacts>
                <InfoTitle>Контакты организаторов</InfoTitle>
                <InfoText>
                     Вы можете обратиться с вопросом о особенном поздравлении к ведущему. По всем другим вопросам
                        в день ресторана 7 сентября вы можете обратиться к координатору.
                    <ContactListContainer>
                        <ContactContainer>
                                <ContactPhoto src={toastmasterPhoto} alt="Координатор" />
                                Ведущий Олег
                            <ContactLinks>
                                <TelegramLink href="https://t.me/olegtalalay" target="_blank" rel="noopener noreferrer">
                                    <TelegramIcon />
                                    Телеграм: @olegtalalay
                                </TelegramLink>
                                <PhoneLink href="tel:+79215510567">
                                    +7 (921) 551-05-67
                                </PhoneLink>
                            </ContactLinks>
                        </ContactContainer>

                        <ContactContainer>
                        <ContactPhoto src={coordinatorPhoto} alt="Координатор" />
                        Координатор Светлана
                        <ContactLinks>
                            <TelegramLink href="https://t.me/svet_org" target="_blank" rel="noopener noreferrer">
                                <TelegramIcon />
                                Телеграм: @svet_org
                            </TelegramLink>
                            <PhoneLink href="tel:+79219182293">
                                +7 (921) 918-22-93
                            </PhoneLink>
                        </ContactLinks>
                        </ContactContainer>
                    </ContactListContainer>
                </InfoText>
            </InfoCard>
        </HomePage>
    );
};

export default Home;