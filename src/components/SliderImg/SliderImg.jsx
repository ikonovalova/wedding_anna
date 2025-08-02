import React, {useRef, useState} from 'react';
import * as S from './styles';

import photoMain from '../../assets/sliderAbout/main.jpg';
import photoGraduation from '../../assets/sliderAbout/graduation2024.png';
import photoFirstNewYear from '../../assets/sliderAbout/first-new-year2015.jpg';
import photoFirstSkiing from '../../assets/sliderAbout/first-skiing-2017.jpg';
import photoGreenhouse from '../../assets/sliderAbout/a1.jpg';
import photo2 from '../../assets/sliderAbout/a2.png';
import photo3 from '../../assets/sliderAbout/a3.png';
import photo4 from '../../assets/sliderAbout/a4.png';
// import photo5 from '../../assets/sliderAbout/about5.jpg';
// import photo5 from '../../assets/sliderAbout/a1.png';
// import photo6 from '../../assets/sliderAbout/a1.png';
// import photo7 from '../../assets/sliderAbout/a1.png';
// import photo8 from '../../assets/sliderAbout/a1.png';
// import photo9 from '../../assets/sliderAbout/a1.png';

const SliderImg = () => {

    const photos = [
        { src: photoMain },
        { src: photoFirstNewYear, date: '31 декабря 2015' },
        { src: photoFirstSkiing, date: '17 февраля 2017' },
        { src: photoGreenhouse, date: '11 апреля 2021' },
        { src: photoGraduation, date: '4 июня 2024' },
        { src: photo4 },
        { src: photo2 },
        { src: photo3, date: '21 марта 2025' },
        // { src: photo5, date: '15.05.2020' },
        // { src: photo6 },
        // { src: photo7, date: '15.05.2020' },
        // { src: photo8, date: '15.05.2020' },
        // { src: photo9, date: '15.05.2020' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const thumbnailsRef = useRef(null);

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);

        if (thumbnailsRef.current) {
            const thumbnails = thumbnailsRef.current;
            const thumbnail = thumbnails.children[index];
            thumbnail.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    return (
        <S.SliderContainer>
            <S.MainImageContainer>
                <S.MainImage src={photos[currentIndex].src} alt={`Фото ${currentIndex + 1}`} />
                {photos[currentIndex]?.date && <S.PhotoDate>{photos[currentIndex].date}</S.PhotoDate>}
                <S.NavButton left onClick={prevSlide}>&#10094;</S.NavButton>
                <S.NavButton right onClick={nextSlide}>&#10095;</S.NavButton>
            </S.MainImageContainer>

            <S.ThumbnailsContainer ref={thumbnailsRef}>
                {photos.map((photo, index) => (
                    <S.ThumbnailWrapper key={index}>
                        <S.Thumbnail
                            src={photo.src}
                            alt={`Миниатюра ${index + 1}`}
                            onClick={() => handleThumbnailClick(index)}
                            active={index === currentIndex}
                        />
                    </S.ThumbnailWrapper>
                ))}
            </S.ThumbnailsContainer>
        </S.SliderContainer>
    );
};

export default SliderImg;