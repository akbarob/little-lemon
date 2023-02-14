import { render } from "@testing-library/react";
import App from "./App";
import Main from "./components/Main";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Hero from "./components/Hero";

test("header", () => {
  render(<Hero />, { wrapper: BrowserRouter });
});

test("button text", () => {
  const component = render(<Hero />, { wrapper: BrowserRouter });
  const childElement = component.getByRole("button");

  expect(childElement).toBeInTheDocument();
});
