import orders from '../api.js';
import { CREATE_ORDER } from './types';

export const createOrder = (formValues) => {
  return async (dispatch) => {
    const response = await orders.post('/api/magic', formValues);
    dispatch({ type: CREATE_ORDER, payload: response.data });
  };
};
