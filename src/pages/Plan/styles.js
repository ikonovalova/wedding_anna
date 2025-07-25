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

export const SchedulePage = styled.div`
                            max-width: 800px;
margin: 0 auto;
padding: 100px 20px 60px;
font-family: 'Playfair Display', serif;
color: #333;
`;

export const WeddingHeader = styled.div`
                             text-align: center;
margin-bottom: 50px;
`;

export const CoupleNames = styled.h1`
                           font-size: 2.5rem;
font-weight: 400;
letter-spacing: 2px;
margin-bottom: 10px;
color: #333;
`;

export const TimelineContainer = styled.div`
                                 position: relative;
padding-left: 80px;

&::before {
    content: '';
    position: absolute;
    left: 50px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #d4a373, #a5a58d);
}

@media (max-width: 768px) {
    padding-left: 100px;

    &::before {
        left: 40px;
    }
}
`;

export const TimelineEvent = styled.div`
                             position: relative;
    display: flex
;
    gap: 12px;
    align-items: center;
margin-bottom: 40px;
animation: ${fadeIn} 0.6s ease-out forwards;

&:nth-child(1) { animation-delay: 0.1s; }
&:nth-child(2) { animation-delay: 0.3s; }
&:nth-child(3) { animation-delay: 0.5s; }
&:nth-child(4) { animation-delay: 0.7s; }

@media (max-width: 768px) {
    &::after {
        left: -55px;
    }
}
`;

export const EventTime = styled.div`
text-align: right;
font-family: 'Montserrat', sans-serif;
font-size: 0.9rem;
font-weight: 500;
color: #d4a373;
white-space: nowrap;
line-height: 1.2;
//

//@media (max-width: 768px) {
//    left: -100px;
//    width: 90px;
//    font-size: 0.8rem;
//}
`;

export const EventCard = styled.div`
    width: 100%;
    display: flex
;
    flex-direction: column;
    align-items: center;
                         background: white;
padding: 25px;
border-radius: 8px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
border-top: 3px solid #d4a373;

@media (max-width: 768px) {
    padding: 20px;
}
`;

export const EventTitle = styled.h3`
                          font-size: 1.2rem;
font-weight: 500;
margin-bottom: 10px;
color: #555;
letter-spacing: 0.5px;
`;

export const EventDescription = styled.p`
                                color: #666;
font-size: 1rem;
line-height: 1.6;
margin-bottom: 0;
`;