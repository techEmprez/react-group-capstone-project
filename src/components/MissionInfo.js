/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../App.css';

const MissionInfo = (props) => (
  <div className="mission-container">
    <table>
      <tbody>
        <tr className="mission-data">
          <td className="mission1Name">{props.name}</td>
          <td className="mission1Desc">{props.description}</td>
          <td className="mission1Status">{props.status}</td>
          <td className="mission1Btn"><button type="button" className="btn">Join Mission</button></td>
        </tr>
      </tbody>
    </table>

  </div>
);

MissionInfo.defaultProps = {
  status: 'NOT A MEMBER',
};

export default MissionInfo;
