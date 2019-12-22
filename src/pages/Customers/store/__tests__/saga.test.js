import { cleanup } from '@testing-library/react';
import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import { takeEvery, all } from 'redux-saga/effects';

import api from 'core/providers/api';
import { actions, types } from '../actions';
import root, { loadCustomers } from '../saga';

afterEach(cleanup);

const apiMock = new MockAdapter(api);
const mockResponse = {
  name: {
    title: 'Miss',
    first: 'Cordula',
    last: 'Bartel'
  },
  login: { uuid: 'uuid' },
  picture: { thumbnail: 'thumbnail' }
};

const mockError = { data: { message: 'Falha na conexão' } };

describe('Customers saga', () => {
  beforeEach(() => {
    apiMock.onGet('/?results=5&nat=us,fr,br').reply(200, mockResponse);
  });

  it('should be able to get customers', async () => {
    const dispatch = jest.fn();
    await runSaga({ dispatch }, loadCustomers).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      actions.fetchCustomers.receive(mockResponse.payload)
    );
  });

  it('separate each call customers', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, loadCustomers).toPromise();

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      actions.updateLoaders({ customersList: true })
    );

    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      actions.fetchCustomers.receive(mockResponse.payload)
    );

    expect(dispatch).toHaveBeenNthCalledWith(
      3,
      actions.updateLoaders({ customersList: false })
    );
  });

  it('should fall api returns error', async () => {
    const dispatch = jest.fn();
    apiMock.onGet('/?results=5&nat=us,fr,br').reply(500, mockError);

    await runSaga({ dispatch }, loadCustomers).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      actions.fetchCustomers.error(mockError.payload)
    );
  });

  it('should be forked by all', async () => {
    const func = root().next().value;

    expect(func).toEqual(
      all([takeEvery(types.FETCH_CUSTOMERS.REQUEST, loadCustomers)])
    );
  });
});
