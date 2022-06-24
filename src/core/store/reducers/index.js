import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import characterDetailsReducer from './characterDetailsReducer';

export default combineReducers({
	characters: charactersReducer,
	characterDetails: characterDetailsReducer,
});
