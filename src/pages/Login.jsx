import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username) {
      alert("Username is required");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Left Section */}
      <div className="-1/2 flex flex-col justify-center items-center">
        
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Handmade Craft Market Logo"
          className="w-full h-full object-cover"
        />

        <h1 className="text-3xl font-bold mb-8">Handmade Craft Market</h1>

        {/* Welcome Text */}
        <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
        <p className="text-gray-600 mb-8">
          Login to explore more handmade products!
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <label className="block mb-2 font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-6 p-3 border border-gray-300 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-[#E8B931] text-white p-3 rounded-lg font-semibold hover:bg-[#d1a12c]"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-10 text-gray-500 text-sm">
          © 2026 Handmade Craft Market
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 flex justify-center items-center>
        <img
          src="/images/login.webp"
          alt="Handmade craft"
          className="w-[70%] object-contain rounded-xl mx-auto my-auto"
        />
      </div>
    </div>
  );
}
