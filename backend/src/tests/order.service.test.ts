/// <reference types="jest" />

import {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder
} from "../services/order.service";

describe("Order Service", () => {

  // Test order creation
  it("should create a new order", () => {
    const order = createOrder({
      customerName: "Ravi",
      item: "Phone",
      quantity: 1,
      status: "pending"
    });

    expect(order.id).toBeDefined();
    expect(order.customerName).toBe("Ravi");
  });

  // Test updating an order
  it("should update an existing order", () => {
    const order = createOrder({
      customerName: "John",
      item: "Book",
      quantity: 2,
      status: "pending"
    });

    const updated = updateOrder(order.id, { status: "completed" });

    expect(updated.status).toBe("completed");
  });

  // Test deleting an order
  it("should delete an order", () => {
    const order = createOrder({
      customerName: "Alex",
      item: "Laptop",
      quantity: 1,
      status: "pending"
    });

    deleteOrder(order.id);

    const orders = getOrders();
    expect(orders.find(o => o.id === order.id)).toBeUndefined();
  });

});