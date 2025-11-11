// frontend/src/pages/Upload.jsx
import React, { useState } from "react";
import { api } from "../api/apiClient";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please choose a file first.");
    const formData = new FormData();
    formData.append("file", file);
    const res = await api.post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert(`Uploaded: ${res.data.filename}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Upload Document</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="ml-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}
