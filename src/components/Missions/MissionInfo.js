/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import '../../App.css';
import { fetchMissionsList, joinMission } from '../../redux/missions/mission';

const MissionInfo = (props) => {
  const { missionsList } = useSelector((state) => state.allMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsList.length) {
      dispatch(fetchMissionsList());
    }
  }, []);

  const handleJoinMission = (event) => {
    event.preventDefault();
    dispatch(joinMission(event.target.parentElement.parentElement.id));
  };

  return (
    <div className="mission-container">
      { missionsList.map((mission) => (
        <table key={uuid()} className="missionDataTable">
          <tbody className="dataBody">
            <tr className="missionDataRow" id={mission.mission_id}>
              <td className="mission1Name">{mission.mission_name}</td>
              <td className="mission1Desc">{mission.description}</td>
              <td className="mission1Status">
                { mission.isMissionJoined
                  ? <div className="status1">{props.joinedStatus}</div>
                  : <div className="status2">{props.notJoinedStatus}</div>}
              </td>
              <td className="mission1Btn">
                { mission.isMissionJoined
                  ? <button type="button" className="leaveBtn" onClick={handleJoinMission}>Leave Mission</button>
                  : <button type="button" className="joinBtn" onClick={handleJoinMission}>Join Mission</button>}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>

  );
};

MissionInfo.defaultProps = {
  notJoinedStatus: 'NOT A MEMBER',
  joinedStatus: 'ACTIVE MEMBER',
};

export default MissionInfo;
