import React, { useState } from "react";
import {
  Col,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Button,
  FormLabel,
  Modal,
} from "react-bootstrap";
import WeatherService from "../services/weatherService";
const Input = () => {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please enter a city"
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
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
          />
        </Form.Group>
      </Form>
      <Button
        onClick={() => {
          console.log("City-->", cityName);
          console.log("Country-->", countryName);
        }}
      >
        Send
      </Button>
      <Button
        onClick={async () => {
          const res = await WeatherService.getWeather(cityName);
          console.log(res);
        }}
      >
        Try API
      </Button>
      <Button
        onClick={() => {
          console.log(process.env.REACT_APP_HOST_API);
        }}
      >
        Check env
      </Button>
    </div>
  );
};

export default Input;
