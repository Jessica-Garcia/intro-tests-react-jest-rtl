import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./App";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("App Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render App with hello message", () => {
    render(<App />);
    screen.getByText("Hello World");
  });

  it("should render change message o button click", () => {
    render(<App />);
    screen.getByText("React");
    const button = screen.getByText("Change message");
    fireEvent.click(button);
    screen.getByText("New message!");
    const oldMessage = screen.queryByText("React");
    expect(oldMessage).toBeNull();
  });
});
