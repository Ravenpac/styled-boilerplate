import styled from 'styled-components';

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface ColorProps {
  color: string;
}

export const Color = styled.div<ColorProps>`
  width: 0.875rem;
  height: 0.875rem;

  background-color: ${({ color }) => color};

  border-radius: 50%;
`;
