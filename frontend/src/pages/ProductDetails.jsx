import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const mockProduct = {
  id: 1,
  name: "Playing Card Ceramic Plates Set",
  price: 20,
  image: "/images/product1-poker.jpg",
  description: "This handmade ceramic plate set is inspired by classic playing cards, blending artistry with functionality. Each plate features a cream-colored base with red borders and patterns, creating a warm, vintage aesthetic.",
  longDescription: "This handmade ceramic plate set is inspired by classic playing cards, blending artistry with functionality. Each plate features a cream-colored base with red borders and patterns, creating a warm, vintage aesthetic. The set includes Ace of Hearts, Eight of Hearts, and King of Hearts designs — the King plate showcases a beautifully hand-painted illustration that highlights fine craftsmanship. Perfect for serving desserts, decorating your space, or gifting to someone who appreciates unique handmade pieces."
};

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(mockProduct);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setProduct(data);
      })
      .catch(() => setProduct(mockProduct));
  }, [id]);

  return (
    <div className="page-shell">
      <NavBar />

      <div className="section-frame">
        <div className="detail-layout">
          <div className="detail-image-card">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="detail-content">
            <h1 className="detail-name">{product.name}</h1>
            <div className="detail-price">${product.price}.00 AUD</div>
            <p className="detail-description">{product.longDescription || product.description}</p>

            <Link to={`/order/${product.id}`}>
              <button className="buy-btn">Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
