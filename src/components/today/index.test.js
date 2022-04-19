import React from "react";
import { screen, render } from "@testing-library/react";
import Today from "./";

describe("Component: Today", () => {
  const dataToday = {
    currentDayName: "",
    currentMonthName: "",
    currentDayNumber: "",
    comments: "",
    start1: "",
    start2: "",
    start3: "",
    start4: "",
    end1: "",
    end2: "",
    end3: "",
    end4: "",
    project1: "",
    project2: "",
    project3: "",
    project4: "",
    totalHrs: {
      hours: 0,
      minutes: 0,
    },
  };

  const handleChange = () => {};

  test("renders Today component", () => {
    render(<Today dataToday={dataToday} handleChange={handleChange} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "," })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3, name: "Comments:" })
    ).toBeInTheDocument();

    expect(screen.getByRole("table", { name: "" })).toBeInTheDocument();

    expect(
      screen.getByRole("row", { name: "Project Start End" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: "Project" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: "Start" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: "End" })
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Choose ...", { selector: "option", exact: false })
    ).toHaveLength(4);

    expect(
      screen.getAllByText("Tribute Page", { selector: "option" })
    ).toHaveLength(4);

    expect(
      screen.getAllByText("Survey Form", { selector: "option" })
    ).toHaveLength(4);

    expect(
      screen.getAllByText("Product Landing Page", { selector: "option" })
    ).toHaveLength(4);

    expect(
      screen.getAllByText("Technical Documentation Page", {
        selector: "option",
      })
    ).toHaveLength(4);

    expect(
      screen.getAllByText("Personal Portfolio Webpage", { selector: "option" })
    ).toHaveLength(4);
  });
});
