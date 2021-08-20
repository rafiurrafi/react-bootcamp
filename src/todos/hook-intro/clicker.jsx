import React, { useEffect, useState } from 'react';
const Clicker = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    })
    return (  
        <button onClick = {() => setCount(count + 1)}>Click {count}</button>
    );
}
 
export default Clicker;