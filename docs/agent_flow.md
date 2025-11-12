# Agent Creation Flow (MVP)

1. User opens the **Agents** page and submits a name/description.
2. Frontend calls **POST /api/create_agent**.
3. Backend:
   - Validates name.
   - Generates agent_id and api_key.
   - Creates placeholder vector_index_id.
   - Stores the agent in memory.
   - Returns the full Agent object.
4. Frontend calls **GET /api/agents** and re-renders the list.

**Future upgrades**
- Replace in-memory store → PostgreSQL
- Replace vector_index_id → OCI AI Vector Search index
- DEMO_USER_ID → real JWT user_id
