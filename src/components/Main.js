import { useState } from 'react';
import charactersArray from '../assets/characters';
import Card from './Card';

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

let isWon = false;
const Main = (mainProps) => {
  const [selectedChars, setSelectedChars] = useState([]);
  const clickHandler = (cardProps) => {
    if (selectedChars.includes(cardProps.name)) {
      mainProps.setBestScore(mainProps.score);
      mainProps.setScore(0);
      setSelectedChars([]);
    } else {
      mainProps.setScore((prevScore) => prevScore + 1);
      setSelectedChars((prev) => [...prev, cardProps.name]);
      if (mainProps.score === 7) {
        isWon = true;
      }
    }
    console.log(mainProps.score);
    console.log(isWon);
  };

  const shuffledCharactersArray = shuffleArray(charactersArray);

  const characterDisplayArray = shuffledCharactersArray.map((character) => (
    <Card
      key={character.id}
      id={character.id}
      imgSrc={character.image}
      name={character.name}
      onClick={clickHandler}
    ></Card>
  ));
  return (
    <main>
      {isWon ? (
        <div className="win-screen">YOU WIN</div>
      ) : (
        characterDisplayArray
      )}
    </main>
  );
};

export default Main;
