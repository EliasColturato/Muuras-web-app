import styled from 'styled-components';
import { PrimaryColors, Text } from '../../utils/color';

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1152px;
  width: 100%;
  height: max-content;
  background-color: ${PrimaryColors.primary900};
  border-radius: 99px;
  padding: 3px 8px;
`;

export const HeaderLinks = styled.div`
  padding: 0 24px;
  display: flex;
  color: ${Text.inverted};
  column-gap: 40px;
  align-items: center;
  img {
    height: 24px;
    width: 18px;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  select {
    background: none;
    color: ${Text.inverted};
    border: none;
  }
  option {
    color: ${Text.primary};
  }
  button {
    display: flex;
    height: 48px;
    width: 138px;
    padding: 8px 12px;
    align-items: center;
    column-gap: 1rem;
    border-radius: 99px;
    justify-content: center;
    background-color: ${PrimaryColors.primary500};
    color: ${Text.inverted};
    border: none;
    cursor: pointer;
  }
  svg {
    width: 20px;
  }
`;
