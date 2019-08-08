import React from 'react';

function Display(props) {
  return(
    <div>
      <h1>Strikes: {props.strike}</h1>
      <h1>Balls: {props.ball}</h1>
    </div>
  )
}

export default Display;