import React, { useRef } from "react";
import Topbar from "../components/Topbar";
import Carasoul from "../components/Carasoul";
import About from "../components/About/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const passRef = useRef(0)
  const homecss = {
    callus: {
      height: "20vh",
      backgroundColor: "#2e9ae5",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      paddingBottom: "20px"
    },
    button: {
      backgroundColor: "#fbdf3f",
      border: "none",
      height: "30px",
      width: "9rem",
      borderRadius: "5px",
      cursor: "pointer"
    }
  }
  return (
    <div>
      <Topbar />
      <Carasoul />
      <About />
      <div style={homecss.callus}>
        <h1>984-0564096</h1>
        <p>{t('SERVICE')}</p>
        <button style={homecss.button} onClick={() => {
          passRef.current.focus();
        }}>{t('contactnow')}</button>
      </div>
      <Contact passRef={passRef} />
      <Footer />
    </div>
  );
};

export default Home;
