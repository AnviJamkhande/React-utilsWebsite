import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("Lower case was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleonChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    // text = "new text"; -> wrong way of changing text
    // setText("new text"); -> right way of changing text
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* onChange used to change the text in the textbox */}
                <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upper case</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lower case</button>
        </div>
        <div className='container my-3'>
            <h3>Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
