const initialState = {
  friends: [
    { name: 'omer' },
    { name: 'omeri' },
    { name: 'Tomer' }
  ]
}

export default (state = initialState, action) => {
  // console.log('reducer: FRIENDS state: ', state, ", action.type: ", action)
  var copy;
  switch (action.type) {
    case 'addFriend':
      copy = JSON.parse(JSON.stringify(state));
      copy.friends.push({ name: 'Tomer22' });
      return copy;
    default:
      return state;
  }
}

