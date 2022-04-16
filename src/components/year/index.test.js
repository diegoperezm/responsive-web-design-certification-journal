import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Year from "./";

describe("Component: Today", () => {
  const dataYear = [
    {
      monthName: "January",
      days: [
        {
          dayNumber: 17,
          totalTime: {
            "Tribute Page": {
              hours: 1,
              minutes: 0,
            },
            "Survey Form": {
              hours: 0,
              minutes: 0,
            },
            "Product Landing Page": {
              hours: 1,
              minutes: 0,
            },
            "Technical Documentation Page": {
              hours: 1,
              minutes: 0,
            },
            "Personal Portfolio Webpage": {
              hours: 1,
              minutes: 0,
            },
          },
        },
      ],
      totalTime: {
        "Tribute Page": {
          hours: 1,
          minutes: 0,
        },
        "Survey Form": {
          hours: 0,
          minutes: 0,
        },
        "Product Landing Page": {
          hours: 1,
          minutes: 0,
        },
        "Technical Documentation Page": {
          hours: 1,
          minutes: 0,
        },
        "Personal Portfolio Webpage": {
          hours: 1,
          minutes: 0,
        },
      },
    },
    {
      monthName: "February",
      days: [],
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
    {
      monthName: "March",
      days: [],
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
    {
      monthName: "April",
      days: [],
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
    {
      monthName: "May",
      days: [],
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
    {
      monthName: "June",
      days: [],
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
    {
      monthName: "July",
      days: [],
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
    {
      monthName: "August",
      days: [],
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
    {
      monthName: "September",
      days: [],
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
    {
      monthName: "October",
      days: [],
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
    {
      monthName: "November",
      days: [],
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
    {
      monthName: "December",
      days: [],
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
  ];

  test("renders Today component", () => {
    render(
      <MemoryRouter>
        <Year dataYear={dataYear} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "January" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "February" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "March" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "April" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "May" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "June" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "July" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "August" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "September" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "October" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "November" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "December" })
    ).toBeInTheDocument();

    expect(screen.getAllByText("M", { selector: "th" })).toHaveLength(12);

    expect(screen.getAllByText("T", { selector: "th" })).toHaveLength(24);

    expect(screen.getAllByText("W", { selector: "th" })).toHaveLength(12);

    expect(screen.getAllByText("F", { selector: "th" })).toHaveLength(12);

    expect(screen.getAllByText("S", { selector: "th" })).toHaveLength(24);

    // TODO: check if 405 is right
    expect(screen.getAllByText("", { selector: "td" })).toHaveLength(405);

    expect(screen.getByRole("link", { name: "17" })).toBeInTheDocument();
  });
});
