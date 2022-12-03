import React, { useEffect, useState } from 'react'
import "./Timer.css"

const Timer = () => {
  const [isWait, setIsWait] = useState(true);
  const [isWork, setIsWork] = useState(false);

  // 入力パラメータ
  const [workTime, setWorkTime] = useState(20);
  const [restTime, setRestTime] = useState(10);
  const [loopLimit, setLoopLimit] = useState(0);

  // 現在のセット数
  const [loopCount, setLoopCount] = useState(0);

  // タイマー処理
  const [timer, setTimer] = useState(0);

  // アプリの本体
  const useStateSwitcher = () =>{
    isWait?(
      useCount(timer,0)
    ):(
      isWork?(
        useCount(timer,workTime),
        loopCount==loopLimit
      ):(
        useCount(timer,restTime)
      )
    )
  }

  //  カウントする関数、スタートボタンを押したら呼び出します
  const useCount = ( time, limit ) => {
    useEffect(() => {
      if ( time<limit && !isWait ){
        const interval = setInterval(() => {
          setTimer(time + .25)
        }, 250);
        return () => clearInterval(interval);

      }else if( time==limit && !isWait ){
        setTimer(0)
        setLoopCount( isWork? loopCount: loopCount+1 )
        setIsWork( !isWork )
      }else{
        setTimer(0)
      }
    },[time, limit])
  }

  return (
    <div>{timer}</div>
  )
}

export default Timer