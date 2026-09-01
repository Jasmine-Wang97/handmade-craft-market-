import React from "react";
import NavBar from "../components/NavBar";

export default function EditConfirmation() {
  return (
    <div className="page-shell">
      <NavBar />
      <div className="success-page">
        <div className="success-box">
          <h1 style={{ fontSize: "clamp(2.6rem, 4vw, 5rem)" }}>Listing updated successfully!</h1>
          <p>Your changes have been saved.</p>
        </div>
      </div>
    </div>
  );
}
