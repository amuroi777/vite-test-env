import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";
import userEvent from "@testing-library/user-event";

test("textInput", async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

test("TextInput Event Test", async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const inputElement = screen.getByRole("textbox");
  await user.type(inputElement, "Hello World");
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
