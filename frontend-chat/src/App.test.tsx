import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Simple Chat title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Simple Chat/i);
  expect(titleElement).toBeInTheDocument();
});
