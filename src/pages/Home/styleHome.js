import styled from 'styled-components';
import backgroundHero from '/assets/HeroBackground.gif';
import { PrimaryColors, Text } from '../../utils/color';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
  background: url(${backgroundHero}) no-repeat center;
`;

export const HeroContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1152px;
`;

export const HeroTextContent = styled.div`
  padding: 10rem 0;
  width: 100%;
  row-gap: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${Text.inverted};
  text-align: center;
  h1 {
    margin: 0;
    font-size: 78px;
    margin-bottom: 20px;
  }
  p {
    margin: 0;
    font-size: 24px;
    text-align: center;
  }
`;

export const HeroCardWrapper = styled.div`
  width: 100%;
  justify-content: start;
`;

export const HeroCard = styled.div`
  width: 400px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  color: ${Text.inverted};
  padding: 24px 32px;
  border-radius: 24px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  h4 {
    font-size: 20px;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  svg {
    width: 24px;
  }
`;

export const ResiliciencyContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 6rem 0;
`;

export const ResiliciencyCardWrapper = styled.div`
  max-width: 1152px;
  background-color: ${PrimaryColors.primary900};
  border-radius: 24px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const ResiliciencyText = styled.div`
  color: ${Text.inverted};
  padding: 16px 32px;
  row-gap: 0;
  h2 {
    font-size: 48px;
  }
`;
