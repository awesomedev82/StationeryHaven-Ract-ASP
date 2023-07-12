import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/router";

// Function to simulate a delay
const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

// Configure axios defaults
axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true;

// Helper function to extract the response data
const responseBody = (response: AxiosResponse) => response.data;

// Intercept the response to add a delay before returning it
axios.interceptors.response.use(
  async (response) => {
    await sleep();
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
        router.navigate("/server-error", { state: { error: data } });
        break;
      default:
        break;
    }
  }
);

// Define the request object with HTTP methods
const request = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

// Define API endpoints related to the "Product" resource
const Product = {
  list: (params: URLSearchParams) => request.get("products", params),
  details: (id: number) => request.get(`products/${id}`),
  fetchFilters: () => request.get("products/filters"),
};

// Define API endpoints related to the "Buggy" resource
export const TestErrors = {
  get400: () => request.get("buggy/bad-request"),
  get404: () => request.get("buggy/not-found"),
  get401: () => request.get("buggy/unauthorised"),
  getValidationError: () => request.get("buggy/validation-error"),
  get500: () => request.get("buggy/server-error"),
};

// Define API endpoints related to the "Basket" resource
const Basket = {
  get: () => request.get("basket"),
  addItem: (productId: number, quantity = 1) =>
    request.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
  removeItem: (productId: number, quantity = 1) =>
    request.delete(`basket?productId=${productId}&quantity=${quantity}`),
};

const agent = {
  Product,
  TestErrors,
  Basket,
};

export default agent;
