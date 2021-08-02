import logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header>
      <img className="aot-logo" src={logo} alt="aot-logo" />
      <p>MEMORY GAME</p>
      <span>SCORE:0</span>
    </header>
  );
};

export default Header;
