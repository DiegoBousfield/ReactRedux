import React, { Component } from "react";
import LinkItem from "../LinkItem";

const Nav = () => (
  <nav className="app-nav">
    <LinkItem>politics</LinkItem>
    <LinkItem>business</LinkItem>
    <LinkItem>science</LinkItem>
    <LinkItem>tech</LinkItem>
    <LinkItem>sports</LinkItem>
  </nav>
);

export default Nav;
