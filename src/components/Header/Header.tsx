import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Nav from "../TopNav/TopNav";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className="logo" src={logo} alt="Sportify"></img>
      <Nav />
    </header>
  );
};

export default Header;
