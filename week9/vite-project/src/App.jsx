import { useState,useEffect } from 'react'
function App() {
  return (
    <div>
        <Component></Component>
    </div>
  )
}
  function Component(){
    const [count,setCount]=useState(0);

    useEffect(function(){
      setInterval(function(){
        setCount(count=>count+1)
      },1000)
    },[])
    
    
    return(
       <div>
         <h1>{count}</h1>
         <button>Increase Count</button>
       </div>

    )

  }


export default App
