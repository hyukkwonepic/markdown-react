import React from "react";
import "./index.css";

const Header = ({ title }) => {
    return (
        <div className="header">
            <div className="title">{ title }</div>
        </div>
    );
};

export default Header;