import TEST_VARIABLE from "@test/test";
import Axios, { AxiosPromise, AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: TEST_VARIABLE,
});

export const orvalAxiosInstance = <T>(
  config: AxiosRequestConfig
): AxiosPromise<T> => {
  const source = Axios.CancelToken.source();
  return AXIOS_INSTANCE({ ...config, cancelToken: source.token });
};
