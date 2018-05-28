import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Navbar";
import LinkItem from "../LinkItem";
import "../../../public/css/Header.css";
import logo2x from "../../../public/images/logo@2x.png";
import logo from "../../../public/images/logo.png";

const Header = () => {
  return (
    <header className="app-header">
      <div>
        <label className="menu" htmlFor="toggle">
          &#9776;
        </label>
        <figure className="logo">
          <LinkItem to="/">
            <img src={logo} srcSet={`${logo2x} 2x`} alt="logo" />
          </LinkItem>
        </figure>
      </div>
      <input type="checkbox" id="toggle" />
      <Nav />
    </header>
  );
};

export default Header;
