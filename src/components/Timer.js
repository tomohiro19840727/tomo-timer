import React, { useEffect, useState } from 'react'
import "./Timer.css"

function Timer() {
  const [time, setTime] = useState(20);

  let timerId;
 
   const count = () => {
     timerId = setInterval(() => {
      setTime((prevtime) => prevtime - 1)
     }, 1000)

     if(time === 0) {
      clearInterval(timerId);
     }
   }

  useEffect(() => {

    count();

    return () => {  

      clearInterval(timerId);
    }
  },[time])
  
  
  return (
    <>
    <div className='time'>{time}</div>
    <button className='time' onClick={() => clearInterval(timerId)}>stop</button>
    </>
  )
}

export default Timer
