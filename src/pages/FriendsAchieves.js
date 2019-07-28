import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useSelector, useDispatch, useStore } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../store/actions';

import FriendsList from '../cmps/FriendsList';
import AchievesList from '../cmps/AchievesList';

function FriendsAchieves() {

  // STORE
  // Q - What the diff between useStore to useSelector
  // const store = useStore();
  const dispatch = useDispatch();
  const friends = useSelector(state => state.friendsStore.friends);
  const achieves = useSelector(state => state.achievesStore.achieves);

  // Declare a new state variable, which we'll call "count"
  const [selectedFriend, setfriend] = useState('');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('componentDidMount BY USING useEffect');
    dispatch(actions.loadFriends());
    dispatch(actions.loadAchieves());
  }, []);

  const selectFriend = (friend) => {
    setfriend(friend)
  }

  const friendRateChange = (achieveId, value) => {
    const updatedAchieve = { friendId: selectedFriend._id, achieveId, value };
    // console.log(updatedAchieve)
    dispatch(actions.updateFriendAchieve(updatedAchieve));
  }

  return (
    <div className="achieves">
      <div>
        <AchievesList achievesList={achieves} friend={selectedFriend} onChangeRate={friendRateChange.bind(this)} />
      </div>
      <FriendsList friendsList={friends} onSelectFriend={selectFriend.bind(this)} />
    </div>
  );
}

// export default Achieves;

// FOR BETTER PERFORMANCE
export default React.memo(FriendsAchieves)