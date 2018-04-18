import {UPDATE_SESSION} from './actionTypes';

export const updateSession = (session) => {
  return {
    type: UPDATE_SESSION,
	session
  };
};
