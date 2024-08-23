import apiClient from "./apiClient";

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get("/products.json");
    console.log("Fetched Products:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] }; 
  }
};
