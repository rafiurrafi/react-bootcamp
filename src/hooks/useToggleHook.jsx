import { useState } from "react";

const useToggleHook = ({ initialValue = false }) => {
  const [open, setOpen] = useState(initialValue);
  const handleOpen = () => {
    setOpen(!open);
  };
  return [open, handleOpen];
};

export default useToggleHook;
