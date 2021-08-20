import React, { useState } from 'react';
const CounterHooks = (props) => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1)
    }
    return ( <div>
        <h1>Counter hook</h1>
        <h2>{count}</h2>
        <button onClick = {handleCount}>Kill using hook</button>
    </div> );
}
 
export default CounterHooks;