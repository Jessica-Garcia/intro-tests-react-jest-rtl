import { Plus, Trash2 } from "lucide-react";
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
  const handleDeleteTask = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col pt-10 space-y-10 items-center w-screen min-h-screen bg-gray-900">
      <h1 className="text-white text-5xl font-bold">Minhas Tarefas</h1>
      <div className="flex items-center flex-col justify-center p-6 bg-gray-800 rounded-md gap-3">
        <form
          onSubmit={handleSubmit(handleAddTask)}
          className="flex items-center gap-4"
          name="task-form"
        >
          <input
            {...register("title", { required: true })}
            className="rounded-md focus:outline-none items-center border-2 border-transparent p-3 text-gray-50 bg-gray-700"
            type="text"
            placeholder="Digite o nome da tarefa"
          />
          <button
            type="submit"
            aria-label="Adicionar tarefa"
            className="rounded-md border-2 border-transparent p-3 "
          >
            <Plus className=" text-green-400" size={24} />
          </button>
        </form>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-4 w-full justify-between"
          >
            <p className="rounded-md items-center border-2 border-sky-200 flex-1 p-3 text-gray-50 bg-gray-700">
              {todo.title}
            </p>

            <button
              onClick={() => handleDeleteTask(todo.id)}
              type="button"
              aria-label={`Deletar tarefa: ${todo.title}`}
              className="rounded-md border-2 border-transparent p-3 text-gray-50 bg-transparent"
            >
              <Trash2 size={24} className="text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
