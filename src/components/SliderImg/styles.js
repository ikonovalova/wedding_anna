import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 40px;
`;

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const PhotoDate = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: rgba(212, 163, 115, 0.9);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
    right: 15px;
    bottom: 15px;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  color: #333;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  ${({ left }) => left && `left: 15px;`}
  ${({ right }) => right && `right: 15px;`}
`;

// export const ThumbnailsContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding: 0 10px;
// `;

export const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #d4a373 #f1f1f1;
  -webkit-overflow-scrolling: touch; /* Для плавного скролла на iOS */
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d4a373;
    border-radius: 3px;
  }

  /* Скрыть скроллбар, но оставить возможность скролла */
  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const ThumbnailWrapper = styled.div`
  flex: 0 0 auto;
  position: relative;
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${({ active }) => active ? '#d4a373' : 'transparent'};
  opacity: ${({ active }) => active ? '1' : '0.7'};

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
//
// export const Thumbnail = styled.img`
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   border: 2px solid ${({ active }) => active ? '#d4a373' : 'transparent'};
//   opacity: ${({ active }) => active ? '1' : '0.7'};
//
//   &:hover {
//     opacity: 1;
//     transform: scale(1.05);
//   }
//
//   @media (max-width: 768px) {
//     width: 50px;
//     height: 50px;
//   }
// `;