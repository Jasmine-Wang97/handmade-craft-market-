import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const defaultProduct = {
  id: 1,
  name: "Playing Card Ceramic Plates Set",
  price: 20,
  image: "/images/product1-poker.jpg"
};

export default function DeleteConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(defaultProduct);

  useEffect(() => {
    fetch("http://localhost:3000/seller/listings")
      .then((res) => res.json())
      .then((data) => {
        const result = data.find((p) => p.id === Number(id));
        if (result) setProduct(result);
      })
      .catch(() => setProduct(defaultProduct));
  }, [id]);

  function confirmDelete() {
    fetch(`http://localhost:3000/seller/listings/${id}`, {
      method: "DELETE"
    }).then(() => navigate("/manage-listings"));
  }

  return (
    <div className="page-shell">
      <NavBar />

      <div className="delete-modal-wrap">
        <div className="delete-modal">
          <div className="delete-modal-header">
            <h2>Delete Item</h2>
            <button className="close-btn" onClick={() => navigate("/manage-listings")}>×</button>
          </div>

          <div style={{ textAlign: "center", fontSize: "2.4rem", fontWeight: 700, marginBottom: 22 }}>Are you sure?</div>

          <div className="delete-body">
            <img src={product.image} alt={product.name} />
            <div>
              <div className="delete-title">{product.name}</div>
              <div className="delete-price">${product.price}</div>
            </div>
          </div>

          <div className="delete-actions">
            <button className="action-btn" onClick={() => navigate("/manage-listings")}>Cancel</button>
            <button className="action-btn red" onClick={confirmDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
