import {
  getInitialData,
  getMonthNumberFromName,
  getDaysInMonth,
  getMonthData,
  getOffsetMonth,
} from "../helpers/";
import { data as rwdc2021 } from "../data/";

describe("getInitialData()", () => {
  const currentMonthNumber = getMonthNumberFromName("February");
  let data = getInitialData(rwdc2021, currentMonthNumber);

  it("test data should have the day: January 17", () => {
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

  it("January should return an array containing the  number 17", () => {
    expect(getMonthData("January", data.year[0].days)).toEqual(
      expect.arrayContaining([17])
    );
  });
});

describe("getMonthNumberFromName", () => {
  it("January   should return 0 ", () => {
    expect(getMonthNumberFromName("January")).toBe(0);
  });

  it("February  should return 1 ", () => {
    expect(getMonthNumberFromName("February")).toBe(1);
  });
  it("March     should return 2 ", () => {
    expect(getMonthNumberFromName("March")).toBe(2);
  });

  it("April     should return 3 ", () => {
    expect(getMonthNumberFromName("April")).toBe(3);
  });
  it("May       should return 4 ", () => {
    expect(getMonthNumberFromName("May")).toBe(4);
  });
  it("June      should return 5 ", () => {
    expect(getMonthNumberFromName("June")).toBe(5);
  });
  it("July      should return 6 ", () => {
    expect(getMonthNumberFromName("July")).toBe(6);
  });
  it("August    should return 7 ", () => {
    expect(getMonthNumberFromName("August")).toBe(7);
  });
  it("September should return 8 ", () => {
    expect(getMonthNumberFromName("September")).toBe(8);
  });
  it("October   should return 9 ", () => {
    expect(getMonthNumberFromName("October")).toBe(9);
  });
  it("November  should return 10 ", () => {
    expect(getMonthNumberFromName("November")).toBe(10);
  });
  it("December  should return 11 ", () => {
    expect(getMonthNumberFromName("December")).toBe(11);
  });
});

describe("getDaysInMonth", () => {
  const January = getDaysInMonth("2022", 0);
  const February = getDaysInMonth("2022", 1);
  const March = getDaysInMonth("2022", 2);
  const April = getDaysInMonth("2022", 3);
  const May = getDaysInMonth("2022", 4);
  const June = getDaysInMonth("2022", 5);
  const July = getDaysInMonth("2022", 6);
  const August = getDaysInMonth("2022", 7);
  const September = getDaysInMonth("2022", 8);
  const October = getDaysInMonth("2022", 9);
  const November = getDaysInMonth("2022", 10);
  const December = getDaysInMonth("2022", 11);

  it("January  , 2022: should have 31 days", () => {
    expect(January).toBe(31);
  });
  it("February , 2022: should have 28 days", () => {
    expect(February).toBe(28);
  });
  it("March    , 2022: should have 31 days", () => {
    expect(March).toBe(31);
  });
  it("April    , 2022: should have 30 days", () => {
    expect(April).toBe(30);
  });
  it("May      , 2022: should have 31 days", () => {
    expect(May).toBe(31);
  });
  it("June     , 2022: should have 30 days", () => {
    expect(June).toBe(30);
  });
  it("July     , 2022: should have 31 days", () => {
    expect(July).toBe(31);
  });
  it("August   , 2022: should have 31 days", () => {
    expect(August).toBe(31);
  });
  it("September, 2022: should have 30 days", () => {
    expect(September).toBe(30);
  });
  it("October  , 2022: should have 31 days", () => {
    expect(October).toBe(31);
  });
  it("November , 2022: should have 30 days", () => {
    expect(November).toBe(30);
  });
  it("December , 2022: should have 31 days", () => {
    expect(December).toBe(31);
  });
});

describe("getOffsetMonth", () => {
  it("January   , 2022 should return an offset of 6", () => {
    expect(getOffsetMonth("2022", 0)).toBe(6);
  });
  it("February  , 2022 should return an offset of 2", () => {
    expect(getOffsetMonth("2022", 1)).toBe(2);
  });
  it("March     , 2022 should return an offset of 2", () => {
    expect(getOffsetMonth("2022", 2)).toBe(2);
  });
  it("April     , 2022 should return an offset of 5", () => {
    expect(getOffsetMonth("2022", 3)).toBe(5);
  });
  it("May       , 2022 should return an offset of 0", () => {
    expect(getOffsetMonth("2022", 4)).toBe(0);
  });
  it("June      , 2022 should return an offset of 3", () => {
    expect(getOffsetMonth("2022", 5)).toBe(3);
  });
  it("July      , 2022 should return an offset of 5", () => {
    expect(getOffsetMonth("2022", 6)).toBe(5);
  });
  it("August    , 2022 should return an offset of 1", () => {
    expect(getOffsetMonth("2022", 7)).toBe(1);
  });
  it("September , 2022 should return an offset of 4", () => {
    expect(getOffsetMonth("2022", 8)).toBe(4);
  });
  it("Octuber   , 2022 should return an offset of 6", () => {
    expect(getOffsetMonth("2022", 9)).toBe(6);
  });
  it("November  , 2022 should return an offset of 2", () => {
    expect(getOffsetMonth("2022", 10)).toBe(2);
  });
  it("December  , 2022 should return an offset of 4", () => {
    expect(getOffsetMonth("2022", 11)).toBe(4);
  });
});

describe("getMonthData", () => {
  const currentMonthNumber = getMonthNumberFromName("February");
  const data = getInitialData(rwdc2021, currentMonthNumber);

  it("January should return an array with the length of 37: 31 days plus 6 offset  ", () => {
    expect(getMonthData("January", data.year[0].days).length).toEqual(37);
  });

  it("February should return an array with the length of 30: 28 days plus 2 offset  ", () => {
    expect(getMonthData("February", data.year[0].days).length).toEqual(30);
  });

  it("March should return an array with the length of 33: 31 days plus 2 offset  ", () => {
    expect(getMonthData("March", data.year[0].days).length).toEqual(33);
  });

  it("April should return an array with the length of 35: 30 days plus 6 offset  ", () => {
    expect(getMonthData("April", data.year[0].days).length).toEqual(35);
  });

  it("May should return an array with the length of 31: 31 days plus 0 offset  ", () => {
    expect(getMonthData("May", data.year[0].days).length).toEqual(31);
  });

  it("June should return an array with the length of 33: 30 days plus 3 offset  ", () => {
    expect(getMonthData("June", data.year[0].days).length).toEqual(33);
  });

  it("July should return an array with the length of 36: 31 days plus 5 offset  ", () => {
    expect(getMonthData("July", data.year[0].days).length).toEqual(36);
  });

  it("August should return an array with the length of 32: 31 days plus 1 offset  ", () => {
    expect(getMonthData("August", data.year[0].days).length).toEqual(32);
  });

  it("September should return an array with the length of 34: 30 days plus 4 offset  ", () => {
    expect(getMonthData("September", data.year[0].days).length).toEqual(34);
  });

  it("October should return an array with the length of 37: 31 days plus 6 offset  ", () => {
    expect(getMonthData("October", data.year[0].days).length).toEqual(37);
  });

  it("November should return an array with the length of 32: 30 days plus 2 offset  ", () => {
    expect(getMonthData("November", data.year[0].days).length).toEqual(32);
  });

  it("December should return an array with the length of 35: 31 days plus 4 offset  ", () => {
    expect(getMonthData("December", data.year[0].days).length).toEqual(35);
  });
});
