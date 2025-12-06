import styled from 'styled-components';

interface SwitchProps {
  $isChecked: boolean;
}

export const PersonalizedSwitch = styled.div<SwitchProps>`
  min-width: 2.5rem;
  max-width: 2.5rem;
  height: 1.5rem;

  display: flex;
  align-items: center;

  padding: 0 0.125rem;

  border: none;
  border-radius: 6.25rem;

  background: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.secondary_100 : theme.colors.neutral_20};

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

export const SwitchBall = styled.div<SwitchProps>`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.white};

  border: none;
  border-radius: 50%;

  transition: all 0.3s;

  transform: ${props =>
    props.$isChecked ? 'translateX(1rem)' : 'translateX(0)'};
`;
