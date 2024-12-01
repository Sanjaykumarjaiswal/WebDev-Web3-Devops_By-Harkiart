import {useState,useEffect} from 'react';
function App() {
  return <div>
    <Counter></Counter>
    </div>
 
}
function Counter(){
  const [count,setCount] = useState(0);

useEffect(function(){

  setInterval(function(){
    setCount(count=>count+1)
    /*
    count=>count+1
    or 
    function(count){
    return count+1
    }
    */
  },1000)
},[])


  return <div>
    <h1 id="text">{count}</h1>
    </div>
  
}

export default App
