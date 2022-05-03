import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Day from "./";

// https://stackoverflow.com/questions/68248240/testing-uselocation-in-react-testing-library
describe("Component: Day", () => {
  let data = {
    day: {
      January: {
        17: {
          currentDayName: "Sunday",
          currentMonthName: "January",
          currentDayNumber: "17",
          comments: "Testing multiple days. Previous data.",
          start1: "1:00",
          start2: "3:00",
          start3: "5:00",
          start4: "7:00",
          end1: "2:00",
          end2: "4:00",
          end3: "6:00",
          end4: "8:00",
          project1: "Tribute Page",
          project2: "Product Landing Page",
          project3: "Technical Documentation Page",
          project4: "Personal Portfolio Webpage",
          totalHrs: {
            hours: 4,
            minutes: 0,
          },
        },
      },
    },
  };

  test("renders Day component: Sunday, January 17", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/day/January/17" }]}>
        <Day dataDay={data.day} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "Sunday, January 17" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3, name: "Comments:" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("row", { name: "Start End Project" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("row", { name: "1:00 2:00 Tribute Page" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("row", { name: "3:00 4:00 Product Landing Page" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("row", {
        name: "5:00 6:00 Technical Documentation Page",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("row", { name: "7:00 8:00 Personal Portfolio Webpage" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Start" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "End" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Project" })
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "1:00" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "2:00" })).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "Tribute Page" })
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "3:00" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "4:00" })).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "Product Landing Page" })
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "5:00" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "6:00" })).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "Technical Documentation Page" })
    ).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "7:00" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "8:00" })).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "Personal Portfolio Webpage" })
    ).toBeInTheDocument();

    expect(screen.getByText(/Total/)).toBeInTheDocument();
    expect(screen.getByText(/4 hours/)).toBeInTheDocument();
    expect(screen.getByText(/0 minutes/)).toBeInTheDocument();
    expect(
      screen.getByText("Testing multiple days. Previous data.")
    ).toBeInTheDocument();
  });
});
