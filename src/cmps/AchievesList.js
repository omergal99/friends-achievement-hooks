import React from 'react';
import AchievesPreview from '../cmps/AchievesPreview';

function AchievesList({achievesList,achievesStatus}) {

  // const list = achievesList.map((achieve, idx) => {
  //   return <li key={idx}>
  //     <div>
  //       <div className="wrap-img">
  //         <img src={achieve.img} alt="" />
  //       </div>
  //       <div className="name">
  //         <label>{achieve.name} </label>
  //       </div>
  //     </div>
  //   </li>
  // })

  return (
    <div className="achieves-prev">
      <div>Im List</div>
    </div>
  );
}

export default React.memo(AchievesList)