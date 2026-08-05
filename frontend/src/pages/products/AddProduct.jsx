import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const AddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    pricePerUnit: "",
    unit: "",
    availableQuantity: "",
    originCountry: "",
    certifications: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    "Fruits",
    "Vegetables",
    "Grains",
    "Spices",
    "Dairy",
    "Meat",
    "Seafood",
    "Beverages",
    "Handicrafts",
    "Textiles",
    "Industrial Goods",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select a product image.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("pricePerUnit", formData.pricePerUnit);
      data.append("unit", formData.unit);
      data.append("availableQuantity", formData.availableQuantity);
      data.append("originCountry", formData.originCountry);

      // Convert comma-separated text to array
      const certs = formData.certifications
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      certs.forEach((cert) => {
        data.append("certifications", cert);
      });

      data.append("image", image);

      const response = await api.post("/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product Added Successfully!");

      console.log(response.data);

      navigate("/products");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Failed to add product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full border p-3 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            className="w-full border p-3 rounded"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            className="w-full border p-3 rounded"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>

            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <input
            type="number"
            name="pricePerUnit"
            placeholder="Price Per Unit"
            className="w-full border p-3 rounded"
            value={formData.pricePerUnit}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="unit"
            placeholder="Unit (kg, ton, box)"
            className="w-full border p-3 rounded"
            value={formData.unit}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="availableQuantity"
            placeholder="Available Quantity"
            className="w-full border p-3 rounded"
            value={formData.availableQuantity}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="originCountry"
            placeholder="Origin Country"
            className="w-full border p-3 rounded"
            value={formData.originCountry}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="certifications"
            placeholder="Organic, ISO, HACCP"
            className="w-full border p-3 rounded"
            value={formData.certifications}
            onChange={handleChange}
          />

          <input
            type="file"
            accept="image/*"
            className="w-full"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;