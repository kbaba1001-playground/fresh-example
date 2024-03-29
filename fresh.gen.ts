// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/400.tsx";
import * as $1 from "./routes/_404.tsx";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/todos/[id].tsx";
import * as $4 from "./routes/todos/[id]/edit.tsx";
import * as $5 from "./routes/todos/new.tsx";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/400.tsx": $0,
    "./routes/_404.tsx": $1,
    "./routes/index.tsx": $2,
    "./routes/todos/[id].tsx": $3,
    "./routes/todos/[id]/edit.tsx": $4,
    "./routes/todos/new.tsx": $5,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
