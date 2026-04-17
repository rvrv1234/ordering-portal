import { Order } from "../types/order.types";
import { v4 as uuidv4 } from "uuid";

let orders: Order[] = [];

export const getOrders = (): Order[] => {
  return orders;
};

export const createOrder = (data: Omit<Order, "id">): Order => {
  const newOrder: Order = {
    id: uuidv4(),
    ...data,
  };
  orders.push(newOrder);
  return newOrder;
};

export const updateOrder = (id: string, data: Partial<Order>): Order => {
  const order = orders.find(o => o.id === id);

  if (!order) {
    throw new Error("Order not found");
  }

  Object.assign(order, data);
  return order;
};

export const deleteOrder = (id: string): void => {
  const index = orders.findIndex(o => o.id === id);

  if (index === -1) {
    throw new Error("Order not found");
  }

  orders.splice(index, 1);
};