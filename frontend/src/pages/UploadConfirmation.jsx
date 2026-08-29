import React from "react";
import NavBar from "../components/NavBar";

export default function UploadConfirmation() {
  return (
    <div className="page-shell">
      <NavBar />
      <div className="success-page">
        <div className="success-box">
          <h1 style={{ fontSize: "clamp(2.6rem, 4vw, 5rem)" }}>Product uploaded successfully!</h1>
          <p>Please check your product in “My Listings”</p>
        </div>
      </div>
    </div>
  );
}
