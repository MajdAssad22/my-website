// React
import React from "react";
import { Link } from "react-router-dom";

// Style & CSS
import Logo from "./Logo";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between align-middle w-full p-5 text-text-0 absolute top-0 left-0">
      <Link to={"/"}>
        <Logo width={65} color={"#E6E6E6"} />
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
