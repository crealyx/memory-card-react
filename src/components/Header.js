import logo from '../assets/img/logo.png';

const Header = (props) => {
  return (
    <header>
      <img className="aot-logo" src={logo} alt="aot-logo" />
      <p>MEMORY GAME</p>
      <p id="best-score">
        BEST SCORE:<span>{props.bestScoreDisplay}</span>
      </p>
      <p id="score">SCORE:{props.scoreDisplay}</p>
    </header>
  );
};

export default Header;
