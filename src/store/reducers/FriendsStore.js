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
    case 'loadFriends':
      copy = JSON.parse(JSON.stringify(state));
      return copy;
    default:
      return state;
  }
}

