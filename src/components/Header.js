import logo from '../assets/img/logo.png';

const Header = (props) => {
  return (
    <header>
      <img className="aot-logo" src={logo} alt="aot-logo" />
      <p>MEMORY GAME</p>
      <span>SCORE:{props.scoreDisplay}</span>
    </header>
  );
};

export default Header;
