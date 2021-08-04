import Main from './components/Main';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const scoreHandler = (score) => {
    setScore(score);
  };
  const bestScoreHandler = (newScore) => {
    if (score > bestScore) {
      setBestScore(newScore);
    }
  };
  return (
    <React.Fragment>
      <Header scoreDisplay={score} bestScoreDisplay={bestScore}></Header>
      <Main
        score={score}
        setScore={scoreHandler}
        setBestScore={bestScoreHandler}
      ></Main>
    </React.Fragment>
  );
}

export default App;
