/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';

const MyProfile = () => {
  const joinedMission = useSelector((state) => state.allMissions.missionsList);
  // eslint-disable-next-line max-len
  const filterJoinedMissions = joinedMission.filter((joinedMissionList) => joinedMissionList.isMissionJoined);
  console.log(joinedMission);

  const rockets = useSelector((state) => state.rocket);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <Container className="d-flex justify-content-center mt-5">
      <ListGroup className="w-25 me-5">
        <h2>My Missions</h2>
        {filterJoinedMissions.length === 0 ? (
          <p className="text-danger">Please would you like to join the mission with David?</p>
        ) : (
          filterJoinedMissions.map((mission) => (
            <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
          ))
        )}
      </ListGroup>
      <ListGroup className="w-25">
        <h2>My Rockets</h2>
        {filteredRockets.length === 0 ? (<p className="text-danger">Hey! Kindly pick a rocket.</p>
        ) : (
          filteredRockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
};

export default MyProfile;
