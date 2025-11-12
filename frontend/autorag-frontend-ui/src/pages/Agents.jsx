import React, { useEffect, useState } from "react";
import { api } from "../api/apiClient";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAgents = async () => {
    try {
      const res = await api.get("/agents");
      setAgents(res.data.agents || []);
    } catch (e) {
      console.error(e);
      alert("Failed to load agents");
    }
  };

  const createAgent = async () => {
    if (!name.trim()) {
      alert("Please enter an agent name");
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/create_agent", {
        name,
        description: desc || null,
      });
      setName("");
      setDesc("");
      await fetchAgents();
      alert(`Created: ${res.data.agent.name}`);
    } catch (e) {
      console.error(e);
      alert("Failed to create agent");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div className="p-6 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Your Agents</h2>

      <div className="rounded-lg border p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">Create a new Agent</h3>
        <input
          className="border rounded px-3 py-2 w-full mb-2"
          placeholder="Agent name (e.g., HR Knowledge Bot)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="border rounded px-3 py-2 w-full mb-2"
          placeholder="Description (optional)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={createAgent}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Creating..." : "+ Create Agent"}
        </button>
      </div>

      <ul className="space-y-3">
        {agents.map((a) => (
          <li key={a.id} className="border rounded p-4">
            <div className="font-semibold">{a.name}</div>
            {a.description && <div className="text-sm opacity-80">{a.description}</div>}
            <div className="text-xs mt-1">
              <span className="opacity-70">Agent ID:</span> {a.id} &nbsp;|&nbsp;
              <span className="opacity-70">Vector Index:</span> {a.vector_index_id}
            </div>
          </li>
        ))}
        {agents.length === 0 && <div className="opacity-60">No agents yet.</div>}
      </ul>
    </div>
  );
}
