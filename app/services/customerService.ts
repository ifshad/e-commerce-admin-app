import apiClient from "./apiClient";

export const fetchCustomers = async () => {
  const response = await apiClient.get("/customers.json");
  return response.data;
};
