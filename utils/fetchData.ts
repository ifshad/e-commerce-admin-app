// fetchData.js
import { fetchProducts } from "@/utils/mockData";

export const getProducts = () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    throw new Error("No JWT found");
  }
  // Normally, you'd send token in headers here
  return fetchProducts();
};
