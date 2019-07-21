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
function updateFriend(value) {
  return async (dispatch) => {
    const friends = await FriendsService.update(value);
    dispatch({ type: 'updateFriend', payload: friends })
  }
}

export default {
  loadFriends,
  somefunc,
  updateFriend
}