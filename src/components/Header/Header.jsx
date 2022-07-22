import React from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Navigation from './Navigation/Navigation'
import './Header.css'
const Header = () => {
  return (
    <div className="custom__header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <Logo />
          </div>
          <div className="col-lg-3">
            <Search />
          </div>
          <div className="col-lg-7 nav-links">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
