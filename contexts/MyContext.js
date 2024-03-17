import { createContext, useState, useEffect } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("sharedData");
      return localData ? JSON.parse(localData) : [new Date(), new Date(), "0"];
    }
    return [new Date(), new Date(), "0"]; // Default value or handle differently if needed
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
