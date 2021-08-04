import Main from './components/Main';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const scoreHandler = (score) => {
    setScore(score);
  };
  return (
    <React.Fragment>
      <Header scoreDisplay={score}></Header>
      <Main score={scoreHandler}></Main>
    </React.Fragment>
  );
}

export default App;
