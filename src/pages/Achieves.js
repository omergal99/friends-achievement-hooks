import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useSelector, useDispatch, useStore } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../store/actions';

function Achieves() {

  // STORE
  // Q - What the diff between useStore to useSelector
  // const store = useStore()
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friendsStore.friends);
  const aaa = useSelector((state) => state);
  console.log(aaa)

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('componentDidMount BY USING useEffect')
    // console.log(this.props)
  }, []);

  // USING DISPATCH
  // const incrementCounter = useCallback(
  //   () => dispatch({ type: 'increment-counter' }),
  //   [dispatch]
  // )

  const list = friends.map((friend, idx) => {
    return <div key={idx}>{friend.name}</div>
  })

  const addFriend = () => {
    dispatch(actions.somefunc())
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {list && list}
      <button onClick={addFriend.bind(this)}>
        Click me
      </button>
    </div>
  );
}

// function mapStateToProps(state) {
//   console.log(state)
//   return {
//     friends: state.friendsStore.friends
//   }
// }

// export default connect(mapStateToProps, actions)(Achieves);

export default Achieves;

// FOR BETTER PERFORMANCE
// export default React.memo(Achieves)