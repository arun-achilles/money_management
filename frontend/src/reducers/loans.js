import { GET_LOANS, ADD_LOAN } from '../actions/types.js';

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
		default:
			return state;
	}

}