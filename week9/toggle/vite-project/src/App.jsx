import {useState} from "react"
function App() {
  return(
    <ToggleMessage />

  )
}

function ToggleMessage(){
  const[isVisible, setIsVisible]=useState(true)

  function Toggle(){
    setIsVisible(!isVisible)
  }
  return(
    <div>
      <button onClick={Toggle}>Toggle Message </button>
      {isVisible && <p>This message is conditionally rendered</p>}
    </div>
  )
 
}
export default App