import { Request, Response } from "express";
import * as orderService from "../services/order.service";

// Get all orders
export const getOrders = (_req: Request, res: Response) => {
  const orders = orderService.getOrders();
  res.json(orders);
};

// Create a new order
export const createOrder = (req: Request, res: Response) => {
  const order = orderService.createOrder(req.body);
  res.status(201).json(order);
};

// Update an existing order by ID
export const updateOrder = (req: Request, res: Response) => {
  try {
    
    const order = orderService.updateOrder(
      req.params.id as string,
      req.body
    );
    res.json(order);
  } catch (error) {
    // If order not found, return 404
    res.status(404).json({ message: "Order not found" });
  }
};

// Delete an order by ID
export const deleteOrder = (req: Request, res: Response) => {
  try {
    orderService.deleteOrder(req.params.id as string);
    res.json({ message: "Order deleted" });
  } catch (error) {
    // Handle case where order does not exist
    res.status(404).json({ message: "Order not found" });
  }
};