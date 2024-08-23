import apiClient from "./apiClient";

export const fetchOrders = async () => {
  const response = await apiClient.get("/orders.json");
  return response.data;
};
