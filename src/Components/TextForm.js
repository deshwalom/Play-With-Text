import React ,{useState} from 'react'

    export default function TextForm(props) {
       
       let divStyle={
        // width: '200px',
        // height: '200px',
        backgroundColor: 'red',
        boxShadow: '0px 0px 6px rgba(0,0,0,0.7)'
        // rgba(0, 0, 0, 0.8)
       };
      //  const[boxstyle,setBoxstyle]=useState({
      //   backgroundColor:'aliceblue'
      //  });
//        if(props.mode ==='light'){
// setBoxstyle({backgroundColor:'aliceblue'})
//        }else{
//         setBoxstyle({backgroundColor:'black'})
//        }

        const handleUpClick= function() {
          let newText=text.toUpperCase();
          setText(newText);
          props.showAlert("Converted to uppercase!!" ,"success");
        }
        const handleLowClick=function(){
            let newText2=text.toLowerCase();
            setText(newText2);
            props.showAlert("Converted to lowercase!!" ,"success");
        }
        const handleClearClick=function(){
            setText('');
            props.showAlert("Text is cleared!!" ,"success");
        }
        const handleCapitalizeClick=function(){
            let text1=text.toLowerCase();
            let words=text1.split(" ");
            let newWord=words.map((word)=>{
                return word.charAt(0).toUpperCase()+word.slice(1);
            });
            let newText3=newWord.join(" ");
            setText(newText3);
            props.showAlert("Text is capitalize!!" ,"success");
        }
        const handleCopy=function(){
            
            navigator.clipboard.writeText(text)

      .then(() => {
        alert('Text copied to clipboard successfully');
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
      props.showAlert("Copied to clipboard!!" ,"success");
        }


        const handleOnChange= function(event) {
          setText(event.target.value);
        }
        const[text,setText]= useState('');
    return (
        <div className='container my-5' style={{boxShadow: `${divStyle.boxShadow}`, color:`${(props.mode) === 'dark'?"white":"black"}`,backgroundColor: `${props.boxstyle}`
        // `${(props.mode) === 'dark'?"rgb(43,48,49":"aliceblue"}`
        , borderRadius:'10px', padding:'15px',}}>
         <div className='container'  >
         {/* <label for="exampleFormControlTextarea1" className="form-label">Enter Text To Analyze</label> */}
         <h3 className='my-2'>{props.heading}</h3>
         <div className='my-3 container'>
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Enter Text Here' value={text} onChange={handleOnChange} style={{backgroundColor: `${(props.mode) === 'dark'?"#aaabac":"white"}`}}></textarea>
         </div>
         <button className='btn btn-primary mx-1'onClick={handleUpClick} >Convert To UpperCase </button> 
         <button className='btn btn-success mx-1 'onClick={handleLowClick} >Convert To LowerCase</button> 
         <button className='btn btn-danger mx-1 my-1 'onClick={handleClearClick} >Clear All</button> 
         <button className='btn btn-primary mx-1 my-1 'onClick={handleCapitalizeClick} >Capitalize</button> 
         <button className='btn btn-success mx-1 my-1 'onClick={handleCopy} >Copy</button> 
         
         </div> 
         
         <div className='container my-3'>
            <h4><b>Your Text Summary</b></h4>
            <small> {text.split(" ").length-1} Words and {text.length} Characters </small>
            {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
            <h5>Your text preview....</h5>
            <p>{text}</p>
         </div>

        </div>
    )
    }
