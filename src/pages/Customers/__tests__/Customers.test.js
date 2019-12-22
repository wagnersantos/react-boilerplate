import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'core/assets/style';
import { selectors } from '../store/reducer';
import Customers from '..';

jest.mock('react-redux');
afterEach(cleanup);

const mockState = {
  customers: {
    customers: [
      {
        name: {
          title: 'Miss',
          first: 'Cordula',
          last: 'Bartel'
        },
        login: { uuid: '30095c3a-e0e6-4f8e-9386-7c05e56a4091' },
        picture: { thumbnail: 'thumbnail' }
      }
    ],
    loaders: {
      customersList: false
    }
  }
};

describe('Customers components', () => {
  it('should render customers', () => {
    const customers = selectors.getCustomers(mockState);
    const loaders = selectors.getLoaders(mockState);
    useSelector.mockImplementation(() => customers, loaders);

    const dispatch = () => jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Customers />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(getByTestId('customers')).toContainElement(
      getByText('Miss Cordula Bartel')
    );
  });
});
