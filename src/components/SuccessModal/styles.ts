import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(144, 159, 89, 0.4);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 20000;
`;

export const Content = styled.main`
  width: 18.75rem;
  height: fit-content;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  border: none;
  border-radius: 0.5rem;
`;

export const Header = styled.header`
  width: 100%;
  min-height: 3.5rem;
  max-height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-bottom: 1px solid rgba(89, 90, 91, 0.1);
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: auto;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 1.25rem;

  color: ${({ theme }) => theme.colors.success_1};
`;

export const TextDivider = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  padding: 1rem;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.neutral_60};

  white-space: pre-line;
`;

export const Question = styled.span`
  font-weight: 300;
  font-size: 0.875rem;

  color: ${({ theme }) => theme.colors.neutral_40};
`;

export const ButtonDivider = styled.footer`
  width: 100%;
  min-height: 3.5rem;
  max-height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;

  padding-right: 1rem;

  border-top: 1px solid rgba(89, 90, 91, 0.1);
`;

export const SendButton = styled.button`
  width: 7rem;
  min-height: 2.5rem;
  max-height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.success_1};

  border: none;
  border-radius: 2.5rem;

  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.white};

  transition: 0.2s all ease;

  &:hover {
    background: ${({ theme }) => theme.colors.success_1_hover};
  }
`;
