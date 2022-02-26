import React, { useState, useContext } from "react";
import {
  // Col,
  // Dropdown,
  Form,
  // FormControl,
  // InputGroup,
  Button,
  // FormLabel,
  // Modal,
} from "react-bootstrap";
import WeatherService from "../services/weatherService";
import { AppContext } from "../context/appContext";

const Input = () => {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const context: any = useContext(AppContext);
  const { updateCurrentData, checkHistoryData, updateHistoryData } =
    context.storeData;
  const handleSend = async () => {
    if (!cityName && !countryName) {
      setHasError(true);
      setErrorMessage("Enter city and/or country name.");
      return;
    }
    setIsLoading(true);
    setHasError(false);
    let res = await WeatherService.getWeather(cityName, countryName);
    if (res.status === 200) {
      const thisDate = new Date().toLocaleString("en-GB", { hour12: true });
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
      <div>
        <Form>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter a city"
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter a country"
              value={countryName}
              onChange={(e) => {
                setCountryName(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Button disabled={isLoading} onClick={handleSend}>
          Send
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
      <div style={{ display: hasError ? "block" : "none" }}>
        <p>{errorMessage}</p>
      </div>
    </React.Fragment>
  );
};

export default Input;
