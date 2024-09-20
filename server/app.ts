import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoute } from "./routes/expenses";
const app = new Hono();

app.use(logger());

app.get("/test", (c) => c.json({ message: "hello world" }));

app.route("/api/expenses", expensesRoute);

export default app; // for Cloudflare Workers or Bun
