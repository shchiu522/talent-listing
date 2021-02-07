import background from "./../asset/starist_logo.png";

const Header = () => {
  return (
    <header className="header-wrp">
      <img src={background} className="logo" alt="logo" />
    </header>
  );
};

export default Header;
