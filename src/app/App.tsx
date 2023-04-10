import { useState } from "react";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
