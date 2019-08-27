const initialState = '';

export default (state = initialState, action) => {
  // console.log('reducer: ACHIEVES state: ', state, ", action.type: ", action)
  // var copy;
  switch (action.type) {
    case 'setAchieves':
      return action.payload;
    default:
      return state;
  }
}

