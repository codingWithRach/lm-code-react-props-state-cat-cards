interface HeaderProps {
  catCount: number;
  dogCount: number;
}

const Header: React.FC<HeaderProps> = ({ catCount, dogCount }) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title header__summary">
      There are currently {catCount} Cats and {dogCount} dogs in this App
    </h2>
  </header>
);

export default Header;
