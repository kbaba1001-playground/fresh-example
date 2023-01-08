import { Handlers, PageProps } from "$fresh/server.ts";
import { Todo } from "../../db/models/todo.ts";
import runQuery from "../../db/index.ts";

export const handler: Handlers<Todo> = {
  async GET(_req, ctx) {
    const { id } = ctx.params;

    const results = await runQuery<Todo>(
      "select * from todos where id = $id",
      { id: id },
    );

    if (!results.rows[0]) {
      return ctx.renderNotFound();
    }
    return ctx.render(results.rows[0]);
  },
};

export default function TodosShowPage({ data }: PageProps<Todo>) {
  return (
    <div>
      <h1 class="text-5xl">{data.title}</h1>
      <div>{data.description}</div>
      <div class="mt-4">
        <a href="/" class="underline">Back to top</a>
      </div>
    </div>
  );
}
