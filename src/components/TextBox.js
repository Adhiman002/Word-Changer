import React, {useState} from 'react';



const TextBox = (props) => {
  const [value,newValue]=useState('');
  const onChangeHandler=(event)=>{
        newValue(event.target.value);
  }
  const onClickUpHandler =()=>{
    let newVal=value.toUpperCase();
    newValue(newVal);
    props.showAlert("Converted to UpperCase.",'success');
  }
  const onClickLoHandler =()=>{
    let newVal=value.toLowerCase();
    newValue(newVal);
    props.showAlert("Converted to LowerCase.",'success');
  }
  const onClickClearHandler=()=>{
    newValue('');
    props.showAlert("Textarea is Clear.",'success');
  }
  const onClickRemoveHandler=()=>{
    let newVal=value.replace(/\s{2,}/g,' ')
    newValue(newVal);
    props.showAlert("Removed all white Spaces.",'success');
  }
  const onHandleCopy=()=>{
    navigator.clipboard.writeText(value);
    props.showAlert("Text is Copied.",'success');
  }

  return (
    <>
    <div className="mb-3 container my-4 ">
        <h4>Enter your text to analyze below</h4>
        <textarea className="form-control shadow" style={{backgroundColor: props.mode==='light'?'white':'#717070',color:props.mode==="light"?'black':'white'}}  placeholder='write something to convert' id="box" rows="8" value={value} onChange={onChangeHandler}></textarea>
    </div>
    <div className='container'>
      <div className='container row my-2 g-2'>
        <button className='btn btn-primary mx-2 col-md-2' onClick={onClickUpHandler}>Change to Uppercase</button>
        <button className='btn btn-primary mx-2 col-md-2' onClick={onClickLoHandler}>Change to Lowercase</button>
        <button className='btn btn-primary mx-2 col-md-2' onClick={onClickRemoveHandler}>Remove Extra Space</button>
        <button className='btn btn-primary mx-2 col-md-2' onClick={onHandleCopy}>Copy</button>
        <button className='btn btn-primary mx-2 col-md-2' onClick={onClickClearHandler}>Clear</button>
      </div>
    </div>
    <div className='container my-3' style={{backgroundColor: props.mode==='light'?'white':'#717070'}}>
      <div className='container my-3 mx-1 row py-1'>
        <div className='col-md-5 py-2'>
          <h4 >Your Text Summary</h4>
        </div>
        <div className='col-md-2 py-2'>
          <h5><b>Word Count :</b> {value.split(/\s+/).filter((element)=>{return element.length!==0}).length }</h5>
        </div>
        <div className='col-md-2 py-2'>
           <h5><b>Characters :</b> {value.length }</h5>
        </div>
        <div className='col-md-3 py-2'>
          <h5><b>Reading Time :</b> {(0.008 * value.split(' ').filter((element)=>{return element.length!==0}).length) } Min</h5>
        </div>
      </div>
    </div> 
      <div className='container py-1 my-3' style={{backgroundColor: props.mode==='light'?'white':'#717070'}}>
        <h4 className='text-center'>Text Preview</h4><hr></hr>
        <p>{value.length > 0 ? value : 'Please something in the text box above to preview it here.'}</p>
      </div>
    
    </>
  );
}
export default TextBox;