import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert(`The text has been converted to Upper Case!`,"success");
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("The text has been converted to Lower Case!","success");

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("The text has been copied!","success");

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    let newText2 = (newText.join(' '))
    newText = newText2.split(/[\n]+/);
    setText(newText.join(`\n`));
    props.showAlert("The extra spaces in the text have been removed!","success");
    
  };
  const handleClear = () => {
    setText("");
    props.showAlert("The text has been cleared!","success");

  };
  function wordCount(str) {
    let temp = str.replace(/(\r\n|\n|\r)/gm, " ");
    let len = temp.split(" ").length;
    return len;
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <hr />
        <div className="mb-3 my-4">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            placeholder="Enter text here"
            rows="8"
            style={props.mode==='dark'?{backgroundColor: '#495057',color:'white'}:{backgroundColor: '#f8f9fa'}}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-warning mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-info mx-1 my-1" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-secondary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <hr />
        <p>Your text has:</p>
        <ul>
          <li>
            <p>
              <b>{wordCount(text)} words</b> and <b>{text.length} characters</b>
            </p>
          </li>
          <li>
            <p>
              Reading time of{" "}
              <b>{(0.008 * wordCount(text)).toFixed(2)} minutes</b>(slow rate)
              and <b>{(0.0033 * wordCount(text)).toFixed(2)} minutes</b>(average
              rate)
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
