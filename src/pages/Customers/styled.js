import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.whitePrimary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(${({ theme }) => theme.spacing.spacingSmm} + 2vmin);
  color: ${({ theme }) => theme.blackPrimary};

  ul > li {
    margin: ${({ theme }) => theme.spacing.spacingBase} 0;
    list-style: none;
    display: flex;
    align-items: center;

    img {
      border-radius: 25px;
      margin-right: ${({ theme }) => theme.spacing.spacingBase};
    }

    p {
      font-family: ${({ theme }) => theme.typography.fontFamilyPrimary};
      color: ${({ theme }) => theme.colors.blackPrimary};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing.spacingSmm} 0;
    display: block;
  }
`;
