import { useState } from "react";

const useToggle = ({ initialValue = false }) => {
  const [data, setDate] = useState(initialValue);
  const handleData = () => {
    setDate(!data);
  };
  return [data, handleData];
};

export default useToggle;
