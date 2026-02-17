import { useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);

    return(
        <>
          <h1>{count}</h1>
          <button onClick={()=>setCount(count + 1)}>Increase {count}</button>
          <button onClick={()=>{if(count>0){setCount(count - 1)}}}>Decrease {count}</button>
          <button onClick={()=>setCount(0)}>Reset {count}</button>
        </>
    )
}

export default Counter