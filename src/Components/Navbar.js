// import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {


//   const [myStyle , setMyStyle] = useState({
//     color: 'red',
//     backgroundColor: 'blue'
// })

//i have to use setcolor method here.


const YGreen = ()=>{
  if(props.mode==='light'){

    props.ShowAlert("Please enable dark mode for this Feature " , 'info')
    document.body.style.backgroundColor = 'white'
  
  }else{
    document.body.style.backgroundColor = '#9fa784'
    document.body.style.color = '#E9EDC9'

  }
}


// -----------------------------------------------------------------second
const Swamp = ()=>{
  if(props.mode==='light'){

    props.ShowAlert("Please enable dark mode for this " , 'info')
    document.body.style.backgroundColor = 'white'
  
  }else{
    document.body.style.backgroundColor = '#2C3333'
    document.body.style.color = '#CBE4DE'
  }
}

  //  ----------------------------------------------------------------Third
  const Navy = ()=>{
  if(props.mode==='light'){

    props.ShowAlert("Please enable dark mode for this " , 'info')
    document.body.style.backgroundColor = 'white'
  
  }else{
    document.body.style.backgroundColor = '#0A2647'
    document.body.style.color = '#2C74B3'
  }
}  


// -------------------------------------------------------------------Fourth

const BPink = ()=>{
  if(props.mode==='light'){

    props.ShowAlert("Please enable dark mode for this " , 'info')
    document.body.style.backgroundColor = 'white'
  
  }else{
    document.body.style.backgroundColor = '#000000'
    document.body.style.color = '#af6480'
  }
}  

// -------------------------------------------------------------------Fifth

const Aztec = ()=>{
  if(props.mode==='light'){

    props.ShowAlert("Please enable dark mode for this " , 'info')
    document.body.style.backgroundColor = 'white'
  
  }else{
    document.body.style.backgroundColor = '#2C3639'
    document.body.style.color = '#DCD7C9'
  }
}  

  

  return (
    <div>
      <nav   className={`navbar Navi navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`  }>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                {props.Home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About"  >
                  {props.about}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}


<div className="Dark-Modes mx-3">

<button onClick={YGreen}   className="mx-2 px-4 py-1" style={{border:"#9fa784 solid 2px", borderRadius:'3px' , color:'#FEFAE0' , backgroundColor:'#9fa784'}} >Y-Green</button> 


<button onClick={Swamp} style={{border:"#2E4F4F solid 2px", borderRadius:'3px' , color:'#FEFAE0' , backgroundColor:'#2C3333'}} className="mx-2 px-4 py-1">Swamp</button>  


<button  onClick={Navy} style={{border:"#144272 solid 2px", borderRadius:'3px' , color:'#FEFAE0' , backgroundColor:'#0A2647'}} className="mx-2 px-4 py-1">Navy</button> 


<button  onClick={BPink} style={{border:"#af6480 solid 2px", borderRadius:'3px' , color:'#FEFAE0' , backgroundColor:'#000000'}} className="mx-2 px-4 py-1">Black & Pink</button> 


<button onClick={Aztec} style={{border:"#DCD7C9 solid 2px", borderRadius:'3px' , color:'#FEFAE0' , backgroundColor:'#2C3639'}} className="mx-2 px-4 py-1">Aztec</button> 

</div>


<div className={`form-check form-switch text-${props.modetxtClr}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.modetxt}</label>
</div>



          </div>
        </div>
      </nav>
    </div>
  );
}


// This is used to set the tyoes of the props we want we can set them at they cant be  string , object , boolean , numbers or anything we want them to be

Navbar.propTypes = {
  title: PropTypes.string.isRequired,      //Here we have used isrequired and if we have not filled it will show error if we dpnt want them to be undefined we use them

  about: PropTypes.string,
};


// Default props
// This is basically will be the default values of the props we set . But now it wont work because we have already seted the props but if we have not done that then this will work and there default values will be following.


Navbar.defaultProps ={
  title: "SetTitle",
  about: "About us",
  Home: 'Home'
}