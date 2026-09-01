import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const mockListings = [
  { id: 1, name: "Playing Card Ceramic Plates Set", price: 20, image: "/images/product1-poker.jpg", description: "This handmade ceramic plate set is inspired by classic playing cards, blending artistry with functionality..." },
  { id: 2, name: "Whale Hanging", price: 20, image: "/images/product2-whale.jpg", description: "This handmade hanging mobile features a whimsical ceramic whale and shell details..." },
  { id: 3, name: "Ceramic Sardine Tin Set", price: 20, image: "/images/product3-sardine.jpg", description: "This handcrafted ceramic set transforms a classic sardine tin into a beautiful decorative object..." }
];

export default function ManageListings() {
  const [products, setProducts] = useState(mockListings);

  useEffect(() => {
    fetch("http://13.54.198.166:5001/seller/listings")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) setProducts(data);
      })
      .catch(() => setProducts(mockListings));
  }, []);

  return (
    <div className="page-shell">
      <NavBar />

      <div className="section-frame manage-listings">
        <h1 className="page-title" style={{ marginTop: 8 }}>My listing</h1>

        <div className="manage-list">
          {products.map((p) => (
            <div key={p.id} className="list-item">
              <div className="list-thumb">
                <img src={p.image} alt={p.name} />
              </div>

              <div className="list-copy">
                <h3>{p.name}</h3>
                <div className="price">${p.price}</div>
                <p>{p.description}</p>
              </div>

              <div className="list-actions">
                <Link to={`/edit/${p.id}`}>
                  <button className="action-btn green">Edit</button>
                </Link>
                <Link to={`/delete/${p.id}`}>
                  <button className="action-btn red">Delete</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
