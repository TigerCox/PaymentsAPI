import {UPDATE_REQUEST} from './actionTypes';
import payments from '../api/payments';

export const updateRequest = (id, request) => {
  return (dispatch) => {
    let payment = new payments(dispatch);
    payment.updateRequest(id, request);
  };
};
