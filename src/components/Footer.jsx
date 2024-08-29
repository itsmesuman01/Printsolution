import React from 'react'

const Footer = () => {
    const css = {
        footer: {
            backgroundColor: "#2e9ae5",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "2rem"
        }
    }
    return (
        <div style={css.footer}>
            <p>© 2024 Himal Print Solution. All rights reserved.</p>
        </div>
    )
}

export default Footer