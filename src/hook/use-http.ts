import { useCallback, useState } from "react";
import Model from "../model/model";

export enum MethodsEnum {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
  PATCH = "PATCH",
}

export type sendRequestProps = {
  url: string;
  method?: MethodsEnum;
  headers?: HeadersInit;
  body: Model;
  dataHandler: (data: JSON) => void;
};

export type useHttpReturn = {
  isLoading: boolean;
  error: unknown;
  sendRequest: ({
    url,
    method,
    headers,
    body,
    dataHandler,
  }: sendRequestProps) => void;
};

export default function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async ({ url, method, headers, body, dataHandler }: sendRequestProps) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          method: method ? method : "GET",
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) throw new Error("Request faild");

        const data = await response.json();
        dataHandler(data);
      } catch (err: unknown) {
        console.log(err);
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  } as useHttpReturn;
}
