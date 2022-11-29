import React, { useEffect, useState } from 'react'
import "./Timer.css"

function Timer() {
  const [time, setTime] = useState(20);
  const [isSet, setIsSet] = useState(0);


  let timerId;
 
   const count = () => {
     timerId = setInterval(() => {
      setTime((prevtime) => prevtime - 1)
     }, 1000)

     if(time === 0) {
      clearInterval(timerId);
      setIsSet((set) => set + 1 )
     }
   }

   const hocount = () => {
    timerId = setInterval(() => {
      setTime((prevtime) => prevtime - 1)
     }, 1000)

   }

  useEffect(() => {
     count();
    return () => {  
      clearInterval(timerId);
    }
  },[time])
  
   const handleStop = () => {
    clearInterval(timerId)
 
   }

  return (
    <>
    <div className='time'>残り{time}秒</div>
    <p className='set'> set : {isSet}</p>
    <button className='start' onClick={() => count()}>start</button>
    <button className='stop' onClick={() => handleStop()}>stop</button>
    </>
  )
}

export default Timer
