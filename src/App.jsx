import UpdateTimeButton from "./components/UpdateTimeButton"
import ToggleButton from "./components/ToggleButton"
import { useSelector } from "react-redux"

function App() {
  const chronoValues = useSelector(state => state.chrono)

  function getFormattedValues(time) {
    const minutes = `${Math.trunc(time / 60) < 10 ? `0${Math.trunc(time / 60)}` : Math.trunc(time / 60)}`
    const seconds = `${time % 60 < 10 ? `0${time % 60}` : time % 60}`
  
    return `${minutes}:${seconds}`
  }



  return (
    <div className="min-h-screen pt-20 bg-slate-700 text-slate-100">
      <div className="max-w-xl p-10 mx-auto border rounded border-slate-500">
        <h1 className="mb-8 text-3xl text-center">Pomodoro App</h1>

        <div className="flex justify-center mb-8">
 
          <div className="mr-10">
            <p className="mb-1 text-center">Sessions</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"session"} />
              <p className="mx-4 text-xl">{chronoValues.session.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"session"} />
            </div>
          </div>


          <div>
            <p className="mb-1 text-center">Pauses</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"pause"} />
              <p className="mx-4 text-xl">{chronoValues.pause.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"pause"} />
            </div>
          </div>
        </div>

        <p className="mb-2 text-xl font-semibold text-center">
          {chronoValues.displayedValue.heading}
        </p>
        <p className="flex justify-center mb-1 text-center">
          <span className="p-4 text-4xl rounded bg-slate-300 text-slate-900">
            {getFormattedValues(chronoValues.displayedValue.value)}
          </span>
        </p>
        <p className="mb-10 text-center">
          Cycle(s) terminé(s) : {chronoValues.cycles}
        </p>

        <ToggleButton />
      </div>
    </div>
  )
}

export default App
