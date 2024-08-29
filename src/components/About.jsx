import React from "react";
import { images } from "../assets/assets";
import { useTranslation } from 'react-i18next';
import Topbar from "../components/Topbar";
import { useLocation } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const data = location.state?.data;
  const css = {
    global: {
      textAlign: "center",
    },
    main: {
      height: "50vh",
      marginTop: "30px",
      borderTop: "1px solid white",
      display: "flex",
      padding: "5px 0px 5px 0px",
    },
    left: {
      flex: 1,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${images.cover})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    right: {
      flex: 1,
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "15px",
      flexDirection: "column",
      textAlign: "start"
    },
    hr: {
      border: "0",
      height: "1px",
      background: "#ccc",
      margin: "20px auto",
      width: "20%",
      borderRadius: "10rem",
    },
  };

  return (
    <div style={css.global}>
      {data === 1 && <Topbar />}
      <h1>{t('ABOUT')}</h1>
      <hr style={css.hr} />
      <div style={css.main}>
        <div style={css.left}></div>
        <div style={css.right}>
          <h1>{t('Waw')}</h1>
          <hr style={css.hr} />
          <p>
            {t('desc')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
