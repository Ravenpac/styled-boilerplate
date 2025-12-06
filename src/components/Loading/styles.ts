import styled, { keyframes } from 'styled-components';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;

  width: 100%;
  height: 100%;

  font-size: inherit;
  color: inherit;
`;

export const Spinner = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 1s linear infinite;
  color: inherit;
  font-size: inherit;
`;
