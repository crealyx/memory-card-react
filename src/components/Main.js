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
const Main = () => {
  const shuffledCharactersArray = shuffleArray(charactersArray);
  const characterDisplayArray = shuffledCharactersArray.map((character) => (
    <Card
      key={character.id}
      imgSrc={character.image}
      name={character.name}
    ></Card>
  ));
  return <main>{characterDisplayArray}</main>;
};

export default Main;
