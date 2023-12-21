/** @format */

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface QueryResult<TData> {
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  data?: TData;
  error?: unknown;
}

const useFetchQuery = <TData,>(
  queryKey: string,
  url: string,
  options: AxiosRequestConfig = {}
): QueryResult<TData> => {
  const fetchData = async (): Promise<TData> => {
    const response: AxiosResponse<TData> = await axios.get(url, options);
    return response.data;
  };

  const query = useQuery<TData>({ queryKey: [queryKey], queryFn: fetchData });

  useEffect(() => {
    if (!query.isStale) {
      query.refetch();
    }
  }, [query, query.isStale]);

  const { isLoading, isError, isFetching, data, error } = query;

  return {
    isLoading,
    isError,
    isFetching,
    data,
    error,
  };
};

export default useFetchQuery;
