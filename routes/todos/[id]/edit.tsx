import { Handlers, PageProps } from "$fresh/server.ts";
import { Todo } from "../../../db/models/todo.ts";
import runQuery from "../../../db/index.ts";
import TodoForm from "../../../islands/TodoForm.tsx";

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

export default function TodosEditPage({ data }: PageProps<Todo>) {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <TodoForm
        onSubmit={onSubmit}
        defaultValues={{ title: data.title, description: data.description }}
      />

      <div class="mt-4">
        <a href="/" class="underline">Back to top</a>
      </div>
    </div>
  );
}
