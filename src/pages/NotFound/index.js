import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Brand from 'components/Brand';
import { GlobalStyle } from 'core/assets/style/global';
import logo from 'core/assets/images/logo.svg';
import { AppHeader, AppContainer } from './styled';

const NotFound = () => (
  <>
    <AppContainer data-testid="notFound">
      <AppHeader>
        <Brand brandImage={logo} />
        <div>
          Page not found <Link to="/">Return to Home Page</Link>
        </div>
      </AppHeader>
    </AppContainer>
    <GlobalStyle />
  </>
);

export default memo(NotFound);
