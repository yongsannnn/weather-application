import React, { useState } from "react";
import TopNav from "./components/TopNav";
import Input from "./components/Input";
import CurrentWeather from "./components/CurrentWeather";
import PastHistory from "./components/PastHistory";
import { AppContext } from "./context/appContext";
import "./App.css";
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
      <TopNav />
      <Input />
      <CurrentWeather />
      <PastHistory />
    </AppContext.Provider>
  );
};

export default App;
