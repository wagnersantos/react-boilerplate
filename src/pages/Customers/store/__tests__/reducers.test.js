import { cleanup } from '@testing-library/react';
import reducer, { initialState } from '../reducer';
import  {actions} from '../actions';

afterEach(cleanup);

const mockLoaders = {customersList: false};

const mockCustomers = {
  name: {
    "title":"Miss","first":"Cordula","last":"Bartel"
  },
  login:{"uuid":"30095c3a-e0e6-4f8e-9386-7c05e56a4091"},
  picture:{"thumbnail":"thumbnail"}
};

describe('Customers reducer', () => {
  it('Action UPDATE_LOADERS', () => {
    const state = reducer(initialState, actions.updateLoaders(mockLoaders))

    expect(state).toStrictEqual({customers: {},loaders: mockLoaders})
  });

  it('Action FETCH_CUSTOMERS.SUCCESS', () => {
    const state = reducer(initialState, actions.fetchCustomers.receive(mockCustomers))

    expect(state).toStrictEqual(
      {
        customers: mockCustomers,
        loaders: { customersList: true }
      }
    );
  });
});
