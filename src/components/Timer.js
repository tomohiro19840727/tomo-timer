import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./Timer.css";
import Sound from "./決定ボタンを押す30.mp3";
import Stopsound from "./決定ボタンを押す47.mp3";
import Completesound from "./201224_005.mp3";
import useSound from 'use-sound';


  
const Count = () => {
  const [play] = useSound(Sound);
  const [playStop] = useSound(Stopsound);
  const [playComplete] = useSound(Completesound);
  const [isPlaying, setIsPlaying] = useState(true)
  const [count, setCount] = useState(30)
  // const [restCount, setRestCount] = useState(10);
  const [isSet, setIsSet] = useState(0);
  // const [isWork, setIsWork] = useState(true);




   
  const renderTime = ({ remainingTime }) => {
    if(remainingTime === 10) {
      playStop() 
      
    } else if(remainingTime === 0) {
      playComplete();
    }
  
    return (
      <div>
        {remainingTime}
      </div>
    );
  };

  let timerId;
   
  const setStart = () => {
    
         timerId = setInterval(() => {
         setIsSet((prevSet) => prevSet + 1);
        }, 30000)
    
         if(isSet === 2) 
           clearInterval(timerId)
         
    }
  
  // useEffect(() => {
    
  //   setStart()
  //   return () => clearInterval(timerId)  
  // }, [isSet])

  // const renderRestTime = ({ remainingTime }) => {
  //   // if(remainingTime > 0) {
  //   //   setIsWork(isWork);
  //   // } else 
  //   if(remainingTime === 0 ) {
  //     playStop();
  //     // setIsSet(!isWork? isSet : isSet + 1)
  //     // setIsWork(!isWork);
  //     // setIsPlaying(!isPlaying);
  //   }
  
  //   return (
  //     <div>
  //       {remainingTime}
  //     </div>
  //   );
  // };

 

  return (
    <div>
      <h1 className='text'>さあ！みんなでHIITを頑張ろう！！</h1>
     <div className='en'>
       <div className="work">
      <CountdownCircleTimer 
        size="240"
        isPlaying={!isPlaying}
        duration={count}
        initialRemainingTime={30}
        isSmoothColorTransition={false}
        // updateInterval={1}
        colors="#aabbcc"
        // colors="url(#test-it)"
        // colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        // colorsTime={[8, 6.66, 3.33, 0]}
        onUpdate={(remainingTime) => {
          // console.log('Counter is ', count)
          // console.log('Remaining time is ', remainingTime)
        }}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {renderTime}
      </CountdownCircleTimer>
       </div>
        
        {/* <div className='rest'>
      <CountdownCircleTimer
        size="240"
        isPlaying={!isPlaying}
        duration={restCount}
        initialRemainingTime={5}
        isSmoothColorTransition={false}
        // updateInterval={1}
        colors="#aabbcc"
        // colors="url(#test-it)"
        // colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        // colorsTime={[8, 6.66, 3.33, 0]}
        onUpdate={(remainingTime) => {
          // console.log('Counter is ', count)
          // console.log('Remaining time is ', remainingTime)
        }}
        onComplete={() => ({ shouldRepeat: true})}
      >
        {renderRestTime}
        
      </CountdownCircleTimer>
        </div> */}
     </div>
 
     <p className='set'> set : {isSet}</p>
      
       <div className='button'>
      <button  className='start' onClick={() => (setIsPlaying((prev) => !prev), setStart() ,play())}>
        start or stop
      </button>
       </div>
    </div>
  )
}

export default Count
