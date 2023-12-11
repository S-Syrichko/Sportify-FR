import { useState } from "react";
import styles from "./App.module.scss";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import "moment/dist/locale/fr";

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
