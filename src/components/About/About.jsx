import React from "react";
import { useTranslation } from 'react-i18next';
import Topbar from "../Topbar";
import { useLocation } from 'react-router-dom';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div className="global">
      {data === 1 && <Topbar />}
      <h1>{t('ABOUT')}</h1>
      <hr className="hr" />
      <div className="main">
        <div className="left"></div>
        <div className="right">
          <h1>{t('Waw')}</h1>
          <hr className="hr" />
          <p>
            {t('desc')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
