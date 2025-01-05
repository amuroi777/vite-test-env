import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";
import userEvent from "@testing-library/user-event";

test("textInput", async () => {
  const user = userEvent.setup();
  render(<TextInput />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();

  await user.type(inputElement, "Hello world");
  expect(screen.getByText("Hello world")).toBeInTheDocument();
});
