import React from 'react';
import useToggle from './hooks/useToggle';
const Toggler = (props) => {
    const [isHappy, setIsHappy] = useToggle(false);
    const [isHeartBroken, setIsHeartBroken] = useToggle(false);
    
    return ( 
        <div>
            <h1 onClick = {setIsHappy}>{isHappy ? "😊" : "😢"} </h1>
            <h1 onClick = {setIsHeartBroken}>{isHeartBroken ? "💖" : "💔"} </h1>
        </div>
     );
}
 
export default Toggler;