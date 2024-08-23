// mockData.js
export const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
];

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500); // Simulate network delay
  });
};
