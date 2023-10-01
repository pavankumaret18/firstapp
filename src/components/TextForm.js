import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) =>{
        setText(event.target.value);
    };
    
    const handleUpClick = () =>{
        if(text.length>0){
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Text Converted to UpperCase","success");
        }
        else{
            props.showAlert("Text Box is empty","warning");
        }
    };

    const handleLowClick = () =>{
        if(text.length>0){
            let newText=text.toLowerCase();
            setText(newText);
            props.showAlert("Text Converted to LowerCase","success");
        }
        else{
            props.showAlert("Text Box is empty","warning");
        }
    };

    const handleClearClick = () =>{
        if(text.length>0){
            setText("");
            props.showAlert("Text Cleared","success");
        }
        else{
            props.showAlert("Text Box is empty","warning");
        }
    };

    const handleCopyClick = () => {
        if(text.length>0){
            navigator.clipboard.writeText(text);
            props.showAlert("Text Copied","success");
        }
        else{
            props.showAlert("Text Box is empty","warning");
        }
    }

    const handleExtraClick = () => {
        if(text.length>0){
            let newtext=text.split(/[ ]+/);
            setText(newtext.join(" "));
            props.showAlert("Extra Spaces Removed","success");
        }
        else{
            props.showAlert("Text Box is empty","warning");
        }
    }

  return (
    < >
    <div className='container my-3'>
        <h1 style={{color:props.mode==="light"?"black":"white"}}>{props.heading}</h1>
        <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{background:props.mode==="light"?"white":"grey", color:props.mode==="light"?"black":"white"}}></textarea>
        </div>
        <div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert To Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraClick}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
        <h1>Your text summary</h1>
        <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: "Type Your heading here"
}


