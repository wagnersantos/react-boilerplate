import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'core/assets/style';
import history from 'core/utils/history';
import App from '..';

afterEach(cleanup);

describe('Main pages', () => {
  it('Should render Main', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(getByTestId('app')).toBeInTheDocument();
    // expect(getByTestId('app')).toMatchSnapshot();
  });

  it('link validation', () => {
    const { getByText } = render(
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    );

    fireEvent.click(getByText('Customers Page'));
    expect(history.location.pathname).toBe('/customers');
  });
});
