import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/seller/listings")
      .then((res) => res.json())
      .then((data) => {
        const product = data.find((p) => p.id === Number(id));
        setForm(product);
      });
  }, [id]);

  if (!form) return <p>Loading...</p>;

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/seller/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => navigate("/manage-listings"));
  }

  return (
    <form onSubmit={handleSubmit} className="p-10 space-y-4">
      <input
        className="border p-2 w-full"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <textarea
        className="border p-2 w-full"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
}
