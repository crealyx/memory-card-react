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

const Main = (mainProps) => {
  const [selectedChars, setSelectedChars] = useState([]);
  const clickHandler = (cardProps) => {
    if (selectedChars.includes(cardProps.name)) {
      mainProps.score(0);
      setSelectedChars([]);
    } else {
      mainProps.score((prevScore) => prevScore + 1);
      setSelectedChars((prev) => [...prev, cardProps.name]);
    }
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
  return <main>{characterDisplayArray}</main>;
};

export default Main;
