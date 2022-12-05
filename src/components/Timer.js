import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./Timer.css";
  
const Count = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [count, setCount] = useState(20)
  const [restCount, setRestCount] = useState(10);
  const [isset, setIsSet] = useState(0);

  return (
    <div>
      <h1 className='text'>さあ！みんなでHIITを頑張ろう！！</h1>
     <div className='en'>
       <div className="work">
      <CountdownCircleTimer 
        size="240"
        isPlaying={isPlaying}
        duration={count}
        initialRemainingTime={20}
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
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
       </div>
        
        <div className='rest'>
      <CountdownCircleTimer
        size="240"
        isPlaying={isPlaying}
        duration={restCount}
        initialRemainingTime={10}
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
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
        </div>
     </div>

      
       <div className='button'>
      <button  className='start' onClick={() => setIsPlaying((prev) => !prev)}>
        start or stop
      </button>
      <button  className='stop' onClick={() => setCount((prev) => (prev += 5))}>Count</button>
       </div>
    </div>
  )
}

export default Count
