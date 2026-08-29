import React from "react";
import NavBar from "../components/NavBar";

export default function OrderConfirmation() {
  return (
    <div className="page-shell">
      <NavBar />
      <div className="success-page">
        <div className="success-box">
          <h1>Congratulation</h1>
          <p>Order placed successfully!</p>
          <p style={{ marginTop: 18 }}>Please check your product in “My Orders”</p>
        </div>
      </div>
    </div>
  );
}
