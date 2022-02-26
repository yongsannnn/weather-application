import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import { generateUnits, returnImageURL } from "../util/functions";

const CurrentWeather = () => {
  const context: any = useContext(AppContext);
  const { checkCurrentData } = context.storeData;
  const renderCurrentWeather = () => {
    if (!!Object.keys(checkCurrentData).length) {
      return (
        <div className="current-container current-reverse">
          <div className="current-information">
            <img
              src={returnImageURL(checkCurrentData.weather[0].icon)}
              alt="weather-icon"
            />
            <h2>{checkCurrentData.weather[0].main}</h2>
            <h3 className="mt-2">{`${checkCurrentData.name}, ${checkCurrentData.sys.country}`}</h3>
          </div>
          <table key={checkCurrentData.id} className="current-table">
            <tbody>
              <tr>
                <td className="content-title">Description:</td>
                <td className="content-des">
                  {checkCurrentData.weather[0].description.toUpperCase()}
                </td>
              </tr>
              <tr>
                <td className="content-title">Temperature:</td>
                <td className="content-des">{`${
                  checkCurrentData.main.temp_min +
                  generateUnits("metric", "temperature")
                } ~ ${
                  checkCurrentData.main.temp_max +
                  generateUnits("metric", "temperature")
                }`}</td>
              </tr>
              <tr>
                <td className="content-title">Humidity:</td>
                <td className="content-des">
                  {checkCurrentData.main.humidity +
                    generateUnits("metric", "humidity")}
                </td>
              </tr>
              <tr>
                <td className="content-title">Time:</td>
                <td className="content-des">{checkCurrentData.time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return <p className="content-title">No information.</p>;
  };
  return (
    <React.Fragment>
      <div className="page-width current-weather">
        <h1 className="mt-2">Current Weather</h1>
        <p className="grey-line"></p>
        {renderCurrentWeather()}
      </div>
    </React.Fragment>
  );
};

export default CurrentWeather;
