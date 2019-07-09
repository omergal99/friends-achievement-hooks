const initialState = {
  friends: [
    {
      name: 'Omer', img: 'assets/img/friends/omer.jpg',
      score: 3,
      achieves: [
        { id: '101' },
        { id: '102' },
        { id: '103' },
        { id: '104' },
      ]
    },
    {
      name: 'Meler', img: 'assets/img/friends/meler.jpg',
      score: 3,
      achieves: [
        { id: '101' },
        { id: '102' },
        { id: '103' },
        { id: '104' },
      ]
    },
    {
      name: 'Tomer', img: 'assets/img/friends/tomer.jpg',
      score: 3,
      achieves: [
        { id: '101' },
        { id: '102' },
        { id: '103' },
        { id: '104' },
      ]
    },
    {
      name: 'Omrirer5678', img: 'assets/img/friends/omri.jpg',
      score: 3,
      achieves: [
        { id: '101' },
        { id: '102' },
        { id: '103' },
        { id: '104' },
      ]
    },
    {
      name: 'Nitzan', img: 'assets/img/friends/nitzan.jpg',
      score: 3,
      achieves: [
        { id: '101' },
        { id: '102' },
        { id: '103' },
        { id: '104' },
      ]
    },
  ]
}

function getFriends() {
  return Promise.resolve(initialState)
}

export default {
  getFriends
}