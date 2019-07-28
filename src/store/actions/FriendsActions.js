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
  // return (dispatch) => {
    const friends = await FriendsService.updateOne(updatedAchieve);
    // dispatch({ type: 'updateFriend', payload: updatedAchieve });
    dispatch({ type: 'doCopy' });
    dispatch({ type: 'setFriends', payload: friends });
  }
}

export default {
  loadFriends,
  somefunc,
  updateFriendAchieve
}