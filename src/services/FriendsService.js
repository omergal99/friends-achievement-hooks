const initialState = {
  friends: [
    {
      _id: 4000,
      name: 'Omer', img: 'assets/img/friends/omer.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', process: 1200 },
        { _id: '102', title: 'המסיע המתמיד', process: 320 },
        { _id: '103', title: 'החונה במהירות', process: 840 },
        { _id: '104', title: 'המטייל בחו"ל', process: 10 },
        { _id: '105', title: 'העוזר לחבר', process: 15 },
        { _id: '106', title: 'השומר על קשר', process: 150 },
        { _id: '107', title: 'זה שכל היום בפלאפון', process: 80 },
        { _id: '108', title: 'הרומנטיקן', process: 1028 },
        { _id: '109', title: 'rogue hazelnut!', process: 0 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', process: 6 },
        { _id: '111', title: 'אכלתי שווארמה', process: 40 },
        { _id: '112', title: 'הנוסע המתמיד', process: 45 },
        { _id: '113', title: 'המביא פירות', process: 103 },
        { _id: '114', title: 'האוהב להתארגן', process: 3 },
        { _id: '115', title: 'מפעיל שירים באוטו', process: 14 },
        { _id: '116', title: 'איש המצלמה', process: 24 },
        { _id: '117', title: 'המעיר על הנהיגה', process: 99 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', process: 67 },
      ]
    },
    {
      _id: 4001,
      name: 'Meler', img: 'assets/img/friends/meler.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', process: 33 },
        { _id: '102', title: 'המסיע המתמיד', process: 450 },
        { _id: '103', title: 'החונה במהירות', process: 0 },
        { _id: '104', title: 'המטייל בחו"ל', process: 2551 },
        { _id: '105', title: 'העוזר לחבר', process: 113 },
        { _id: '106', title: 'השומר על קשר', process: 8 },
        { _id: '107', title: 'זה שכל היום בפלאפון', process: 0 },
        { _id: '108', title: 'הרומנטיקן', process: 159 },
        { _id: '109', title: 'rogue hazelnut!', process: 70 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', process: 6 },
        { _id: '111', title: 'אכלתי שווארמה', process: 4999 },
        { _id: '112', title: 'הנוסע המתמיד', process: 32 },
        { _id: '113', title: 'המביא פירות', process: 80 },
        { _id: '114', title: 'האוהב להתארגן', process: 74 },
        { _id: '115', title: 'מפעיל שירים באוטו', process: 24 },
        { _id: '116', title: 'איש המצלמה', process: 37 },
        { _id: '117', title: 'המעיר על הנהיגה', process: 499 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', process: 25 },
      ]
    },
    {
      _id: 4002,
      name: 'Tomer', img: 'assets/img/friends/tomer.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', process: 999 },
        { _id: '102', title: 'המסיע המתמיד', process: 451 },
        { _id: '103', title: 'החונה במהירות', process: 430 },
        { _id: '104', title: 'המטייל בחו"ל', process: 1480 },
        { _id: '105', title: 'העוזר לחבר', process: 1000 },
        { _id: '106', title: 'השומר על קשר', process: 455 },
        { _id: '107', title: 'זה שכל היום בפלאפון', process: 2 },
        { _id: '108', title: 'הרומנטיקן', process: 1 },
        { _id: '109', title: 'rogue hazelnut!', process: 0 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', process: 4999 },
        { _id: '111', title: 'אכלתי שווארמה', process: 41 },
        { _id: '112', title: 'הנוסע המתמיד', process: 33 },
        { _id: '113', title: 'המביא פירות', process: 5 },
        { _id: '114', title: 'האוהב להתארגן', process: 3 },
        { _id: '115', title: 'מפעיל שירים באוטו', process: 280 },
        { _id: '116', title: 'איש המצלמה', process: 43 },
        { _id: '117', title: 'המעיר על הנהיגה', process: 24 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', process: 500 },
      ]
    },
    {
      _id: 4003,
      name: 'Omri', img: 'assets/img/friends/omri.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', process: 2720 },
        { _id: '102', title: 'המסיע המתמיד', process: 5 },
        { _id: '103', title: 'החונה במהירות', process: 85 },
        { _id: '104', title: 'המטייל בחו"ל', process: 270 },
        { _id: '105', title: 'העוזר לחבר', process: 32 },
        { _id: '106', title: 'השומר על קשר', process: 56 },
        { _id: '107', title: 'זה שכל היום בפלאפון', process: 24 },
        { _id: '108', title: 'הרומנטיקן', process: 347 },
        { _id: '109', title: 'rogue hazelnut!', process: 48 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', process: 3 },
        { _id: '111', title: 'אכלתי שווארמה', process: 115 },
        { _id: '112', title: 'הנוסע המתמיד', process: 4999 },
        { _id: '113', title: 'המביא פירות', process: 33 },
        { _id: '114', title: 'האוהב להתארגן', process: 40 },
        { _id: '115', title: 'מפעיל שירים באוטו', process: 80 },
        { _id: '116', title: 'איש המצלמה', process: 0 },
        { _id: '117', title: 'המעיר על הנהיגה', process: 1 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', process: 52 },
      ]
    },
    {
      _id: 4004,
      name: 'Nitzan', img: 'assets/img/friends/nitzan.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', process: 1880 },
        { _id: '102', title: 'המסיע המתמיד', process: 5 },
        { _id: '103', title: 'החונה במהירות', process: 3 },
        { _id: '104', title: 'המטייל בחו"ל', process: 40 },
        { _id: '105', title: 'העוזר לחבר', process: 580 },
        { _id: '106', title: 'השומר על קשר', process: 13 },
        { _id: '107', title: 'זה שכל היום בפלאפון', process: 7 },
        { _id: '108', title: 'הרומנטיקן', process: 55 },
        { _id: '109', title: 'rogue hazelnut!', process: 60 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', process: 3 },
        { _id: '111', title: 'אכלתי שווארמה', process: 2 },
        { _id: '112', title: 'הנוסע המתמיד', process: 8 },
        { _id: '113', title: 'המביא פירות', process: 512 },
        { _id: '114', title: 'האוהב להתארגן', process: 4999 },
        { _id: '115', title: 'מפעיל שירים באוטו', process: 211 },
        { _id: '116', title: 'איש המצלמה', process: 127 },
        { _id: '117', title: 'המעיר על הנהיגה', process: 40 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', process: 52 },
      ]
    }
  ]
}

function getFriends() {
  return Promise.resolve(initialState)
}

function update(updatedAchieve) {
  const idx = initialState.friends.findIndex((friend => friend._id === updatedAchieve.friendId))
  // console.log(initialState.friends[idx])
  initialState.friends[idx].achieves.map(achieve => (updatedAchieve.achieveId === achieve._id) ? achieve.process += updatedAchieve.value : achieve)
  // const copy = JSON.parse(JSON.stringify(initialState))
  // return Promise.resolve(copy)
  return Promise.resolve(initialState)
}

export default {
  getFriends,
  update
}