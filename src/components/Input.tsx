import React, { useState, useContext } from "react";
import { Col, Form } from "react-bootstrap";
import WeatherService from "../services/weatherService";
import { AppContext } from "../context/appContext";
import { generateDateNow } from "../util/functions";

const Input = () => {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const context: any = useContext(AppContext);
  const { updateCurrentData, checkHistoryData, updateHistoryData } =
    context.storeData;

  const onKeyDownHandler = (e: any) => {
    if (e.keyCode === 13) {
      handleSend();
    }
  };
  const handleSend = async () => {
    if (!cityName && !countryName) {
      setHasError(true);
      setErrorMessage("Enter a city and/or country name.");
      return;
    }
    setIsLoading(true);
    setHasError(false);
    let res = await WeatherService.getWeather(cityName, countryName);
    if (res.status === 200) {
      const thisDate = generateDateNow();
      Object.assign(res.data, { time: thisDate });
      updateCurrentData(res.data);
      updateHistoryData([...checkHistoryData, res.data]);
    } else {
      setHasError(true);
      setErrorMessage(res.data.message);
    }
    setIsLoading(false);
  };

  const handleReset = () => {
    setCityName("");
    setCountryName("");
  };
  return (
    <React.Fragment>
      <div className="page-width">
        <Col className="input-wrapper" sm="12">
          <button className="cta-icon top-right" onClick={handleReset}>
            <i className="fas fa-sync-alt"></i>
          </button>
          <Form className="form-row" onKeyDown={(e) => onKeyDownHandler(e)}>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="City"
                className="input-input"
                value={cityName}
                onChange={(e) => {
                  setCityName(e.target.value);
                }}
              />
            </Col>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Country"
                className="input-input"
                value={countryName}
                onChange={(e) => {
                  setCountryName(e.target.value);
                }}
              />
            </Col>
          </Form>
          <p
            className="warning-text"
            style={{ display: hasError ? "block" : "none" }}
          >
            {errorMessage}
          </p>
          <button
            className={"cta search-btn"}
            disabled={isLoading}
            onClick={handleSend}
          >
            SEARCH
          </button>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default Input;
