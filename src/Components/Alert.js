import React from 'react'

export default function Alert(props) {

    
    // To capitalize the firt letter of the alert.type success = Success
const Capitalise = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}



  return (
    
    // Here the props.alert showing that if the props.alert is null then do nothing and if props.alert is true which is true we had shown her then invoked the function below
    props.alert && 
     <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
  <strong>  {Capitalise(props.alert.typ)} : </strong>{props.alert.msg} 
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
     </div>

  )
}
