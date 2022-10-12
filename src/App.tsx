import React, { useState } from 'react';
import './App.css'

const App=()=> {
  const [count, setCount]= useState(0)
  const [mode, setMode] = useState(false) // false means roll replaces previous, true means it adds to count


  //change from replace to add and vice versa
  const modeChange = () =>{
    setMode(currentMode => !currentMode)
  }

  const rollDie = (die:number)=>{
    return Math.floor(Math.random() * die+1)
  }

  //checks roll and changes it based on mode
  const changeRoll = (roll:number)=>{
    if( mode === false){
      setCount(roll)
    }else{
      setCount(prevCount => prevCount + roll)
    }
  }

  const resetBtn=()=>{
    setCount(0)
  }

  //roll d20
  const roll20 = ()=>{
    let roll = rollDie(20)
    changeRoll(roll)
  }

  const roll10 = ()=>{
    let roll = rollDie(10)
    changeRoll(roll)
  }


  return(
    <div
      className=" container-fluid"
    >
      <div className={`row m-1 text-2xl
        ${count == 20 ? 'text-green-500' : 'text-black'}
        ${count == 0 ? 'text-red-500' : 'text-black'}`}>
        <span>{count}</span>
      </div>
      <div className="row m-1">
        {/* d20 */}
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white mr-1 ml-1 text-2xl"
          onClick={roll20}
        >d20</button>

        {/* d20 */}
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white mr-1 ml-1 text-2xl"
          onClick={roll10}
        >d10</button>
      </div>

    {/* utility row */}
      <div className="row m-1">
        {/* change mode */}
        <button
          className={`
            hover:bg-gray-700 hover:text-white mr-1 ml-1
            ${mode === false ? 'bg-gray-200 text-black' : 'bg-gray-500 text-white'  }`
          }
          onClick={modeChange}
        >+</button>

        {/* reset button */}
        <button
          onClick={resetBtn}
          className={`
           hover:bg-gray-700 hover:text-white mr-1 ml-1
          `}
        >reset</button>
      </div>

    </div>
  )

}

export default App
