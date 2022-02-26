import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import WeatherService from "../services/weatherService";
import { generateDateNow } from "../util/functions";

const PastHistory = () => {
  const context: any = useContext(AppContext);
  const { updateCurrentData, checkHistoryData, updateHistoryData } =
    context.storeData;

  const removeFromHistory = (index: number) => {
    let cloned = [...checkHistoryData];
    cloned.splice(index, 1);
    updateHistoryData(cloned);
  };

  const searchAgain = async (cityName: string, countryName: string) => {
    let res = await WeatherService.getWeather(cityName, countryName);
    if (res.status === 200) {
      const thisDate = generateDateNow();
      Object.assign(res.data, { time: thisDate });
      updateCurrentData(res.data);
      updateHistoryData([...checkHistoryData, res.data]);
    }
  };
  const renderHistory = () => {
    let lst = checkHistoryData.map((i: any, index: number) => {
      return (
        <React.Fragment key={index}>
          <div className="current-container history-container">
            <h4>{`${index + 1}. ${i.name}, ${i.sys.country}`}</h4>
            <div className="align-right">
              {i.time}
              <div className="icon-container">
                <button
                  className="cta-icon history-icon"
                  onClick={() => {
                    searchAgain(i.name, i.sys.country);
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button
                  className="cta-icon history-icon"
                  onClick={() => {
                    removeFromHistory(index);
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
          <p className="light-grey-line"></p>
        </React.Fragment>
      );
    });
    if (lst.length === 0) {
      lst.push(<p className="content-title">No history.</p>);
    }
    return lst;
  };
  return (
    <div className="page-width current-weather">
      <h1 className="mt-2">Search History</h1>
      <p className="grey-line"></p>
      {renderHistory()}
    </div>
  );
};

export default PastHistory;
