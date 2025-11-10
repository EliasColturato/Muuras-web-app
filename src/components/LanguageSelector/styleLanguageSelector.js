import styled from 'styled-components';
import { PrimaryColors, Text } from '../../utils/color';

export const SelectWrapper = styled.div`
  display: flex;
  select {
    background: none;
    color: ${Text.inverted};
    border: none;
    outline: none;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    color: ${Text.inverted};
    border-radius: 16px;
  }
  select:focus {
    border: none;
    outline: none;
  }

  option {
    border-radius: 16px;
    background-color: ${PrimaryColors.primary900};
    border: none;
  }

  option:hover,
  option:focus {
    border-radius: 16px;
    background-color: ${PrimaryColors.primary700};
  }
`;
