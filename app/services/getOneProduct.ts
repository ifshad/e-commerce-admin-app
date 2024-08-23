import { Product } from "../(admin-panel)/products/page";
import { fetchProducts } from "./productService";

export default async function getOneProduct(
  id: number
): Promise<Product | null> {
  try {
    const data = await fetchProducts();

    const product = data.products.find((product: Product) => product.id === id);

    if (!product) {
      return null; 
    }

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; 
  }
}

export const revalidate = 1;
