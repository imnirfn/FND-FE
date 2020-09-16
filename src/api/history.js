/* eslint-disable import/no-cycle */
import api from '../utils/api';

// eslint-disable-next-line import/prefer-default-export
export function getHistory() {
  return api({
    method: 'get',
    url: '/dynamo/url-model',
  });
}
