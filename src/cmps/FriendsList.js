import React from 'react';

function FriendsList({ friendsList ,onSelectFriend }) {

  const list = friendsList.map((friend, idx) => {
    return <li onClick={()=> onSelectFriend(friend)} key={idx}>
      <div>
        <div className="wrap-img">
          <img src={friend.img} alt="" />
        </div>
        <div className="name">
          <label>{friend.name} </label>
        </div>
      </div>
    </li>
  })

  return (
    <div className="achieves-bar">
      <ul>
        {list && list}
      </ul>
    </div>
  );
}

export default React.memo(FriendsList)