import React from 'react';

function AchievesPreview({ achieve, details }) {

  const arrColor = ['#80ced6', '#feb236', '#ffcc5c', '#d6d4e0', '#b8a9c9', '#622569', '#c83349'];
  const process = details ? details.process : 0;
  const arrLevels = [2, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 5000];
  const level = arrLevels.reduce((acc, num) => process >= num ? ++acc : acc, 0);
  const isUpgradeLevel = (arrLevels[level - 1] === process)
  const percentCompleted = (process / arrLevels[isUpgradeLevel ? level - 1 : level]) * 100;

  return (
    <li >
      <div className="achieve-container"
        style={{ background: level >= 10 ? 'linear-gradient(225deg, #ff708f, #afdfff 34%, #a2ffcf)' : '' }}>
        <div className="title flex">
          <img src={achieve.icon} alt="Icon" />
          <span>{achieve.title}</span>
        </div>
        <div className="description">
          <span>{achieve.description}</span>
        </div>
        <div className="level">
          {/* <span style={{ backgroundColor: `${arrColor[level]}` }}>LvL &nbsp; &nbsp;{level === 0 ? 1 : level}</span> */}
          <span style={{
            background: `linear-gradient(to right, #f8ef7c 0%, #f8ef7c 60%, #30322ddb 0%, #30322ddb 100%)`
          }}>
            LvL &nbsp;&nbsp;{level > 9 ? '' : ' '}
            <label style={{ color: 'rgb(250,250,250)' }}>{level === 0 ? 1 : level}</label>
          </span>
          {isUpgradeLevel &&
            <img src="assets/img/icons/levels/level-up.png" alt="LvL up" />
          }
        </div>
        <div className="process-bar">
          <div style={
            {
              background: `linear-gradient(to right, #ffc43d -20%, #f8ef7c ${percentCompleted}%,
             #30322ddb 0%, #30322ddb 100%)`}
          }>
            <span>{process}/{arrLevels[isUpgradeLevel ? level - 1 : level]}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default React.memo(AchievesPreview)