import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 flex gap-10">
      <img
        src={product.image}
        className="w-96 h-96 object-cover rounded shadow"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-gray-700 mb-2">${product.price}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <p className="mb-2">
          <strong>Materials:</strong> {product.materials}
        </p>
        <p className="mb-2">
          <strong>Size:</strong> {product.size}
        </p>
        <p className="mb-2">
          <strong>Seller:</strong> {product.seller}
        </p>
        <p className="mb-2">
          <strong>Stock:</strong> {product.stock}
        </p>

        <p className="mt-6 text-gray-700">{product.longDescription}</p>
      </div>
    </div>
  );
}
