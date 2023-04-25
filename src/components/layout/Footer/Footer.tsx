import React from "react";
import styles from "./Footer.module.scss";
import SideNav from "../SideNav/SideNav";

const Footer = () => {
  return <footer className={styles.footer}>
    <SideNav />
    <p className={styles.footerCopyright}>Copyright, SportSee 2020</p>
  </footer>;
};

export default Footer;
