import React, { useState } from "react";
import Home from "./components/Home";
import Input from "./components/Input";
import { AppContext } from "./context/appContext";
const App = () => {
  const [currentData, setCurrentData] = useState({});
  const [historyData, setHistoryData] = useState([]);
  const context = {
    checkCurrentData: currentData,
    updateCurrentData: (data: any) => {
      setCurrentData(data);
    },
    checkHistoryData: historyData,
    updateHistoryData: (data: any) => {
      setHistoryData(data);
    },
  };
  return (
    <AppContext.Provider value={{ storeData: context }}>
      <Home />
      <Input />
    </AppContext.Provider>
  );
};

export default App;
