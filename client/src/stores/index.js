//Reducer;
import userReducer from './auth';

//redux
import { combineReducers } from 'redux'

//export All;
export * from './auth/functions';
export * from './auth/type';

const rootReducer = combineReducers({ userReducer });

export default rootReducer;