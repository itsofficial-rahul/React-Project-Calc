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
      
      <h3 style={{color:"rebeccapurple"}}>CALCULATOR IN REACT.js  </h3>

      <div style={{ border: "2px solid red", width: "200px" }}>
        <form>
          <div>
            <input style={{ width: "100px" }} type="text" value={result} ref={inputref} ></input>
          </div>
        </form>
        <div>
          <button className='7' onClick={handleclick}>7</button>
          <button className='8' onClick={handleclick}>8</button>
          <button className='9' onClick={handleclick}>9</button>
          <button className='+' onClick={handleclick}>+</button>
        </div>
        <div>
          <button className='4' onClick={handleclick}>6</button>
          <button className='5' onClick={handleclick}>5</button>
          <button className='6' onClick={handleclick}>4</button>
          <button className='-' onClick={handleclick}>-</button>
        </div>
        <div>
          <button className='3' onClick={handleclick}>3</button>
          <button className='2' onClick={handleclick}>2</button>
          <button className='1' onClick={handleclick}>1</button>
          <button className='*' onClick={handleclick}>*</button>
        </div>
        <button onClick={clearAll}>clear</button>
        <button className='/' onClick={handleclick}>/</button>
        <button onClick={action}>result</button>
        <button onClick={deletOneByOne} > c</button>
      </div>
    </div>
  )
}
export default App;
