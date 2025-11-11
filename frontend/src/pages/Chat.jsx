import React, { useState } from "react";
import { api } from "../api/apiClient";

export default function Chat() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    const formData = new FormData();
    formData.append("query", query);

    try {
      const res = await api.post(`/query/test-agent`, formData);
      setResponse(res.data.response);
    } catch (err) {
      alert("Query failed. Check console.");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Chat with Agent</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask something..."
        className="border px-4 py-2 rounded w-2/3"
      />
      <button
        onClick={handleQuery}
        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
      {response && <p className="mt-4 text-gray-700">💬 {response}</p>}
    </div>
  );
}
