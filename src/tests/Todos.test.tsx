import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todos } from "../components/Todos";

describe("Todos", () => {
  it("should show task page title", () => {
    // Renderizar o componente
    render(<Todos />);

    // Capturar do componente o elemento que possui o título
    const pageTitle = screen.getByText("Minhas Tarefas");

    // Verificar se o elemento existe no componente
    expect(pageTitle).toBeInTheDocument();
  });

  it("should show task input", () => {
    render(<Todos />);

    const taskInput = screen.getByPlaceholderText("Digite o nome da tarefa");

    expect(taskInput).toBeInTheDocument();
  });

  it("should show task input with blue border", () => {
    render(<Todos />);

    const taskInput = screen.getByPlaceholderText("Digite o nome da tarefa");

    expect(taskInput).toHaveStyle({ borderColor: "rgb(14 165 233)" });
  });

  it("should show add button", () => {
    render(<Todos />);

    screen.getByLabelText("Adicionar tarefa");
  });

  it("should add task on add button click", async () => {
    render(<Todos />);

    const taskInput = screen.getByPlaceholderText("Digite o nome da tarefa");

    const taskTitle = "Nova tarefa";

    await userEvent.type(taskInput, taskTitle);

    screen.getByDisplayValue(taskTitle);

    const addButton = screen.getByLabelText("Adicionar tarefa");

    await userEvent.click(addButton);

    screen.getByDisplayValue("");

    screen.getByText(taskTitle);
  });
});
