import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Topbar from './Topbar';

const Contact = ({ passRef }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const data = location.state?.data;
    const css = {
        main: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1rem"
        },
        form: {
            display: "flex",
            flexDirection: "column",
            height: "auto",
            width: "20%",
            padding: "50px",
            marginTop: "15px",
            borderRadius: "5px",
            border: "1px solid #dad9d1"
        },
        button: {
            backgroundColor: "#2e9ae5",
            border: "none",
            height: "30px",
            width: "9rem",
            borderRadius: "5px",
            cursor: "pointer",
            color: "white",
            marginTop: "10px"
        },
        hr: {
            border: "0",
            height: "1px",
            background: "#ccc",
            margin: "20px auto",
            width: "20%",
            borderRadius: "10rem",
        },
        label: {
            marginBottom: "5px"
        },
        input: {
            marginBottom: "10px",
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid #ccc"
        }
    };

    return (
        <div>
            {data === 1 && <Topbar />}
            <div style={css.main}>
                <h1>{t('CONTACT')}</h1>
                <hr style={css.hr} />
                <div style={css.form}>
                    <label htmlFor="name" style={css.label}>Name</label>
                    <input ref={passRef} id="name" type="text" placeholder="Enter your full name" style={css.input} />

                    <label htmlFor="email" style={css.label}>Email</label>
                    <input id="email" type="text" placeholder="Enter your email" style={css.input} />

                    <label htmlFor="phone" style={css.label}>Phone</label>
                    <input id="phone" type="text" placeholder="Enter your phone" style={css.input} />

                    <label htmlFor="message" style={css.label}>Message</label>
                    <textarea id="message" placeholder="Enter your message" style={{ ...css.input, height: "100px" }} />

                    <div style={{ display: "flex", justifyContent: "center" }}><button style={css.button}>Submit</button></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
