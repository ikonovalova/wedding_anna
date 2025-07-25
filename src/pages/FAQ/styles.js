import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const FaqPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 20px 60px;
  font-family: 'Playfair Display', serif;
  color: #333;

  @media (max-width: 768px) {
    padding: 80px 15px 40px;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FaqContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const FaqItem = styled.div`
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.4s ease-out forwards;
  animation-delay: ${props => (props.index + 1) * 0.1}s;

  ${props => props.active && `
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  `}
`;

export const FaqQuestion = styled.div`
  padding: 20px 25px;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 1.1rem;
  color: #555;
  border-left: 3px solid #d4a373;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fafafa;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    font-size: 1rem;
  }
`;

export const FaqIcon = styled.span`
  font-size: 1.3rem;
  color: #d4a373;
  font-weight: bold;
  margin-left: 15px;
`;

export const FaqAnswer = styled.div`
  padding: 20px 25px;
  background-color: white;
  border-top: 1px solid #f0f0f0;
  color: #666;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const AnswerSection = styled.div`
  margin-bottom: ${props => props.mb || '15px'};
`;

export const AnswerTitle = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-size: 1.05rem;
`;

export const AnswerText = styled.div`
  margin-bottom: ${props => props.mb || '10px'};
  line-height: 1.6;
`;

export const AnswerLink = styled.a`
  color: #d4a373;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const AnswerNote = styled.div`
  font-style: italic;
  color: #888;
  font-size: 0.95rem;
  margin-top: 10px;
`;