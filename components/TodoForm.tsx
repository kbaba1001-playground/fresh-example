// import { signal } from "@preact/signals";

interface Props {
  defaultValues: {
    title: string;
    description: string;
  };
}

export default function TodoForm({ defaultValues }: Props) {
  return (
    <form method="POST">
      <div>
        <label for="title" class="block">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          class="px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) w-full"
          value={defaultValues.title}
        />
      </div>
      <div>
        <label for="description" class="block">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          class="px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) w-full"
          value={defaultValues.description}
        />
      </div>
      <button
        type="submit"
        class="px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200"
      >
        Submit
      </button>
    </form>
  );
}
