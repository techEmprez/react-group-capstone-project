/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { joinMission, leaveMission } from '../redux/missions/mission';

const MissionInfo = (props) => {
  const dispatch = useDispatch();
  const handleJoinMission = () => {
    dispatch(joinMission());
    console.log('Mission Joined');
  };
  const handleLeaveMission = () => {
    dispatch(leaveMission());
    console.log('Mission Left');
  };

  return (
    <div className="mission-container">
      <table>
        <tbody>
          <tr className="mission-data">
            <td className="mission1Name">{props.name}</td>
            <td className="mission1Desc">{props.description}</td>
            <td className="mission1Status">{props.status}</td>
            <td className="mission1Btn">
              <button type="button" className="btn" onClick={handleJoinMission}>Join Mission</button>
              <button type="button" className="btn" onClick={handleLeaveMission}>Leave Mission</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

MissionInfo.defaultProps = {
  status: 'NOT A MEMBER',
};

export default MissionInfo;
