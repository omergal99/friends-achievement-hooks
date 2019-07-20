const initialState = {
  achieves: [
    {
      _id: '101',
      title: 'title -title 111',
      description: 'description description description description',
      icon: '',
      level: 1,
      capacity: 50,
      process: 23,
    },
    {
      _id: '102',
      title: 'title -title 222',
      description: 'description description description description',
      icon: '',
      level: 5,
      capacity: 100,
      process: 5,
    }
  ]
}

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

