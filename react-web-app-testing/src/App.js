import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Display from './Display';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  const scoreTracker = {
    strike: () => {
      setStrike(strike + 1)
      if (strike === 2) {
        setStrike(0)
        setBall(0)
      }
    },
    
    foul: () => {
      setStrike(strike + 1)
      if (strike === 2) {
        setStrike(2)
      }
    },

    ball: () => {
      setBall(ball + 1)
      if (ball === 3) {
        setBall(0)
        setStrike(0)
      }
    },

    hit: () => {
      setStrike(0)
      setBall(0)
      }
    }

  return (
    <div className="App">
      <Dashboard scores={scoreTracker}/>
      <Display strike={strike} ball={ball}/>
    </div>
  );
}

export default App;