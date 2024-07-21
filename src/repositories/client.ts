import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const microcmsClient = createClient({
  serviceDomain: "minojiro",
  apiKey: String(process.env.X_API_KEY),
});
