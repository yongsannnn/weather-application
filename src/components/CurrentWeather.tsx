import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import { generateUnits, returnImageURL } from "../util/functions";
// import {
//   Col,
//   Dropdown,
//   Form,
//   FormControl,
//   InputGroup,
//   Button,
//   FormLabel,
//   Modal,
// } from "react-bootstrap";
const CurrentWeather = () => {
  const context: any = useContext(AppContext);
  const { checkCurrentData } = context.storeData;
  const renderCurrentWeather = () => {
    if (!!Object.keys(checkCurrentData).length) {
      return (
        <React.Fragment>
          <div>
            <img
              src={returnImageURL(checkCurrentData.weather[0].icon)}
              alt="weather-icon"
            />
          </div>
          <div>{checkCurrentData.name}</div>
          <div>{checkCurrentData.sys.country}</div>
          <div>{checkCurrentData.weather[0].main}</div>
          <div>{checkCurrentData.weather[0].description}</div>
          <div>{`${
            checkCurrentData.main.temp_min +
            generateUnits("metric", "temperature")
          } ~ ${
            checkCurrentData.main.temp_max +
            generateUnits("metric", "temperature")
          }`}</div>
          <div>
            {checkCurrentData.main.humidity +
              generateUnits("metric", "humidity")}
          </div>
          <div>{checkCurrentData.time}</div>
        </React.Fragment>
      );
    }
    return "Start by entering a city and/or country you would like to know it's weather!";
  };
  return (
    <React.Fragment>
      <div>Current Weather</div>
      {renderCurrentWeather()}
    </React.Fragment>
  );
};

export default CurrentWeather;
