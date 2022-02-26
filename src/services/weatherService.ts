import axios from "axios";
import { ResponseDto, ErrorDto } from "../util/dto";
import {
  createResponseStandard,
  createErrorResponseStandard,
  generateQueryString,
} from "../util/functions";

class WeatherService {
  private host: string = process.env.REACT_APP_HOST_API || "";
  private apiKey: string = process.env.REACT_APP_SECRET_KEY || "";
  private unitsQuery: string = `&units=metric`;
  /**
   * Get Weather by city name
   * @param { String } cityName - city name
   * @param { String } countryName - country name
   * @returns { Object } Object of weather information
   */
  async getWeather(
    cityName: string,
    countryName: string
  ): Promise<ResponseDto | ErrorDto> {
    try {
      const res = await axios.get(
        `${this.host}${generateQueryString(cityName, countryName)}${
          this.unitsQuery
        }&appid=${this.apiKey}`
      );
      return createResponseStandard(res);
    } catch (error) {
      return createErrorResponseStandard(error);
    }
  }
}

export default new WeatherService();
