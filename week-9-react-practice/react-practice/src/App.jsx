import {useState} from 'react';
function App() {
  return <div>
    <b>hi there</b>
    <Counter></Counter>
    </div>
 
}

function Counter(){
  const [count,setCount] = useState(0);

  // setInterval(function(){
  //   setCount(count+1)
  // },1000)

  function increaseCount(){
    setCount(count+1);
  }


  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    </div>
  
}

export default App
