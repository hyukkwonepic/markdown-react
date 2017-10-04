import React from "react";
import showdown from "showdown";
import "./index.css";

const Preview = ({ inputValue }) => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(inputValue);

    return (
        <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
    );
}

export default Preview;