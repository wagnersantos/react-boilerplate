import Api from './api';

export default {
  service: ({ path = '/', method = 'GET', params, ...rest }) =>
    Api.request(path, { method, data: params, ...rest })
};
