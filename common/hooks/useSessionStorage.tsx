import { useState, useEffect } from "react";

const useSessionStorage = () => {
  const [value, setValue] = useState();

  useEffect(() => {
      const Auth = sessionStorage.getItem("auth");
      const Token = JSON.parse(Auth as any)
      
    setValue(Token as any);
  }, []);

  return value;
};

export default useSessionStorage;
