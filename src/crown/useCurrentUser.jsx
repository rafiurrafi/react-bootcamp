import axios from "axios";
import { useEffect, useState } from "react";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/");
      setCurrentUser(response.data);
    })();
  }, []);
  return currentUser;
}
