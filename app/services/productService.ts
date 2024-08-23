import apiClient from "./apiClient";

export const fetchProducts = async () => {
  const response = await apiClient.get("/products.json");
  return response.data;
};
