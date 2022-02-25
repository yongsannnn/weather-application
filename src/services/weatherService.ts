import axios from "axios";
import { ResponseDto, ErrorDto } from "../util/dto";
import {
  createResponseStandard,
  createErrorResponseStandard,
} from "../util/functions";

class WeatherService {
  private host: string = process.env.REACT_APP_HOST_API || "";
  private apiKey: string = process.env.REACT_APP_SECRET_KEY || "";
  /**
   * Get Weather by city name
   * @param { String } cityName - city name
   * @returns { Array } List of Organizations
   */
  async getWeather(cityName: string): Promise<ResponseDto | ErrorDto> {
    try {
      const res = await axios.get(
        `${this.host}?q=${cityName}&appid=${this.apiKey}`
      );
      console.log(res);
      return createResponseStandard(res);
    } catch (error) {
      return createErrorResponseStandard(error);
    }
  }
}

export default new WeatherService();
