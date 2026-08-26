import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-10 grid grid-cols-3 gap-8">
      {products.map((p) => (
        <div key={p.id} className="border rounded-lg shadow p-4">
          <img src={p.image} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-3">{p.name}</h2>
          <p className="text-gray-600">${p.price}</p>
        </div>
      ))}
    </div>
  );
}
