import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Brand } from 'components';
import { GlobalStyle } from 'core/assets/style/global';
import logo from 'core/assets/images/logo.svg';
import { AppHeader, AppContainer } from './styled';

const App = () => (
  <>
    <AppContainer data-testid="app">
      <AppHeader>
        <Brand brandImage={logo} />
        <Link to="/customers">Customers Page</Link>
      </AppHeader>
    </AppContainer>
    <GlobalStyle />
  </>
);

export default memo(App);
