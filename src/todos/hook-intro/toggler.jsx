import React, { useState } from 'react';
const Toggler = (props) => {
    const [isHappy, setIsHappy] = useState(false);
    const [isHeartBroken, setIsHeartBroken] = useState(false);
    const handleIsHappy = () => {
        setIsHappy(!isHappy)
    }
    const handleIsHeartBroken = () => {
        setIsHeartBroken(!isHeartBroken)
    }
    return ( 
        <div>
            <h1 onClick = {handleIsHappy}>{isHappy ? "😊" : "😢"} </h1>
            <h1 onClick = {handleIsHeartBroken}>{isHeartBroken ? "💖" : "💔"} </h1>
        </div>
     );
}
 
export default Toggler;