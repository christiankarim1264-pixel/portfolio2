// import { createAuthClient } from '@neondatabase/neon-js/auth';

// export const authClient = createAuthClient(import.meta.env.VITE_NEON_AUTH_URL);

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});
