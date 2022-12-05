import React, { useEffect, useState } from 'react'
import "./Timer.css"

function Timer() {
  const [time, setTime] = useState(5);
  const [isSet, setIsSet] = useState(0);
  const [issetTime, setIssetTime ] = useState(10);
  // const [isWorkCount, setIsWorkCount] = useState(false);
  // const [isWorkHocount, setIsWorkHocount] = useState(false);



  let timerId;
  let tomotimerId;
 
   const count = () => {
     timerId = setInterval(() => {
      setTime(time - 1)
     }, 1000)
    //  setIsWorkCount(!isWorkCount);

     if(time === 0) {
      clearInterval(timerId);
    }

  }
  const hocount = () => {
    tomotimerId = setInterval(() => {
      setIssetTime(issetTime - 1)
    }, 1000)
    // setIsWorkHocount(!isWorkHocount);
    
    if(issetTime === 0) {
      clearInterval(tomotimerId);
      setIsSet((set) => set + 1 )
     }
   }
  

   useEffect(() => {
      count();
     return () => {    
       clearInterval(timerId);
     }
   },[time, issetTime])
   
   useEffect(() => {
    if(time === 0)
      hocount();
     return () => {    
       clearInterval(tomotimerId);
     }
   },[issetTime, time])

  

  
   const handleStop = () => {
    clearInterval(timerId);
    clearInterval(tomotimerId);
   }

  return (
    <>
    <h1 className='text'>さあ！みんなでHIITを頑張ろう！！</h1>
    <div className='timecount'>
      <div className='time'>残り{time}秒</div>
      <div className='subtime'>残り{issetTime}秒</div>
    </div>

      <p className='set'> set : {isSet}</p>

    <div className='button'>
      <button className='start' onClick={() =>( count(), hocount())}>start</button>
      <button className='stop' onClick={() => handleStop()}>stop</button>
    </div>
    </>
  )
}

export default Timer
