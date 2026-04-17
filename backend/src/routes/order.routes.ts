import { Router } from "express";
import * as orderController from "../controllers/order.controller";

const router = Router();

// Get all orders
router.get("/", orderController.getOrders);

// Create a new order
router.post("/", orderController.createOrder);

// Update order by ID
router.put("/:id", orderController.updateOrder);

// Delete order by ID
router.delete("/:id", orderController.deleteOrder);

export default router;