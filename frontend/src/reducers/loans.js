import { GET_LOANS, ADD_LOAN, UPDATE_LOAN, DELETE_LOAN } from '../actions/types.js';

const initialState = {
	loans: []
}

export default function(state=initialState, action) {
	switch(action.type) {
		case GET_LOANS:
			return {
				...state,
				loans: action.payload
			}
		case ADD_LOAN:
			return {
				...state,
				loans: [...state.loans, action.payload]
			}
		case UPDATE_LOAN:
			return {
				...state,
				loans: state.loans.map(loan => (loan.id === action.payload.id ? action.payload : loan))
			}
		case DELETE_LOAN:
			return {
				...state,
				loans: state.loans.filter(loan => loan.id !== action.payload)
			}	
		default:
			return state;
	}

}