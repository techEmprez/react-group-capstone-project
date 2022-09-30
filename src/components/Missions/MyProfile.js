/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const joinedMission = useSelector((state) => state.allMissions.missionsList);
  console.log(joinedMission);

  const filterJoinedMissions = joinedMission.filter((joinedMissionList) => joinedMissionList.isMissionJoined);
  console.log(filterJoinedMissions);

  return (
    <div className="my-profile">
      <hr />
      { filterJoinedMissions.length === 0 ? <h4 className="myMissions">You Have No Missions Added</h4> : <h4 className="myMissions">My Missions</h4> }
      <table className="myMissionRow">
        <tbody>
          { filterJoinedMissions.map((mission) => (
            <tr key={mission.mission_id}><td className="myMissionsList">{mission.mission_name}</td></tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default MyProfile;
