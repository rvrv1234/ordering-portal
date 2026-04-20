import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    customerName: "",
    item: "",
    quantity: 1,
    status: "pending"
  });

  // Fetch all orders
  const fetchOrders = async () => {
    const res = await API.get("/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Create order
  const createOrder = async () => {
    await API.post("/orders", form);
    fetchOrders();
  };

  // Delete order
  const deleteOrder = async (id) => {
    await API.delete(`/orders/${id}`);
    fetchOrders();
  };

  // Update order status
  const updateOrder = async (id) => {
    await API.put(`/orders/${id}`, { status: "completed" });
    fetchOrders();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Orders</h2>

      <div style={{ marginBottom: 10 }}>
        <input
          placeholder="Customer Name"
          onChange={(e) =>
            setForm({ ...form, customerName: e.target.value })
          }
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <input
          placeholder="Item"
          onChange={(e) =>
            setForm({ ...form, item: e.target.value })
          }
        />
      </div>

      <button onClick={createOrder}>Add Order</button>

      <ul>
        {orders.map((o) => (
          <li key={o.id} style={{ marginTop: 10 }}>
            {o.customerName} - {o.item} ({o.status})

            <button
              style={{ marginLeft: 10 }}
              onClick={() => deleteOrder(o.id)}
            >
              Delete
            </button>

            <button
              style={{ marginLeft: 5 }}
              onClick={() => updateOrder(o.id)}
            >
              Mark Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;