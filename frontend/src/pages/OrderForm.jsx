import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function OrderForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    quantity: 1,
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, productId: id })
    })
      .then((res) => res.json())
      .then(() => navigate(`/order-confirmation`));
  }

  return (
    <form onSubmit={handleSubmit} className="p-10 space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        type="number"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Order
      </button>
    </form>
  );
}
