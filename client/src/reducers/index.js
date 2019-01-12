import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import SearchInputReducer from './reducer-search-input';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    searchInput: SearchInputReducer,
});

export default allReducers;