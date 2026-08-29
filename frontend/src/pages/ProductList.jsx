import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const mockProducts = [
  { id: 1, name: "Playing Card Ceramic ...", price: 20, image: "/images/product1-poker.jpg", description: "Beautiful handmade ceramic plate set inspired by classic playing cards." },
  { id: 2, name: "Poker card plate", price: 20, image: "/images/product2-whale.jpg", description: "This handmade hanging mobile features a whimsical ceramic whale." },
  { id: 3, name: "Ceramic Sardine Tin ...", price: 20, image: "/images/product3-sardine.jpg", description: "Handcrafted ceramic fish tin for home and gifting." }
];

export default function ProductList() {
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) setProducts(data);
      })
      .catch(() => setProducts(mockProducts));
  }, []);

  return (
    <div className="page-shell">
      <NavBar />

      <div className="section-frame">
        <h1 className="page-title" style={{ marginTop: 8 }}>Browse your idea handmade craft...</h1>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-box">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-card-content">
                <h2 className="product-card-title">{product.name}</h2>
                <div className="product-price">${product.price}</div>

                <div className="card-row">
                  <Link to={`/products/${product.id}`}>
                    <button className="more-btn">More Details</button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

