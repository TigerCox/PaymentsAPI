import {UPDATE_SESSION} from '../actions/actionTypes';
import initialState from './initialState';

const session = (session = initialState.session, action) => {
  if (!action || !action.type) {
    return session;
  }
  switch (action.type) {
    case UPDATE_SESSION:
      return action.session;
	default:
      return session;
  }
};

export default session;
