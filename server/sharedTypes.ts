import { insertExpenseSchema } from "./db/schema/expenses";
import { z } from "zod";

export const createExpenseSchema = insertExpenseSchema.omit({
  id: true,
  userId: true,
  createdAt: true,
});

export type CreateExpense = z.infer<typeof createExpenseSchema>;
