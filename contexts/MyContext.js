import { createContext, useState, useEffect } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(() => {
    // Initialize shared data from local storage or a default value
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("sharedData")) || "Default Data";
    } else {
      return "Default Data";
    }
  });

  const updateSharedData = (newData) => {
    setSharedData(newData);
  };

  // Use useEffect to save sharedData to local storage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sharedData", JSON.stringify(sharedData));
    }
  }, [sharedData]);

  return (
    <MyContext.Provider value={{ sharedData, updateSharedData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
