import React from 'react';
import '../App.css'

const MissionInfo = (props) => {
  return (
    <div className="mission-container">
      <table className="mission-table">
        <tbody>
        <tr className="table-head">
        <th className="mission-head">{props.missionTitle}</th>
          <th className="mission-head">{props.missionDesc}</th>
          <th className="mission-head">{props.missionStatus}</th>
        </tr>
        <tr className="mission-data">
            <td className="mission1">{props.name}</td>
            <td className="mission1">{props.description}</td>
            <td className="mission1">{props.status}</td>
            <td><button className="btn">Join Mission</button></td>

        </tr>
        </tbody>
        </table>  

    </div>
  )
}

MissionInfo.defaultProps ={
    missionTitle : "Missions",
    missionDesc : "Description",
    missionStatus : "Status"
}

export default MissionInfo