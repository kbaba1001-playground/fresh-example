import { Handlers } from "$fresh/server.ts";
import { formDataToObject } from "form_data_to_object";
import { Todo } from "../../db/models/todo.ts";
import runQuery from "../../db/index.ts";
import TodoForm from "../../components/TodoForm.tsx";

export const handler: Handlers<Todo> = {
  async POST(req, _ctx) {
    const formData = await req.formData();
    const todo = formDataToObject<Todo>(formData);

    const results = await runQuery<Todo>(
      `
        insert into todos
          (title, description)
        values
          ($title, $description)
        returning id;
      `,
      todo,
    );
    const id = results.rows[0]?.id;

    return new Response("", {
      status: 301,
      headers: { Location: !id ? `/400` : `/todos/${id}` },
    });
  },
};

export default function TodosEditPage() {
  return (
    <div class="w-1/3 mx-auto mt-20">
      <h1 class="text-5xl">New Todo</h1>
      <TodoForm
        defaultValues={{ title: "", description: "" }}
      />
      <div class="mt-4">
        <a href="/" class="underline">Back to top</a>
      </div>
    </div>
  );
}
