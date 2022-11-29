import React, { useEffect, useState } from 'react'

function Timer() {
  const [time, setTime] = useState(20);


  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((time) => time - 1)
    }, 1000)
    return () => clearInterval(timerId);
    
  },[])

  return (
    <>
    <div>{time}</div>
  <button onClick={}>stop</button>
    </>
  )
}

export default Timer
