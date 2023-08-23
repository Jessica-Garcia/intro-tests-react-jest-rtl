import { Plus } from "lucide-react";
import { useState } from "react";
import { Todo } from "../@types/Todo";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

export const Todos = () => {
  const { register, handleSubmit, resetField } = useForm<{ title: string }>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTask = (data: { title: string }) => {
    setTodos((state) => [
      ...state,
      { id: uuid(), title: data.title, isCompleted: false },
    ]);
    resetField("title");
  };

  return (
    <div className="flex pt-10 space-y-10 flex-col items-center w-screen min-h-screen bg-gray-900">
      <h1 className="text-white text-5xl font-bold">Minhas Tarefas</h1>
      <div className="flex gap-3">
        <input
          {...register("title", { required: true })}
          className="rounded-md items-center border-2 border-sky-500 p-3 text-gray-50 bg-gray-700"
          type="text"
          placeholder="Digite o nome da tarefa"
        />
        <button
          type="submit"
          onClick={handleSubmit(handleAddTask)}
          aria-label="Adicionar tarefa"
          className="rounded-md border-2 border-sky-500 p-3 text-gray-50 bg-gray-700"
        >
          <Plus className="text-gray-200" size={24} />
        </button>
      </div>

      <div>
        {todos.map((todo) => (
          <p className="bg-white" key={todo.id}>
            {todo.title}
          </p>
        ))}
      </div>
    </div>
  );
};
