import apiClient from "./apiClient";

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get("/products.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] }; // Return an empty array if there is an error
  }
};
