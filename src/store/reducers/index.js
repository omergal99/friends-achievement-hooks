import FriendsStore from './FriendsStore'
import UserStore from './UserStore'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    friendsStore: FriendsStore,
    userStore: UserStore
});

export default rootReducer;