import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const API_URL = "http://13.54.198.166:5001";

const fallbackProduct = {
  id: 1,
  name: "Poker plate",
  price: 20,
  image: "/images/product1-poker.jpg",
  description: "Beautiful artwork."
};

export default function OrderForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(fallbackProduct);
  const [form, setForm] = useState({
    name: "",
    email: "",
    quantity: 1,
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    quantity: false,
  });

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setProduct(data);
      })
      .catch(() => setProduct(fallbackProduct));
  }, [id]);

  const price = Number(product.price) || 0;
  const total = Number(form.quantity || 0) * price;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const validateField = (field) => {
    if (field === "quantity") return Number(form.quantity) > 0;
    return String(form[field]).trim().length > 0;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const valid = ["name", "email", "quantity"].every(validateField);
    if (!valid) {
      setTouched({ name: true, email: true, quantity: true });
      return;
    }

    fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        productId: Number(id),
        productName: product.name,
        productPrice: price,
        productImage: product.image,
      })
    })
      .then((res) => res.json())
      .then(() => navigate("/order-confirmation"));
  }

  return (
    <div className="page-shell">
      <NavBar />

      <div className="section-frame">
        <div className="order-layout">
          <div className="order-side-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="order-form-box">
            <h2>{product.name}</h2>
            <div className="detail-price">${product.price}.00 AUD</div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-wrap">
                <div>
                  <label className="form-label">Name*</label>
                  <input
                    className={`form-field ${touched.name ? (validateField("name") ? "valid" : "invalid") : ""}`}
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="E.g Jasmine"
                  />
                  {touched.name && !validateField("name") && <div className="form-error">Please inform your name</div>}
                </div>

                <div>
                  <label className="form-label">Email*</label>
                  <input
                    className={`form-field ${touched.email ? (validateField("email") ? "valid" : "invalid") : ""}`}
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="E.g xxx@gmail.com"
                  />
                  {touched.email && !validateField("email") && <div className="form-error">Please inform your email</div>}
                </div>

                <div>
                  <label className="form-label">Quantity*</label>
                  <input
                    type="number"
                    min="1"
                    className={`form-field ${touched.quantity ? (validateField("quantity") ? "valid" : "invalid") : ""}`}
                    value={form.quantity}
                    onChange={(e) => handleChange("quantity", Number(e.target.value) || 0)}
                    placeholder="E.g 1"
                  />
                  {touched.quantity && !validateField("quantity") && <div className="form-error">Please inform your quantity</div>}
                </div>
              </div>

              <div className="total-row">Total AUD$ {total.toFixed(2)}</div>

              <button type="submit" className="submit-btn">Submit Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
