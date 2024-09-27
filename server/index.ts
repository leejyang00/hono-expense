import app from "./app";

Bun.serve({
  // port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  // hostname: "mydomain.com", // defaults to "0.0.0.0"
  // fetch(req) {
  //   return new Response("Hello from bun server");
  // },
  fetch: app.fetch,
});

console.log("Server is running on port 3000");

