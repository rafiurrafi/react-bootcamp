import {useState} from 'react';
const useInput = ({initialValue}) => {
    const [input, setInput] = useState(initialValue);
    const toggle = (e) => {
        setInput(e.target.value)
    }
    return [input, toggle]
}
export default useInput