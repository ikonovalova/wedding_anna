import styled from 'styled-components';

export const AboutPage = styled.div`
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Playfair Display', serif;
    color: #333;
`;

export const HeroSection = styled.div`
    text-align: center;
    padding: 40px;
    background: linear-gradient(135deg, #f9f5f0 0%, #f0e6d9 100%);
    border-radius: 30px;
    margin-top: 40px;

    @media (max-width: 768px) {
        padding: 60px 15px 40px;
    }
`;

export const HeroText = styled.p`
    font-size: 1.2rem;
    line-height: 1.8;
    max-width: 600px;
    color: #555;
    margin: 0 auto;

    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

export const ContentSection = styled.div`
    padding: 0 20px 60px;
`;

export const Section = styled.div`
    position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 25px;
  color: #d4a373;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 2px;
    background: #d4a373;
    margin: 15px auto 0;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TextBlock = styled.div`
    background: white;
    padding: 0 30px 10px;
    border-radius: 15px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
    line-height: 1.8;
    font-size: 1.1rem;
    color: #555;

    p {
        margin-bottom: 20px;
        position: relative;
        padding-left: 20px;

        &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #d4a373;
        }
    }

    @media (max-width: 768px) {
        padding: 20px;
        font-size: 1rem;
    }
`;

export const Highlight = styled.span`
  color: #d4a373;
  font-weight: 500;
`;

export const FinalNote = styled.div`
  text-align: center;
  font-style: italic;
  font-size: 1.2rem;
  color: #888;
  padding-top: 30px;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;