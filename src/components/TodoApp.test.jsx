import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

test("renders input and button", () => {
  render(<TodoApp />);
  expect(screen.getByPlaceholderText(/Enter a task/i)).toBeInTheDocument();
  expect(screen.getByText(/Add/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoApp />);
  fireEvent.change(screen.getByPlaceholderText(/Enter a task/i), {
    target: { value: "Learn React" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
});

test("marks todo as completed", () => {
  render(<TodoApp />);
  fireEvent.change(screen.getByPlaceholderText(/Enter a task/i), {
    target: { value: "Learn Jest" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  const todo = screen.getByText(/Learn Jest/i);
  fireEvent.click(todo);
  expect(todo).toHaveClass("line-through");
});

test("deletes a todo", () => {
  render(<TodoApp />);
  fireEvent.change(screen.getByPlaceholderText(/Enter a task/i), {
    target: { value: "Learn Testing" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  fireEvent.click(screen.getByText(/Delete/i));
  expect(screen.queryByText(/Learn Testing/i)).not.toBeInTheDocument();
});
