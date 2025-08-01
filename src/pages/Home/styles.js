import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
               from {
                   opacity: 0;
                   transform: translateY(20px);
               }
to {
    opacity: 1;
    transform: translateY(0);
}
`;

export const HomePage = styled.div`
                        max-width: 800px;
margin: 0 auto;
padding: 40px 20px;
font-family: 'Playfair Display', serif;
color: #333;
text-align: center;
`;

export const WeddingHeader = styled.div`
                             margin-bottom: 50px;
animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const CoupleNames = styled.h1`
                           font-size: 3.5rem;
font-weight: 400;
letter-spacing: 2px;
margin-bottom: 10px;
line-height: 1.2;

@media (max-width: 768px) {
    font-size: 2.5rem;
}
`;

export const Amp = styled.span`
                   font-size: 2.5rem;
color: #d4a373;
margin: 0 10px;
`;

export const WeddingDate = styled.div`
                           font-size: 1.5rem;
letter-spacing: 5px;
color: #6c757d;
margin-top: 15px;
`;

export const InfoCard = styled.div`
                        background: white;
padding: 30px;
margin: 30px auto;
border-radius: 8px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
max-width: 600px;
text-align: center;
border-top: 3px solid #d4a373;
animation: ${fadeIn} 0.6s ease-out forwards;

&:nth-child(2) {
    animation-delay: 0.1s;
}

&:nth-child(3) {
    animation-delay: 0.3s;
}

&:nth-child(4) {
    animation-delay: 0.5s;
}

&:nth-child(5) {
    animation-delay: 0.7s;
}

&:nth-child(6) {
    animation-delay: 0.9s;
}

${props => props.attention && `
        border-top-color: #e9c46a;
        background-color: #fff9f0;
    `}

${props => props.contacts && `
        border-top-color: #a5a58d;
    `}

@media (max-width: 768px) {
    padding: 20px;
    margin: 20px auto;
}
`;

export const InfoTitle = styled.h2`
                         font-size: 1.5rem;
font-weight: 400;
margin-bottom: 20px;
color: #555;
letter-spacing: 1px;
`;

export const InfoText = styled.p`
                        font-size: 1.1rem;
line-height: 1.8;
color: #666;
margin-bottom: 0;
text-align: left;

strong {
    color: #555;
    font-weight: 500;
}

@media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
}
`;

export const MapContainer = styled.div`
                            margin-top: 20px;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

iframe {
    border-radius: 8px;
}
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`;

export const ContactPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #d4a373;
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 10px;
`;

export const TelegramIcon = styled.span`
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230088CC'%3E%3Cpath d='M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
`;

export const TelegramLink = styled.a`
  color: #0088CC;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  padding: 6px 12px;
  border-radius: 6px;
  background-color: rgba(0, 136, 204, 0.1);
  font-size: 15px;
  font-weight: 500;

  &:hover {
    background-color: rgba(0, 136, 204, 0.2);
    text-decoration: none;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PhoneLink = styled.a`
  color: #d4a373;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: rgba(212, 163, 115, 0.1);

  &:hover {
    background-color: rgba(212, 163, 115, 0.2);
    text-decoration: none;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d4a373'%3E%3Cpath d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    margin-right: 8px;
  }
`;

// const InfoText = styled.p`
//   margin-bottom: 15px;
//   strong {
//     color: #555;
//   }
// `;