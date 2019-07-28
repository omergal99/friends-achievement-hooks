const initialState = {
  friends: [
    { name: 'omer' },
    { name: 'omeri' },
    { name: 'Tomer' }
  ]
}

export default (state = initialState, action) => {
  var copy;
  // console.log('reducer: FRIENDS state: ', state, ", action.type: ", action)
  switch (action.type) {
    case 'setFriends':
      return action.payload;
    case 'updateFriend':
      copy = JSON.parse(JSON.stringify(state));
      const idx = copy.friends.findIndex((friend => friend._id === action.payload.friendId));
      // console.log(copy.friends[idx]);
      copy.friends[idx].achieves.map(achieve => (action.payload.achieveId === achieve._id) ? achieve.points += action.payload.value : achieve);   
      return copy;
    case 'doCopy':
      copy = JSON.parse(JSON.stringify(state));
      return copy;
    case 'addFriend':
      copy = JSON.parse(JSON.stringify(state));
      copy.friends.push({ name: 'Tomer22' });
      return copy;
    default:
      return state;
  }
}