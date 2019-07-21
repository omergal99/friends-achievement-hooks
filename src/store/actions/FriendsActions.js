import FriendsService from '../../services/FriendsService';

function somefunc() {
  return (dispatch) => {
    dispatch({ type: 'addFriend', payload: {} })
  }
}
function loadFriends() {
  return async (dispatch) => {
    const friends = await FriendsService.getFriends();
    dispatch({ type: 'setFriends', payload: friends })
  }
}
function updateFriendAchieve(updatedAchieve) {
  return async (dispatch) => {
    const friends = await FriendsService.update(updatedAchieve);
    dispatch({ type: 'updateFriend', payload: friends })
  }
}

export default {
  loadFriends,
  somefunc,
  updateFriendAchieve
}