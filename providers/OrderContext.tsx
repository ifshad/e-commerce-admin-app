"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchOrders } from "@/app/services/orderService";

interface OrderContextType {
  totalOrders: number;
  totalSales: number;
}

const OrderContext = createContext<OrderContextType>({
  totalOrders: 0,
  totalSales: 0,
});

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [orderData, setOrderData] = useState<OrderContextType>({
    totalOrders: 0,
    totalSales: 0,
  });

  useEffect(() => {
    const loadOrderData = async () => {
      try {
        const data = await fetchOrders();
        const orders = data.orders;
        const totalOrders = orders.length;
        const totalSales = orders.reduce(
          (sum: any, order: any) => sum + order.totalAmount,
          0
        );
        setOrderData({ totalOrders, totalSales });
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    loadOrderData();
  }, []);

  return (
    <OrderContext.Provider value={orderData}>{children}</OrderContext.Provider>
  );
};
