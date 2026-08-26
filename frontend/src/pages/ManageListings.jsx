import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageListings() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/seller/listings")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Manage Listings</h1>

      <div className="space-y-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-gray-600">${p.price}</p>
              <p className="text-gray-500">{p.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <Link to={`/edit/${p.id}`}>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
              </Link>

              <Link to={`/delete/${p.id}`}>
                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
