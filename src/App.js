// import logo from './logo.svg';
import './App.css';
// import AboutT from './Components/AboutT';
// import Example from './Components/Example';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
function App() {
  // let content;
  // if(!true){
  //   content=<Navbar />
  // }
  // else{
  //   content=<Example />
  // }
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  // App.js me dark mode enable kr rhe h
  const[mode,setMode]=useState('light');
  const[boxstyle,setBoxstyle]=useState('aliceblue');
  const toggleMode1=function(){
  if(mode==='light'){
     setMode('dark')
     setBoxstyle("rgb(43,48,49")
     document.body.style.backgroundColor="black";
     showAlert("Dark mode is enabled","success");
    //  document.title="Text in Dark mode";
    //  setInterval(()=>{
    //   document.title="Textutils is amazing";
    //  },1000);
    //  setInterval(()=>{
    //   document.title="Are you enjoying?";
    //  },1500);
  }
  else{
    setMode('light');
    setBoxstyle("aliceblue")
    document.body.style.backgroundColor="white";
    showAlert("Light mode is enabled","success");
  }
}
const toggleMode2=function(){
 
     setBoxstyle("#7fc3ff")
     document.body.style.backgroundColor="white";
     showAlert("SkyBlue mode is enabled","success");
}
const toggleMode3=function(){
  
    setBoxstyle("#92e3bd")
    document.body.style.backgroundColor="white";
    showAlert("Green mode is enabled","success");
  
}
  return (
    // <div>
    //   { content}
    // </div>
    // using propstype ...............
    // <div> <Navbar title="TextUtils" about=" About textutils"  />  </div>
//  <Router>
    <div>
    <Navbar title="Text Manipulator" about="About" toggleMode1={toggleMode1} toggleMode2={toggleMode2}  toggleMode3={toggleMode3} mode={mode}  />
    <Alert alert={alert}/>
    {/* <Routes> */}
          {/* <Route path="/about" element={<AboutT/>} />
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter text to see the magic....." mode={mode} boxstyle={boxstyle} />} />  
      </Routes> */}
       
       <TextForm showAlert={showAlert} heading="Enter text to see the magic....." mode={mode} boxstyle={boxstyle} />
       {/* <AboutT /> */}

    
     {/* </Router> */}
     </div> 

  );
}

export default App;
