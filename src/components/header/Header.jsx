import { useNavigate } from "react-router-dom";

import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import logo from "../../images/logo.png";

import "../../css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <img src={logo} id="logo" alt="logo" onClick={() => navigate("/")} />
      <Navigation />
      <SearchBox />
    </header>
  );
};

export default Header;
