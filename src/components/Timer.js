import React, { useEffect, useState } from 'react'
import "./Timer.css"

function Timer() {
  const [time, setTime] = useState(10);


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
  
   const handleStop = () => {
    clearInterval(timerId)
 
   }

  return (
    <>
    <div className='time'>残り{time}秒</div>
    <button className='start' onClick={() => count()}>start</button>
    <button className='stop' onClick={() => handleStop()}>stop</button>
    </>
  )
}

export default Timer
