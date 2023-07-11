import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';
import TextBox from './components/TextBox.js';

function App() {
    const [Mode,setMode]=useState('light');
    const [alert,setAlert]=useState(null);
    const showAlert=(massage,type)=>{
      setTimeout(() => {
        setAlert(null);
      }, 2000);
      setAlert({
        msg:massage,
        typ:type
      });
    }
    const toggleMode=()=>{
      if(Mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='gray';
        document.body.style.color='white';
        showAlert("Dark Mode has Enabled.","success")
        
      }else{
        setMode('light');
        document.body.style.backgroundColor='lavender';
        document.body.style.color='black';
        showAlert("Light Mode has Enabled.","Success")
      }
    }
    return (
        <div className={Mode==="light"?'bg-lavender':"bg-gray"}>
  
          <Navbar  mode={Mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <TextBox mode={Mode} showAlert={showAlert}/>
        
        </div>
    );
  }
  
  export default App;
  
