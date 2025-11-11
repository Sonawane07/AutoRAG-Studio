import React from "react";
import Upload from "./pages/Upload";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">AutoRAG Studio</h1>
      <Upload />
      <hr className="my-8" />
      <Chat />
    </div>
  );
}
