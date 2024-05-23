import { useState } from "react"
import Calc from "./component/Calc"

function App() {
  const [display, setDisplay] = useState<string>("0");

  return (
    <div className="App">
      {/* <div className="display">{display}</div> */}
      <input type="text" value={display} onChange={() => { setDisplay(display) }} />
      <Calc setDisplay={setDisplay} />
    </div>
  )
}

export default App
