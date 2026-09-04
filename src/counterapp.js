import { useState } from "react"

const Counterapp = ()=>
{
  const [count,setcount] = useState(0)

  const decreement = ()=>
  {
    if(count === 0)
    {
        setcount(count)
    }
    else
    {
        setcount(count - 1)
    }
}
 const increement = ()=>
 {
    setcount(count+1)
 }

 const reset = ()=>
 {
  setcount(0)
 }
    return(
         <div className="counter-app">
              <h1>Counter</h1>
              <p className="counter-value">{count}</p>
             {count === 0 ? <p className="limit-message"> ! Minimum Limit Reached</p> : null}
             <div className="counter-controls">
               <button className="decree-button" onClick={decreement}> -</button>
               <button className="reset-button" onClick={reset} >Reset</button>
               <button className="incree-button" onClick={increement}>+</button>
             </div>
         </div>
    )
}

export default Counterapp