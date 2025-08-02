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

export const GalleryPage = styled.div`
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Playfair Display', serif;
    color: #333;
`;