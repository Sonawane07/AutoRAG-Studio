# Data Flow: Document Upload + Query

1. User uploads a document from Upload.jsx.
2. Backend receives it at /upload and stores the file (to be embedded later).
3. When a query is made from Chat.jsx:
   - Frontend calls /query/{agent_id}
   - Backend retrieves relevant embeddings (to be implemented)
   - Returns an LLM-generated response
4. Response is shown to the user.

Future Steps:
- Integrate embeddings (OpenAI or local model)
- Use vector database (Chroma or Pinecone)
- Link each document to an agent_id
