export type ResponseDto = {
  status: number;
  data: any;
};

export type ErrorDto = {
  status: number;
  data: null;
  error: any;
};
