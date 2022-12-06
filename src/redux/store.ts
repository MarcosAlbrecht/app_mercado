import { createStore, combineReducers} from 'redux';
import email from './reducers/user';
 
const rootReducer = combineReducers({
  email: email,
});
 
export const store = createStore(rootReducer);