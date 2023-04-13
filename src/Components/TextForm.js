import React, {useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState(""); //This is known as state hook it is used to set the value of a state for example here as we have used the useState now if we want to put this value anywhere we want we just have to put {state} there and the value assigend to useState will be there , and if we want to change the value we can use the setText there to change the value . We can not change the value by using the {text} we have to use the {setText}


    // text = "hello hi" //this is the wrong way to change the text 
    // setText("Hello")   //This is the right way to change the set text

    const handleToUpperCase = ()=>{
        console.log("To upper case")
        let newText = text.toUpperCase()
        setText(newText)
        props.ShowAlert("Text has been Converted to UpperCase! " , 'success')


    }

    const handleTolowerCase = ()=>{
        console.log("To upper case")
        let newText = text.toLowerCase()
        setText(newText)
        props.ShowAlert("Text has been Converted to LowerCase! " , 'success')
    }


    // Clearing the text btn
    const toClear = ()=>{
        setText('')
        props.ShowAlert("Text has been Cleared! " , 'success')
    }




    // Program to change the color of the randomly
    const ToRandomColor= ()=>{
        
       console.log("Working")
let box = document.getElementById('myBox')

let arr = ["red" , "blue" , "green" , 'gray' , "yello" , 'pink' , "HotPink" , "orange"]
let rndm = Math.round(Math.random()*7)
// console.log(rndm)
let rndmClr = arr[rndm]
box.style.color = rndmClr
      
    }

// To Copy the text to clipboard
const ToClipBoard = () =>{
    // console.log('ad')
    let copyText = document.getElementById('myBox')
    copyText.select()
    navigator.clipboard.writeText(copyText.value);
    props.ShowAlert("Text has been Copied to ClipBoard " , 'success')
}


// To Removet the extra spaces
const ToRemoveExtraSpace = ()=>{
let newText = text.split(/[ ]+/)
setText(newText.join(" "))
props.ShowAlert("Extra Spaces have been Removed " , 'success')
}

// Program for preview
    const handleChange = (event)=>{
        setText(event.target.value)
    }

    
  return (
    <>
    <div>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8" placeholder='Enter the text here' ></textarea>
</div> 

<div onClick={handleToUpperCase}  className="btn btn-primary mx-2 my-2 " >To-UpperCase</div>
<div onClick={handleTolowerCase}   className="btn btn-primary mx-2 my-2 ">To-LowerCase</div>
<div onClick={toClear}  className="btn btn-primary mx-2 my-2 ">Clear</div>
<div onClick={ToRandomColor}  className="btn btn-primary mx-2 my-2 ">Random-Color</div>
<div onClick={ToClipBoard}  className="btn btn-primary mx-2 my-2 ">Copyt To Clipboard</div>
<div onClick={ToRemoveExtraSpace}  className="btn btn-primary mx-2 my-2  ">Remove-Extra-Space</div>




    </div>


{/* // Container for length and letter  */}
<div  className="container" >
    <p className='my-3' >No. of Words <b> {text.split(' ').filter((x) => x !== '').length} </b> and the No. of text are <b> {text.length} </b> </p>

    <p className='my-3' >Time To read is <b>{0.008 * text.trim().length}</b> Min </p>
</div>


{/* Preview Container */}
<div className="container">
    <h1 className='my-3' >Preview of the Text</h1>
    <p>{text}</p>
</div>


</>
  )
}

