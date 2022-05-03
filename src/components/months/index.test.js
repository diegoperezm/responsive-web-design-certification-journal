import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Month from "./";

// https://stackoverflow.com/questions/68248240/testing-uselocation-in-react-testing-library
describe("Component: Month", () => {
  let data = {
    monthName: "March",
    days: [
      {
        dayNumber: 2,
        totalTime: {
          "Tribute Page": {
            hours: 0,
            minutes: 0,
          },
          "Survey Form": {
            hours: 0,
            minutes: 0,
          },
          "Product Landing Page": {
            hours: 0,
            minutes: 0,
          },
          "Technical Documentation Page": {
            hours: 0,
            minutes: 0,
          },
          "Personal Portfolio Webpage": {
            hours: 0,
            minutes: 0,
          },
        },
      },
    ],
    totalTime: {
      "Tribute Page": {
        hours: 0,
        minutes: 0,
      },
      "Survey Form": {
        hours: 0,
        minutes: 0,
      },
      "Product Landing Page": {
        hours: 0,
        minutes: 0,
      },
      "Technical Documentation Page": {
        hours: 0,
        minutes: 0,
      },
      "Personal Portfolio Webpage": {
        hours: 0,
        minutes: 0,
      },
    },
  };

  test("renders Month component: March, Wednesday 2", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/March" }]}>
        <Month dataMonth={data} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "March" })
    ).toBeInTheDocument();

    expect(screen.getByRole("table", { name: "" })).toBeInTheDocument();

    expect(screen.getByRole("columnheader", { name: "M" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "W" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "F" })).toBeInTheDocument();
    expect(screen.getAllByText("T", { selector: "th" })).toHaveLength(2);
    expect(screen.getAllByText("S", { selector: "th" })).toHaveLength(2);

    expect(
      screen.getByRole("row", { name: "M T W T F S S" })
    ).toBeInTheDocument();
    expect(screen.getByRole("row", { name: "2" })).toBeInTheDocument();

    expect(screen.getByRole("cell", { name: "2" })).toBeInTheDocument();
    expect(screen.getAllByText("", { selector: "td" })).toHaveLength(33);

    expect(screen.getByRole("link", { name: "2" })).toBeInTheDocument();
  });
});
