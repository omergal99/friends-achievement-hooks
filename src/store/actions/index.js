import FriendsActions from './FriendsActions';
import AchievesActions from './AchievesActions';
import UserActions from './UserActions';

export default {
    ...FriendsActions,
    ...AchievesActions,
    ...UserActions
};