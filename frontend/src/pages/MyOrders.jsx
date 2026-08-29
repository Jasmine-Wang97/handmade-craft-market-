import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then(async (data) => {
        const enriched = await Promise.all(
          data.map(async (order) => {
            try {
              const response = await fetch(`http://localhost:3000/products/${order.productId}`);
              const product = await response.json();
              return { ...order, product };
            } catch {
              return { ...order, product: null };
            }
          })
        );
        setOrders(enriched.filter((item) => item.product));
      })
      .catch(() => setOrders([]));
  }, []);

  return (
    <div className="page-shell">
      <NavBar />
      <div className="section-frame">
        <h1 className="page-title">My Orders</h1>

        {orders.length === 0 ? (
          <div className="empty-order-state">No order yet.</div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-row">
                <div className="order-image-wrap">
                  <img src={order.product.image} alt={order.product.name} />
                </div>

                <div className="order-info">
                  <h2 className="order-title">{order.product.name}</h2>
                  <div className="order-price">${order.product.price}.00 AUD</div>
                  <p className="order-description">{order.product.description}</p>
                </div>

                <Link to={`/products/${order.productId}`} className="more-order-btn">
                  More Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
