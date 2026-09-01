import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function UploadProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    price: false,
    description: false,
    imageUrl: false
  });

  const validateField = (field) => String(form[field] ?? "").trim().length > 0;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    const valid = ["name", "price", "description", "imageUrl"].every(validateField);
    if (!valid) {
      setTouched({ name: true, price: true, description: true, imageUrl: true });
      return;
    }

    fetch("http://13.54.198.166:5001/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(errorText || "Upload failed");
        }
        return res.json();
      })
      .then(() => navigate("/upload-confirmation"))
      .catch((error) => {
        console.error("Upload failed:", error);
        alert("Upload failed. Please try again.");
      });
  }

  return (
    <div className="page-shell">
      <NavBar />

      <div className="section-frame upload-wrap">
        <h1 className="upload-title">Add Product</h1>

        <div className="upload-panel">
          <div className="upload-header">Enter product information <span className="required">*required form</span></div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="upload-grid">
              <div className="field-block">
                <label className="field-label">Product name<span className="required">*</span></label>
                <input
                  className={`field-input ${touched.name ? (validateField("name") ? "valid" : "invalid") : ""}`}
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="E.g Handmade Coffee Cup"
                />
              </div>

              <div className="field-block">
                <label className="field-label">Price<span className="required">*</span></label>
                <input
                  className={`field-input ${touched.price ? (validateField("price") ? "valid" : "invalid") : ""}`}
                  value={form.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                  placeholder="E.g 40"
                />
              </div>

              <div className="field-block full">
                <label className="field-label">Description<span className="required">*</span></label>
                <textarea
                  className={`field-textarea ${touched.description ? (validateField("description") ? "valid" : "invalid") : ""}`}
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="E.g Very nice cup"
                />
              </div>

              <div className="field-block full">
                <label className="field-label">Image Upload<span className="required">*</span></label>
                <input
                  className={`file-input ${touched.imageUrl ? (validateField("imageUrl") ? "valid" : "invalid") : ""}`}
                  value={form.imageUrl}
                  onChange={(e) => handleChange("imageUrl", e.target.value)}
                  placeholder="Image URL"
                />
              </div>
            </div>

            {Object.values(touched).some(Boolean) && !["name", "price", "description", "imageUrl"].every(validateField) && (
              <div className="form-alert">Error: Please fill the required form</div>
            )}

            <div className="upload-actions">
              <button type="submit" className="save-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
