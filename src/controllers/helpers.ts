import { HttpResponse, HttpStatusCode } from "./protocols";

export const ok = <T>(body: any): HttpResponse<T> => {
  return {
    statusCode: HttpStatusCode.OK,
    body,
  };
};

export const created = <T>(body: any): HttpResponse<T> => {
  return {
    statusCode: HttpStatusCode.CREATED,
    body,
  };
};

export const badRequest = (message: string): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: message,
  };
};

export const serverError = () => {
  return {
    statusCode: HttpStatusCode.SERVER_ERROR,
    body: "Something went wrong",
  };
};
