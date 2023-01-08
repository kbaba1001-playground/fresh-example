import { Handlers, PageProps } from "$fresh/server.ts";
import { ForEach } from "react-control-flow-components";
import { Todo } from "../db/models/todo.ts";
import runQuery from "../db/index.ts";

export const handler: Handlers<Todo[]> = {
  async GET(_req, ctx) {
    const results = await runQuery<Todo>(
      "select * from todos order by created_at desc",
    );
    return ctx.render(results.rows);
  },
};

export default function Home({ data }: PageProps<Todo[]>) {
  if (data.length == 0) {
    return <h1>Todo not found</h1>;
  }

  return (
    <div>
      <h1 class="text-5xl">Todo List</h1>
      <ul class="list-disc list-inside">
        <ForEach
          items={data}
          component={(todo: Todo, index: number) => (
            <li key={index}>
              <h2 class="text-3xl inline-block underline">
                <a href={`/todos/${todo.id}`}>{todo.title}</a>
              </h2>
              <div>{todo.description}</div>
              <a href={`/todos/${todo.id}/edit`} class="underline">edit</a>
            </li>
          )}
          as="todo"
          spread={true}
        />
      </ul>
    </div>
  );
}
