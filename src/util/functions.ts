import { ResponseDto, ErrorDto } from "./dto";
import { unitTable } from "./constant";
export const createResponseStandard = (res: any): ResponseDto => ({
  status: res.status,
  data: res.data,
});

export const createErrorResponseStandard = (error: any): ErrorDto => {
  return {
    status: error.response ? error.response.status : 500,
    data: error.response ? error.response.data : null,
    error,
  };
};

/**
 * Generate query string for API call
 * @param { String } cityName - city name
 * @param { String } countryName - country name
 * @returns { String } a query string that can be used for api calls
 * At least one param must be present
 */

export const generateQueryString = (cityName: string, countryName: string) => {
  if (!cityName || !countryName) {
    // When either one is provided
    return `?q=${cityName || countryName}`;
  }
  if (cityName && countryName) {
    // When both is provided
    return `?q=${cityName},${countryName}`;
  }
};

/**
 * Return units for data
 * @param { String } units  - Metric / Imperial units
 * @param { String } element - Element (Eg, temp or humidity)
 * @returns { String } the corresponding unit based on the selection
 * At least one param must be present
 */

export const generateUnits = (units: string, element: string) => {
  for (let i of unitTable) {
    if (i.element === element) {
      if (units === "metric") {
        return i.metric;
      }
      return i.imperial;
    }
  }
  return "";
};
