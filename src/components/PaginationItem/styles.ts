import styled from 'styled-components';

interface ContainerProps {
  $hasPadding?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 0.25rem;

  .MuiPaginationItem-ellipsis {
    min-width: 0;

    padding: 0;

    margin: 0 0.25rem;

    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.neutral_60};
  }
`;

export const PaginationText = styled.span`
  font-weight: 300;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.neutral_60};

  @media (max-width: 600px) {
    display: none;
  }
`;
