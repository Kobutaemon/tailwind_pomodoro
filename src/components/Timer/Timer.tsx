import { useEffect, useState } from "react"
import "./Timer.css"

const nowStates: string[] = ["Pomodoro", "Short Break", "Long Break"]

function Timer() {
  const [buttonState, setButtonState] = useState<string>("START")
  let [time, setTime] = useState<number>(1500) //1500は25分を秒換算したもの



  function startTimer() {
    setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)
  }

  return (
    <div className="timer bg-white/20 w-70/100 lg:w-40/100 mx-auto py-7">
      <div className="flex justify-center">
        {
          nowStates.map((nowState, index) => (
            <button key={index} className="px-5 py-1 cursor-pointer">{nowState}</button>
          ))
        }
      </div>
      <p className="text-7xl text-center py-20">
        {String(Math.floor(time / 60)).padStart(2, "0")} : {String(time % 60).padStart(2, "0")} {/* String.padStart(i, n)でi桁になるようにStringの一番前にnを追加する */}
      </p>
      <div className="flex justify-evenly w-50/100 mx-auto">
        <button className="cursor-pointer px-5 py-3 bg-gray-300 rounded-lg hover:opacity-70 transition-all duration-200 text-red-800/80" onClick={startTimer}>{buttonState}</button>
        <button className="cursor-pointer px-5 py-3 bg-gray-300 rounded-lg hover:opacity-70 transition-all duration-200 text-red-800/80">SKIP</button>
      </div>
    </div>
  )
}

export default Timer