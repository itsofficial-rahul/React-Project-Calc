import React, { createRef, useEffect, useRef, useState } from 'react';
import './App.css';
function App() {
  const [result, setresult] = useState("")
  const inputref = useRef(null)
  function handleclick(event) {
    setresult(result.concat(event.target.className));
  }
  const clearDisplay = () => {
    setresult("")
  }
  const action = () => {
    setresult(eval(result).toString());
  }
  function clearAll() {
    setresult("")
  }
  function deletOneByOne()
  {
    setresult(result.slice(0,-1))
  }
  return (
     <div>
       <h3 id='cal'>CALCULATOR IN REACT JS </h3>
    <div className='COm'>
      
      <div>
        <form>
          <div>
            <input id='input1' type="text" value={result} ref={inputref} ></input>
          </div>
        </form>
        <div >
          <button id='btn1'  className='7' onClick={handleclick}>7</button>
          <button id='btn1' className='8' onClick={handleclick}>8</button>
          <button id='btn1'className='9' onClick={handleclick}>9</button>
          <button id='btn1'className='-' onClick={handleclick}>-</button>
        </div>
        <div >
          <button id='btn1'className='4' onClick={handleclick}>4</button>
          <button id='btn1' className='5' onClick={handleclick}>5</button>
          <button id='btn1' className='6' onClick={handleclick}>6</button>
          <button id='btn1'className='+' onClick={handleclick}>+</button>
        </div>
        <div>
          <button id='btn1' className='1' onClick={handleclick}>3</button>
          <button id='btn1' className='2' onClick={handleclick}>2</button>
          <button id='btn1' className='3' onClick={handleclick}>1</button>
          
          <button id='btn1' className='*' onClick={handleclick}>x</button>
        </div>
      
        <button id='btn1' className='/' onClick={handleclick}>/</button>
        <button id='btn1' className='0' onClick={handleclick}>0</button>
        <button id='btn1' onClick={action}>=</button>
        <button id='btn1' onClick={deletOneByOne} > c</button>
        <button id='btn2' onClick={clearAll}>RESET ALL</button>
      </div>
    </div>
    </div>
  )
}
export default App;
