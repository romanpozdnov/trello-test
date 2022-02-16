import { useCallback, useState } from "react";

export const useIndexDBRequest = (
  callback,
  dependencies = [],
  errorMessage = ""
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [callbackValue, setCallbackValue] = useState();

  const onRequest = useCallback(
    async (...params) => {
      try {
        setIsLoading(true);
        const data = await callback(...params);
        setCallbackValue(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    //eslint-disable-next-line
    [callback, ...dependencies]
  );

  return [onRequest, isLoading, callbackValue];
};
