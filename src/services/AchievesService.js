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
    },
    {
      _id: '103',
      title: 'title -title 333',
      description: 'description description description description',
      icon: '',
      level: 4,
      capacity: 200,
      process: 85,
    },
    {
      _id: '104',
      title: 'title -title 444',
      description: 'description description description description',
      icon: '',
      level: 2,
      capacity: 20,
      process: 17,
    },
    {
      _id: '105',
      title: 'title -title 555',
      description: 'description description description description',
      icon: '',
      level: 2,
      capacity: 25,
      process: 11,
    },
    {
      _id: '106',
      title: 'title -title 666',
      description: 'description description description description',
      icon: '',
      level: 3,
      capacity: 40,
      process: 39,
    },
  ]
}

function getAchieves() {
  return Promise.resolve(initialState)
}

export default {
  getAchieves
}