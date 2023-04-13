
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [mode , setMode] = useState("light")
  const [modetxt , setModetxt] = useState('Enable Dark Mode')
  const [modetxtClr , setModetxtclr] = useState('dark')








  // Program for dark mode 
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode("dark")
      setModetxt('Disable Dark Mode')
      setModetxtclr('light')
      document.body.style.backgroundColor = 'gray'
      document.body.style.color = 'white'
ShowAlert("Dark Mode has Been Enabled " , "success")

document.title = "TextUtils DarkMode"


    }else{
      setMode('light')
      setModetxt('Enable Dark Mode')
      setModetxtclr('dark')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'Black'
      ShowAlert("Dark Mode has Been Disabled " , 'success')
      document.title = "TextUtils Home"
    }

  }



  // ------------------------------------------------------------Program of Alert-------------------------------------------------
  const [alert , setAlertText] = useState(null)

  // To set the message and type of the alert
  const ShowAlert = (message , type)=>{

setAlertText({
msg : message,
typ : type
})

setTimeout(()=>{
setAlertText(null)
},1500)

  }



  return (

<>



<BrowserRouter>
<Navbar title="TextUtils"    ShowAlert={ShowAlert} mode={mode}   modetxt={modetxt}   modetxtClr={modetxtClr}  toggleMode={toggleMode}  />


<Alert alert={alert}  />
<div className="container">
<Routes>


<Route path='/' element={<TextForm ShowAlert={ShowAlert}  mode={mode} heading='Enter the text to analyze Below' />} ></Route>


<Route path='/about' element={<About/>} ></Route>

</Routes>
</div>
</BrowserRouter>









<div className="container my-3">


  
{/* <TextForm ShowAlert={ShowAlert}  mode={mode} heading='Enter the text to analyze Below' /> */}
{/* <About/> */}
</div>


</>
  );  
}



export default App;
