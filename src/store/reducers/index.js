import FriendsStore from './FriendsStore'
import AchievesStore from './AchievesStore'
import UserStore from './UserStore'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    friendsStore: FriendsStore,
    achievesStore: AchievesStore,
    userStore: UserStore
});

export default rootReducer;