import React from 'react'
import { screen, render } from "@testing-library/react";
// const { screen, render } = require("@testing-library/react");
import "@testing-library/jest-dom";
// require("@testing-library/jest-dom");
import App from "./app";
// const App = require("./app");

test("should calculate result by input number", () => {
  //----------given----------
  render(<App />);
  //----------when----------
  const result = screen.getByTestId("title").textContent;
  //----------then----------
  expect(result).toBe("hello world");

  // expect(1 + 1).toBe(2);
});
