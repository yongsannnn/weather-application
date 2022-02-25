import { ResponseDto, ErrorDto } from "./dto";

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
