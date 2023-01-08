import { Handlers, PageProps } from "$fresh/server.ts";
import { Todo } from "../../../db/models/todo.ts";
import { formDataToObject } from "form_data_to_object";
import runQuery from "../../../db/index.ts";
import TodoForm from "../../../components/TodoForm.tsx";

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
  async POST(req, ctx) {
    const { id } = ctx.params;
    const formData = await req.formData();
    const todo = formDataToObject<Todo>(formData);

    const results = await runQuery<Todo>(
      `
        update todos
        set title = $title, description = $description
        where id = $id
        returning id;
      `,
      {
        ...todo,
        id: id,
      },
    );

    return new Response("", {
      status: 301,
      headers: { Location: !results.rows[0] ? `/400` : `/todos/${id}` },
    });
  },
};

export default function TodosEditPage({ data }: PageProps<Todo>) {
  return (
    <div class="w-1/3 mx-auto mt-20">
      <h1 class="text-5xl">Edit Todo</h1>
      <TodoForm
        defaultValues={{ title: data.title, description: data.description }}
      />
      <div class="mt-4">
        <a href="/" class="underline">Back to top</a>
      </div>
    </div>
  );
}
