import React from 'react';

function Dashboard(props) {
  return(
    <div>
      <button onClick={props.scores.strike}>Strike</button>
      <button onClick={props.scores.ball}>Ball</button>
      <button onClick={props.scores.foul}>Foul</button>
      <button onClick={props.scores.hit}>Hit</button>
    </div>
  )
}

export default Dashboard;