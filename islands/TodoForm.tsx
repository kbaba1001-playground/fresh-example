import { signal } from "@preact/signals";

interface Props {
  onSubmit: (data: object) => void;
  defaultValues: {
    title: string;
    description: string;
  };
}

export default function TodoForm({ onSubmit, defaultValues }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <label for="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        defaultValue={defaultValues.title}
      />
      <label for="description">Description:</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        cols="50"
        defaultValue={defaultValues.description}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
