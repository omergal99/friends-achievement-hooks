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
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('componentDidMount BY USING useEffect')
    dispatch(actions.loadFriends())
    // console.log(this.props)
  }, []);

  // USING DISPATCH
  // const incrementCounter = useCallback(
  //   () => dispatch({ type: 'increment-counter' }),
  //   [dispatch]
  // )


  const addFriend = () => {
    dispatch(actions.somefunc())
  }

  return (
    <div className="achieves">
      <AchievesList achievesList={achieves}/>
      <FriendsList friendsList={friends} />
    </div>
  );
}

// export default Achieves;

// FOR BETTER PERFORMANCE
export default React.memo(FriendsAchieves)