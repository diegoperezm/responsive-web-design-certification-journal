import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./";

describe("Component: Header", () => {
  test("render component header", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation", { name: "" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Journal" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "TODAY" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "MONTH" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "YEAR" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GRAPH" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Toggle navigation" })
    ).toBeInTheDocument();
  });
});
