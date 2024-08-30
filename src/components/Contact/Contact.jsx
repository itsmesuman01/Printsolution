import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Topbar from '../Topbar';
import './Contact.css'

const Contact = ({ passRef }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div>
      {data === 1 && <Topbar />}
      <div className="maincontact">
        <h1>{t('CONTACT')}</h1>
        <hr className="hr" />
        <div className="form">
          <label htmlFor="name" className="label">Name</label>
          <input ref={passRef} id="name" type="text" placeholder="Enter your full name" className="input" />

          <label htmlFor="email" className="label">Email</label>
          <input id="email" type="text" placeholder="Enter your email" className="input" />

          <label htmlFor="phone" className="label">Phone</label>
          <input id="phone" type="text" placeholder="Enter your phone" className="input" />

          <label htmlFor="message" className="label">Message</label>
          <textarea id="message" placeholder="Enter your message" className="textarea" />

          <div className="center">
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
