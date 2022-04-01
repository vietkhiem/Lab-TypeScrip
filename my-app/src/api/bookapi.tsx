import axios from "./axios";

export const getBooks = () => {
  return axios.get("/products");
};

export const getBook = (id: number | string) => {
  return axios.get(`/products/${id}`);
};
