import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  &::-webkit-scrollbar {
    display: none;
  };

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  * {
   scroll-behavior: smooth;
  };

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  };

  html {
    @media (min-width: 1600px) {
      font-size: 110%;
    }

    @media (max-width: 1300px) {
      font-size: 95%;
    }

    @media (max-width: 1200px) {
      font-size: 82.5%;
    }

    @media (max-width: 1000px) {
      font-size: 95%;
    }

    @media (max-width: 768px) {
      font-size: 90%;
    }
  };

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.whiteish};
    height: 100vh;
    width: 100vw;
    text-rendering: optimizeLegibility;
  };

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  };
`;
