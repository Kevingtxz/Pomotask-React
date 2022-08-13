import { API_URL } from "../../util/constant";
import { useCallback, useState } from "react";
import Form from "../../model/form/abs-form";

export enum MethodsEnum {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
  PATCH = "PATCH",
}

export enum UrlEnum {
  TASKS = "tasks",
  TIMERS = "timers",
}

export type sendRequestProps = {
  url?: string;
  method?: MethodsEnum;
  headers?: HeadersInit;
  body?: Form | Form[];
  dataHandler?: (data: any) => void;
};

export type useHttpReturn = [
  isLoading: boolean,
  error: unknown,
  sendRequest: ({
    url,
    method,
    headers,
    body,
    dataHandler,
  }: sendRequestProps) => void
];

export default function useHttp(): useHttpReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async ({ url, method, headers, body, dataHandler }: sendRequestProps) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch((url = API_URL + url), {
          method: method ? method : MethodsEnum.GET,
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) throw new Error("Request faild");

        const data = await response.json();
        if (dataHandler) dataHandler(data);
      } catch (err: unknown) {
        console.log(err);
      }
      setIsLoading(false);
    },
    []
  );

  return [isLoading, error, sendRequest] as useHttpReturn;
}
