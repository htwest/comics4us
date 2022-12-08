import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import logo from "../../images/logo.png";

import "../../css/Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} id="logo" alt="logo" />
      <Navigation />
      <SearchBox />
    </header>
  );
};

export default Header;
