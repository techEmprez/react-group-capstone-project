/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import MissionInfo from './MissionInfo';
// import MissionsData from './MissionsData';
import { fetchMissionsList } from '../redux/missions/mission';

const Missions = (props) => {
  const { missionsList } = useSelector((state) => state.allMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsList());
  }, []);

  console.log(missionsList);

  const renderMissionsList = missionsList.map((mission) => (
    <MissionInfo
      key={uuid()}
      name={mission.mission_name}
      description={mission.description}
      status={mission.status}
    />
  ));

  return (
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
      {renderMissionsList}
    </div>
  );
};

Missions.defaultProps = {
  missionTitle: 'Missions',
  missionDesc: 'Description',
  missionStatus: 'Status',
};

export default Missions;
