 import axios from 'axios';
 import { createMessage, returnErrors } from './messages';
 import { GET_LEADS, ADD_LEAD, DELETE_LEAD, GET_ERRORS }  from './types';
 import { tokenConfig } from "./auth";


 // GET LEADS

export const getLeads = () => (dispatch, getState) => {
  axios.get('/api/leads/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));
 }

export const addLead = data => (dispatch, getState) => {
  axios.post('/api/leads/', data, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added"}))
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));

 }

export const deleteLead = id => (dispatch, getState) => {
  axios.delete(`/api/leads/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead deleted"}))
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));
 }