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
  // const store = useStore()
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friendsStore.friends);
  const achieves = useSelector(state => state.achievesStore.achieves);

  // Declare a new state variable, which we'll call "count"
  const [selectedFriend, setfriend] = useState('');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('componentDidMount BY USING useEffect')
    dispatch(actions.loadFriends())
    dispatch(actions.loadAchieves())
    // console.log(this.props)
  }, []);

  // USING DISPATCH
  // const incrementCounter = useCallback(
  //   () => dispatch({ type: 'increment-counter' }),
  //   [dispatch]
  // )


  const selectFriend = (friend) => {
    setfriend(friend)
  }

  return (
    <div className="achieves">
      <AchievesList achievesList={achieves} friend={selectedFriend}/>
      <FriendsList friendsList={friends} onSelectFriend={selectFriend.bind(this)} />
    </div>
  );
}

// export default Achieves;

// FOR BETTER PERFORMANCE
export default React.memo(FriendsAchieves)