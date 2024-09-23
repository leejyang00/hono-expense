# hono

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.28. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


To add new component from shadcn/ui:

```bash
 bunx --bun shadcn@latest add avatar
```

To migrate the new database schema:

```bash
bunx drizzle-kit generate
bun migrate.ts  # in root folder
```

To view the database in browser:

```bash
bunx drizzle-kit studio
```

To deploy to fly.io:

```bash
fly auth login
fly deploy
```

To add secrets to fly.io:

```bash
fly secrets set DATABASE_URL="..."
```
