const initialState = {
  achieves: [
    {
      _id: '101',
      title: 'The multi champion',
      description: 'The one who controls all seven kingdoms, with him the last dragon. His end is known!',
      icon: 'assets/img/icons/achieves/cup.png'
    },
    {
      _id: '102',
      title: 'המסיע המתמיד',
      description: 'האחד שבדרך כלל אין לו בעיה להוציא אותו, והוא פשוט מוציא',
      icon: 'assets/img/icons/achieves/car.png'
    },
    {
      _id: '103',
      title: 'החונה במהירות',
      description: 'אחרי שהגענו ליעד לקח לו פחות מ3 דקות למצוא חנייה, ושהחנייה ללא תשלום.',
      icon: 'assets/img/icons/achieves/parking.png'
    },
    {
      _id: '104',
      title: 'המטייל בחו"ל',
      description: 'כל יום שהיית בחול מוסיף לך עוד נקודה',
      icon: 'assets/img/icons/achieves/mountain.png'
    },
    {
      _id: '105',
      title: 'העוזר לחבר',
      description: 'עזרת לחבר בעת צרה, גם כשלא היה לך נוח בכלל, תרמת מהידע שלך לאותו חבר והוא עכשיו יכול לפרוח בשלווה.',
      icon: 'assets/img/icons/achieves/helper.png'
    },
    {
      _id: '106',
      title: 'השומר על קשר',
      description: 'התקשרת כדי לשמור על קשר? דע לך שזה מאוד חביב מצדך. ממולץ לא לשמור על קשר בימי חול',
      icon: 'assets/img/icons/achieves/phone.png'
    },
    {
      _id: '107',
      title: 'זה שכל היום בפלאפון',
      description: 'כולם יושבים ונהנים ואתה בפלאפון בצאט או סתם משוטט לך? פה אנחנו נראה מי עושה את זה הכי טוב',
      icon: 'assets/img/icons/achieves/whatsapp.png'
    },
    {
      _id: '108',
      title: 'הרומנטיקן',
      description: 'עד כמה אתה רומנטיקן?',
      icon: 'assets/img/icons/achieves/woman.png'
    },
    {
      _id: '109',
      title: 'rogue hazelnut!',
      description: 'אעעעע הבירה האהובה עלינו בכל הזמנים! נראה כמה פעמים תוכלו לומר את השם שלה ברצף',
      icon: 'assets/img/icons/achieves/rogue hazelnut.png'
    },
    {
      _id: '110',
      title: 'יש ברית מילה לסבתא שלי',
      description: 'תירוצים כגון הסבתא כדי להתחמק מיצאת שישי של החברים',
      icon: 'assets/img/icons/achieves/grandmother.png'
    },
    {
      _id: '111',
      title: 'אכלתי שווארמה',
      description: 'הזולל ביצאות, ושווארמה שווה פי 2 ניקוד',
      icon: 'assets/img/icons/achieves/shawarma.png'
    },
    {
      _id: '112',
      title: 'הנוסע המתמיד',
      description: 'חישוב הקילומטרים המצטברים שלך בדרכך ליציאה',
      icon: 'assets/img/icons/achieves/the traveler.png'
    },
    {
      _id: '113',
      title: 'המביא פירות',
      description: 'זה שמביא פירות ליציאה, כל פרי שונה מעלה בחזקת 2 את הניקוד',
      icon: 'assets/img/icons/achieves/fruits.png'
    },
    {
      _id: '114',
      title: 'האוהב להתארגן',
      description: 'זה שלוקח את הזמן כמו ניצן למשל',
      icon: 'assets/img/icons/achieves/get arrange.png'
    },
    {
      _id: '115',
      title: 'מפעיל שירים באוטו',
      description: 'מפעיל שירים של וואן פיס באוטו',
      icon: 'assets/img/icons/achieves/songs in car.png'
    },
    {
      _id: '116',
      title: 'איש המצלמה',
      description: 'אחד שאוהב לצלם ולהצטלם יתוגמל היטב בהישג זה',
      icon: 'assets/img/icons/achieves/camera man.png'
    },
    {
      _id: '117',
      title: 'המעיר על הנהיגה',
      description: 'זה שנותן הערות על הנהג! כולל הנהג',
      icon: 'assets/img/icons/achieves/Comments on driving.png'
    },
    {
      _id: '118',
      title: 'זה שאף פעם אין לו וויז',
      description: 'הכותרת ברורה.. אין מה לפרט',
      icon: 'assets/img/icons/achieves/the navigator.png'
    },

  ]
}

function getAchieves() {
  // setTimeout(() => {
  //   return Promise.resolve(initialState)
  // }, 2000)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialState);
    }, 3000)
  })
  // return Promise.resolve(initialState)
}



export default {
  getAchieves
}