import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then(() => navigate("/upload-confirmation"));
  }

  return (
    <form onSubmit={handleSubmit} className="p-10 space-y-4">
      <input
        className="border p-2 w-full"
        placeholder="Product Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Image URL"
        value={form.imageUrl}
        onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Upload Product
      </button>
    </form>
  );
}
