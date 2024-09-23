import { insertExpenseSchema } from "./db/schema/expenses";

export const createExpenseSchema = insertExpenseSchema.omit({
  id: true,
  userId: true,
  createdAt: true,
});
