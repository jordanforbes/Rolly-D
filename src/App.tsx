import React, { useState } from 'react';
import './App.css'

const App=()=> {
  const [count, setCount]= useState(0)
  const [mode, setMode] = useState(false) // false means roll replaces previous, true means it adds to count
  const [coin, setCoin] = useState('Coin')


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
    setCoin('Coin')
  }

//d20 function
  const roll20 = ()=>{
    let roll = rollDie(20)
    changeRoll(roll)
  }

//d12 function
  const roll12 = ()=>{
    let roll = rollDie(12)
    changeRoll(roll)
  }

//d10 function
  const roll10 = ()=>{
    let roll = rollDie(10)
    changeRoll(roll)
  }

//d8 function
  const roll8 = ()=>{
    let roll = rollDie(8)
    changeRoll(roll)
  }

//d6 function
  const roll6 = ()=>{
    let roll = rollDie(6)
    changeRoll(roll)
  }

//d4 function
  const roll4 = ()=>{
    let roll = rollDie(4)
    changeRoll(roll)
  }

//coin flip function
  const flipCoin = ()=>{
    return rollDie(2) == 1 ? setCoin('Heads') : setCoin('Tails');
  }


  return(
<div className=" container-fluid">
{/* count */}
    <div className={`row m-1 text-2xl`}>
      <span
        className={`
          ${count == 20 ? 'text-green-500' : 'text-black'}
          ${count == 0 ? 'text-red-500' : 'text-black'}`
        }
      >{count}</span>
      <span className="ml-10">{coin}</span>
    </div>
  <div className="grid grid-cols-3 row m-1">

{/* column 1 */}
    <div className="grid-cols-1 m-1">
  {/* d20 */}
      <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={roll20}
        >d20</button>
      </div>
  {/* d12 */}
       <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={roll12}
        >d12</button>
      </div>

  {/* d10 */}
       <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={roll10}
        >d10</button>
      </div>
  </div>

{/* column 2 */}
    <div className="grid-cols-1 m-1">
  {/* d8 */}
      <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={roll8}
        >d8</button>
      </div>
  {/* d6 */}
       <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={roll6}
        >d6</button>
      </div>

  {/* d4 */}
       <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={roll4}
        >d4</button>
      </div>
  </div>

{/* column 1 */}
    <div className="grid-cols-1 m-1">
  {/* coin flip */}
      <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={flipCoin}
        >Coin Flip</button>
      </div>
  {/* d12 */}
       <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={roll12}
        >d12</button>
      </div>

  {/* d10 */}
       <div className="row">
        <button
          className="bg-blue-200 hover:bg-blue-700 hover:text-white m-1 text-2xl"
          onClick={roll10}
        >d10</button>
      </div>
  </div>




      </div>


  {/* utility row */}
  <div className="row m-1">

  {/* change mode */}
          <button
            className={`
              hover:bg-gray-700 hover:text-white m-1
              ${mode === false ? 'bg-gray-200 text-black' : 'bg-gray-500 text-white'  }`
            }
            onClick={modeChange}
          >+</button>

  {/* reset button */}
          <button
            onClick={resetBtn}
            className={`
            hover:bg-gray-700 hover:text-white m-1
            `}
          >reset</button>
    </div>
  </div>
  )

}

export default App
