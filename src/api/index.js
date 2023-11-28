import { ApiConstants } from './ApiConstants';
import axios from 'axios';
import { setupInterceptorsTo } from './Interceptors';

const url = ApiConstants.BASE_URL;
const instance = axios.create({
  baseURL: url,
  headers: { 'Content-type': 'application/json' },
});

setupInterceptorsTo(instance);

export default async function api({ url, body, method, params, headers = {}, responseType }) {
  const res = await instance({
    data: body,
    method: method,
    url: url,
    params: params,
    headers: headers,
    responseType: responseType,
  });
  if (res) {
    return res.data;
  } else {
    throw Object.assign(new Error('Invalid Response'), { code: 402 });
  }
}
