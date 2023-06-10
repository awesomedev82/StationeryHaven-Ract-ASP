import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../../router/router";

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 500:
        router.navigate("/server-error", {state: {error: data}})
        break;
      default:
        break;
    }
  }
);

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Product = {
  list: () => request.get("products"),
  details: (id: string) => request.get(`products/${id}`),
};

export const TestErrors = {
  get400: () => request.get("buggy/bad-request"),
  get404: () => request.get("buggy/not-found"),
  get401: () => request.get("buggy/unauthorised"),
  getValidationError: () => request.get("buggy/validation-error"),
  get500: () => request.get("buggy/server-error"),
};

const agent = {
  Product,
  TestErrors,
};

export default agent;
