import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_LOANS, ADD_LOAN, UPDATE_LOAN, DELETE_LOAN, GET_ERRORS }  from './types';
import { tokenConfig } from "./auth";


// GET LOANS

export const getLoans = () => (dispatch, getState) => {
 axios.get('/api/loans/', tokenConfig(getState))
   .then(res => {
     dispatch({
       type: GET_LOANS,
       payload: res.data
     });
   })
   .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addLoan= data => (dispatch, getState) => {
 axios.post('/api/loans/', data, tokenConfig(getState))
   .then(res => {
     dispatch(createMessage({ addLoan: "Transaction Added"}))
     dispatch({
       type: ADD_LOAN,
       payload: res.data
     });
   })
   .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));

}

export const updateLoan= data => (dispatch, getState) => {
  axios.put(`/api/loans/${data.id}/`, data, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ updateLoan: "Transaction Updated"}))
      dispatch({
        type: UPDATE_LOAN,
        payload: res.data
      });
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));
 
 }
 

export const deleteLoan= id => (dispatch, getState) => {
  axios.delete(`/api/loans/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLoan: "Transaction Deleted"}))
      dispatch({
        type: DELETE_LOAN,
        payload: id
      });
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));
 
 }
 