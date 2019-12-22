import { call, put, takeEvery, all } from 'redux-saga/effects';
import Providers from 'core/providers';
import { actions, types } from './actions';

export function* loadCustomers() {
  try {
    yield put(actions.updateLoaders({ customersList: true }));
    const customers = yield call(Providers.service, {
      path: '/?results=5&nat=us,fr,br'
    });
    yield put(actions.fetchCustomers.receive(customers.results));
  } catch (error) {
    const message = error.response.data && error.response.data.message;
    yield put(actions.fetchCustomers.error(message));
  } finally {
    yield put(actions.updateLoaders({ customersList: false }));
  }
}

export default function* root() {
  yield all([takeEvery(types.FETCH_CUSTOMERS.REQUEST, loadCustomers)]);
}
