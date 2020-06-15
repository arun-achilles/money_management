import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_LOANS, ADD_LOAN, GET_ERRORS }  from './types';
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
     dispatch(createMessage({ addLead: "Transaction Added"}))
     dispatch({
       type: ADD_LOAN,
       payload: res.data
     });
   })
   .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)));

}
