const initialState = {
  friends: [
    {
      _id: 4000,
      name: 'Omer', img: 'assets/img/friends/omer.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', points: 1200 },
        { _id: '102', title: 'המסיע המתמיד', points: 320 },
        { _id: '103', title: 'החונה במהירות', points: 840 },
        { _id: '104', title: 'המטייל בחו"ל', points: 10 },
        { _id: '105', title: 'העוזר לחבר', points: 15 },
        { _id: '106', title: 'השומר על קשר', points: 150 },
        { _id: '107', title: 'זה שכל היום בפלאפון', points: 80 },
        { _id: '108', title: 'הרומנטיקן', points: 1028 },
        { _id: '109', title: 'rogue hazelnut!', points: 0 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', points: 6 },
        { _id: '111', title: 'אכלתי שווארמה', points: 40 },
        { _id: '112', title: 'הנוסע המתמיד', points: 45 },
        { _id: '113', title: 'המביא פירות', points: 103 },
        { _id: '114', title: 'האוהב להתארגן', points: 3 },
        { _id: '115', title: 'מפעיל שירים באוטו', points: 14 },
        { _id: '116', title: 'איש המצלמה', points: 24 },
        { _id: '117', title: 'המעיר על הנהיגה', points: 99 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', points: 67 },
      ]
    },
    {
      _id: 4001,
      name: 'Meler', img: 'assets/img/friends/meler.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', points: 33 },
        { _id: '102', title: 'המסיע המתמיד', points: 450 },
        { _id: '103', title: 'החונה במהירות', points: 0 },
        { _id: '104', title: 'המטייל בחו"ל', points: 2551 },
        { _id: '105', title: 'העוזר לחבר', points: 113 },
        { _id: '106', title: 'השומר על קשר', points: 8 },
        { _id: '107', title: 'זה שכל היום בפלאפון', points: 0 },
        { _id: '108', title: 'הרומנטיקן', points: 159 },
        { _id: '109', title: 'rogue hazelnut!', points: 70 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', points: 6 },
        { _id: '111', title: 'אכלתי שווארמה', points: 4999 },
        { _id: '112', title: 'הנוסע המתמיד', points: 32 },
        { _id: '113', title: 'המביא פירות', points: 80 },
        { _id: '114', title: 'האוהב להתארגן', points: 74 },
        { _id: '115', title: 'מפעיל שירים באוטו', points: 24 },
        { _id: '116', title: 'איש המצלמה', points: 37 },
        { _id: '117', title: 'המעיר על הנהיגה', points: 499 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', points: 25 },
      ]
    },
    {
      _id: 4002,
      name: 'Tomer', img: 'assets/img/friends/tomer.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', points: 999 },
        { _id: '102', title: 'המסיע המתמיד', points: 451 },
        { _id: '103', title: 'החונה במהירות', points: 430 },
        { _id: '104', title: 'המטייל בחו"ל', points: 1480 },
        { _id: '105', title: 'העוזר לחבר', points: 1000 },
        { _id: '106', title: 'השומר על קשר', points: 455 },
        { _id: '107', title: 'זה שכל היום בפלאפון', points: 2 },
        { _id: '108', title: 'הרומנטיקן', points: 1 },
        { _id: '109', title: 'rogue hazelnut!', points: 0 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', points: 4999 },
        { _id: '111', title: 'אכלתי שווארמה', points: 41 },
        { _id: '112', title: 'הנוסע המתמיד', points: 33 },
        { _id: '113', title: 'המביא פירות', points: 5 },
        { _id: '114', title: 'האוהב להתארגן', points: 3 },
        { _id: '115', title: 'מפעיל שירים באוטו', points: 280 },
        { _id: '116', title: 'איש המצלמה', points: 43 },
        { _id: '117', title: 'המעיר על הנהיגה', points: 24 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', points: 500 },
      ]
    },
    {
      _id: 4003,
      name: 'Omri', img: 'assets/img/friends/omri.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', points: 2720 },
        { _id: '102', title: 'המסיע המתמיד', points: 5 },
        { _id: '103', title: 'החונה במהירות', points: 85 },
        { _id: '104', title: 'המטייל בחו"ל', points: 270 },
        { _id: '105', title: 'העוזר לחבר', points: 32 },
        { _id: '106', title: 'השומר על קשר', points: 56 },
        { _id: '107', title: 'זה שכל היום בפלאפון', points: 24 },
        { _id: '108', title: 'הרומנטיקן', points: 347 },
        { _id: '109', title: 'rogue hazelnut!', points: 48 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', points: 3 },
        { _id: '111', title: 'אכלתי שווארמה', points: 115 },
        { _id: '112', title: 'הנוסע המתמיד', points: 4999 },
        { _id: '113', title: 'המביא פירות', points: 33 },
        { _id: '114', title: 'האוהב להתארגן', points: 40 },
        { _id: '115', title: 'מפעיל שירים באוטו', points: 80 },
        { _id: '116', title: 'איש המצלמה', points: 0 },
        { _id: '117', title: 'המעיר על הנהיגה', points: 1 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', points: 52 },
      ]
    },
    {
      _id: 4004,
      name: 'Nitzan', img: 'assets/img/friends/nitzan.jpg',
      score: 3,
      achieves: [
        { _id: '101', title: 'The multi champion', points: 1880 },
        { _id: '102', title: 'המסיע המתמיד', points: 5 },
        { _id: '103', title: 'החונה במהירות', points: 3 },
        { _id: '104', title: 'המטייל בחו"ל', points: 40 },
        { _id: '105', title: 'העוזר לחבר', points: 580 },
        { _id: '106', title: 'השומר על קשר', points: 13 },
        { _id: '107', title: 'זה שכל היום בפלאפון', points: 7 },
        { _id: '108', title: 'הרומנטיקן', points: 55 },
        { _id: '109', title: 'rogue hazelnut!', points: 60 },
        { _id: '110', title: 'יש ברית מילה לסבתא שלי', points: 3 },
        { _id: '111', title: 'אכלתי שווארמה', points: 2 },
        { _id: '112', title: 'הנוסע המתמיד', points: 8 },
        { _id: '113', title: 'המביא פירות', points: 512 },
        { _id: '114', title: 'האוהב להתארגן', points: 4999 },
        { _id: '115', title: 'מפעיל שירים באוטו', points: 211 },
        { _id: '116', title: 'איש המצלמה', points: 127 },
        { _id: '117', title: 'המעיר על הנהיגה', points: 40 },
        { _id: '118', title: 'זה שאף פעם אין לו וויז', points: 52 },
      ]
    }
  ]
}

function getFriends() {
  return Promise.resolve(initialState)
}

function updateOne(updatedAchieve) {
  const idx = initialState.friends.findIndex((friend => friend._id === updatedAchieve.friendId))
  // console.log(initialState.friends[idx])
  initialState.friends[idx].achieves.map(achieve => (updatedAchieve.achieveId === achieve._id) ? achieve.points += updatedAchieve.value : achieve)
  // const copy = JSON.parse(JSON.stringify(initialState))
  // return Promise.resolve(copy)
  return Promise.resolve(initialState)
}

export default {
  getFriends,
  updateOne
}