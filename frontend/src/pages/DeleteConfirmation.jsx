import { useParams, useNavigate } from "react-router-dom";

export default function DeleteConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();

  function confirmDelete() {
    fetch(`http://localhost:3000/seller/listings/${id}`, {
      method: "DELETE"
    }).then(() => navigate("/manage-listings"));
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Delete Product?</h1>
      <p className="mb-6 text-gray-600">
        Are you sure you want to delete this product?
      </p>

      <button
        className="bg-red-600 text-white px-4 py-2 rounded mr-4"
        onClick={confirmDelete}
      >
        Yes, Delete
      </button>

      <button
        className="bg-gray-400 text-white px-4 py-2 rounded"
        onClick={() => navigate("/manage-listings")}
      >
        Cancel
      </button>
    </div>
  );
}
