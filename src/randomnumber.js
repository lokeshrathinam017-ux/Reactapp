import { useState } from "react";

const RandomNumber = ()=>
{
 
    const [count,setcount] = useState(0)
    
    const handlernum = ()=>
    {
        setcount(Math.floor(Math.random()*100)+1)
    }
    const handlereset = ()=>
    {
        setcount(0)
    }
 
return(
    <div className="random-num">
       <h1>Random Number Generator</h1>
       <p>True pseudo integer generation with zero telemetry </p>
    <p className="random-value">{count}</p>
       <div className="randomnum-control">
          <button className="generate-button" onClick={handlernum}> Generate Random Number</button>
          <button className="reset-btn" onClick={handlereset}> Reset</button>
        </div>   
    </div>)
}

export default RandomNumber