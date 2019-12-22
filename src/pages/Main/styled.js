import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
`;

export const AppHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.whitePrimary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(${({ theme }) => theme.spacing.spacingSmm} + 2vmin);

  a {
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    text-decoration: none;
  }
`;
