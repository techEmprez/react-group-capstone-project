/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MissionInfo from './MissionInfo';

const Missions = (props) => (
  <div>
    <table className="mission-table">
      <tbody>
        <tr className="table-head">
          <th className="missionName">{props.missionTitle}</th>
          <th className="missionDesc">{props.missionDesc}</th>
          <th className="missionStatus">{props.missionStatus}</th>
        </tr>
      </tbody>
    </table>
    <MissionInfo />
  </div>
);

Missions.defaultProps = {
  missionTitle: 'Missions',
  missionDesc: 'Description',
  missionStatus: 'Status',
};

export default Missions;
