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