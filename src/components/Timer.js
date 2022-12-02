import React, { useEffect, useState } from 'react'
import "./Timer.css"

function Timer() {
  const [time, setTime] = useState(5);
  const [isSet, setIsSet] = useState(0);
  const [issetTime, setIssetTime ] = useState(10)


  let timerId;
  let tomotimerId;
 
   const count = () => {
     timerId = setInterval(() => {
      setTime((prevtime) => prevtime - 1)
     }, 1000)

     if(time === 0) {
      clearInterval(timerId);
      hocount();
    }
  }

  const hocount = () => {
    tomotimerId = setInterval(() => {
      setIssetTime((tomo) => tomo - 1)
    }, 1000)
    
    if(issetTime === 0) {
      clearInterval(tomotimerId);
      setIsSet((set) => set + 1 )
     }
   }
   gjlkfdsjkjg

  useEffect(() => {
     count();
    return () => {    
      clearInterval(timerId);
      clearInterval(tomotimerId);
    }
  },[time, issetTime])
  
   const handleStop = () => {
    clearInterval(timerId);
 
   }

  return (
    <>
    <div className='time'>残り{time}秒</div>
    <div className='time'>残り{issetTime}秒</div>
    <p className='set'> set : {isSet}</p>
    <button className='start' onClick={() => count()}>start</button>
    <button className='stop' onClick={() => handleStop()}>stop</button>
    </>
  )
}

export default Timer
