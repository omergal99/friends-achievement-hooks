import React from 'react';
import AchievesPreview from '../cmps/AchievesPreview';

function AchievesList({ achievesList, friend }) {

  const friendAchieves = friend.achieves ? friend.achieves : [];

  const list = achievesList.map((achieve, idx) => {
    const details = friendAchieves.find((friendAchieve) => friendAchieve._id === achieve._id)
    return <AchievesPreview key={idx} details={details} achieve={achieve} />
  })

  return (
    <div className="achieves-prev">
      <div className="friend-name">{friend.name ? friend.name : 'Choose someone..'}</div>
      <ul>
        {list && list}
      </ul>
    </div>
  );
}

export default React.memo(AchievesList)