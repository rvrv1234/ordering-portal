import express from "express";
import cors from "cors";
import orderRoutes from "./routes/order.routes";

const app = express();

// Enable CORS for frontend communication
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Mount order routes under /orders
app.use("/orders", orderRoutes);

export default app;