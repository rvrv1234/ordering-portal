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

  return (
    <div style={{ padding: 20 }}>
      <h2>Orders</h2>

      <input
        placeholder="Customer Name"
        onChange={(e) =>
          setForm({ ...form, customerName: e.target.value })
        }
      />

      <input
        placeholder="Item"
        onChange={(e) =>
          setForm({ ...form, item: e.target.value })
        }
      />

      <button onClick={createOrder}>Add Order</button>

      <ul>
        {orders.map((o) => (
          <li key={o.id}>
            {o.customerName} - {o.item}
            <button onClick={() => deleteOrder(o.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;