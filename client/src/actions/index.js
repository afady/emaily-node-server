import axios from 'axios';
import { push } from 'connected-react-router';
import { FETCH_USER, LOGOUT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const submitSurvey = values => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  await dispatch({
    type: FETCH_USER,
    payload: res.data
  });

  dispatch(push('/surveys'));
};

export const logout = () => async dispatch => {
  const res = await axios.get('/api/logout');
  await dispatch({
    type: LOGOUT,
    payload: res.data
  });

  dispatch(push('/'));
};
