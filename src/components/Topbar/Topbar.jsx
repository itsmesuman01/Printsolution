import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import './Topbar.css';

const Topbar = () => {
  const [hovered, setHovered] = useState(null);
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="parentdiv">
      <div>
        {i18n.language === 'en' ?
          (<button className="button" onClick={() => handleLanguageChange('np')}>नेपाली</button>) :
          (<button className="button" onClick={() => handleLanguageChange('en')}>ENG</button>)}
      </div>
      <div className="navContainer">
        <div
          className={hovered === "home" ? "hovered" : "notHovered"}
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}
        >
          <NavLink className="link" to="/">{t('home')}</NavLink>
        </div>
        <div
          className={hovered === "about" ? "hovered" : "notHovered"}
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
        >
          <NavLink className="link" to="/about" state={{ data: 1 }}>{t('about')}</NavLink>
        </div>
        <div
          className={hovered === "contact" ? "hovered" : "notHovered"}
          onMouseEnter={() => setHovered("contact")}
          onMouseLeave={() => setHovered(null)}
        >
          <NavLink className="link" to="/contact" state={{ data: 1 }}>{t('contact')}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
