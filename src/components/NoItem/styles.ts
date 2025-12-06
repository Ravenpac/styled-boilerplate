import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 1.25rem;

  color: ${({ theme }) => theme.colors.neutral_60};
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 1.125rem;

  color: ${({ theme }) => theme.colors.neutral_60};
`;
