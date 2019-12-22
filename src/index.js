import 'react-app-polyfill/ie9';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import 'config/ReactotronConfig';

import { GlobalStyle } from 'core/assets/style/global';
import theme from 'core/assets/style';
import store from './store';
import Routes from './routes';

const renderApp = () => {
  const app = (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );

  render(app, document.getElementById('root'));
};

renderApp();
