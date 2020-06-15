import { combineReducers } from 'redux';
import leads from './leads';
import loans from './loans';
import errors from './errors';
import messages from './messages';
import auth from "./auth";

export default combineReducers({
	leads,
	loans,
	errors,
	messages,
	auth
});