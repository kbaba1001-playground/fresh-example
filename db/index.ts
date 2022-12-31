import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const pool = new Pool(
  {
    user: "postgres",
    database: "todo-development",
    hostname: "localhost",
    password: "password",
    port: 5432,
  },
  4,
  true,
);

export default async function runQuery<Type>(
  query: string,
  args = {},
) {
  const client = await pool.connect();
  let result;
  try {
    result = await client.queryObject<Type>({
      camelcase: true,
      text: query,
      args: args,
    });
  } finally {
    client.release();
  }
  return result;
}
