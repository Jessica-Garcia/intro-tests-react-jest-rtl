import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("should render with red background ir disabled", () => {
    render(
      <Button onClick={() => {}} disabled>
        Click me
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveStyle({ backgroundColor: "red" });
  });

  it("should call onClick prop on click", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>,
    );
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
