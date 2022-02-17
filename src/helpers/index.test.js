import { getInitialData, getMonthNumberFromName } from "../helpers/";
import { data as rwdc2021 } from "../data/";

const currentMonthNumber = getMonthNumberFromName("February");

describe("getInitialData()", () => {
  let data = getInitialData(rwdc2021, currentMonthNumber);

  it("test data should have a day: January 17", () => {
    expect(data.day).toEqual(
      expect.objectContaining({
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
      })
    );
  });
});
