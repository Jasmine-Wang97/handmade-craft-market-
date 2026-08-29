import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const defaultProduct = {
  id: 1,
  name: "Playing Card Ceramic Plates Set",
  price: 20,
  description: "This handmade ceramic plate set is inspired by classic playing cards, blending artistry with functionality. Each plate features a cream-colored base with red borders and patterns, creating a warm, vintage aesthetic. The set includes Ace of Hearts, Eight of Hearts, and King of Hearts designs — the King plate showcases a beautifully hand-painted illustration that highlights fine craftsmanship.",
  image: "/images/product1-poker.jpg"
};

export default function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(defaultProduct);

  useEffect(() => {
    fetch("http://localhost:3000/seller/listings")
      .then((res) => res.json())
      .then((data) => {
        const product = data.find((p) => p.id === Number(id));
        if (product) setForm(product);
      })
      .catch(() => setForm(defaultProduct));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/seller/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => navigate("/manage-listings"));
  }

  return (
    <div className="page-shell">
      <NavBar />

      <div className="section-frame">
        <h1 className="page-title" style={{ marginTop: 8 }}>Edit my listing</h1>

        <div className="edit-layout">
          <div className="edit-photo">
            <div className="edit-photo-box">
              <img src={form.image} alt={form.name} />
            </div>
            <button type="button" className="update-photo-btn">Update new image</button>
          </div>

          <form onSubmit={handleSubmit} className="edit-form">
            <input
              className="edit-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="edit-input"
              value={`AUD$ ${form.price}`}
              onChange={(e) => setForm({ ...form, price: e.target.value.replace("AUD$ ", "") })}
            />
            <textarea
              className="edit-textarea"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <button type="submit" className="save-btn" style={{ width: "100%" }}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
