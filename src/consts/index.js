const date = new Date();

const currentMonthNumber = date.getMonth();
const currentMonthName = `${date.toLocaleString("en-US", { month: "long" })}`;

const currentDayName = `${date.toLocaleString("en-US", { weekday: "long" })}`;
const currentDayNumber = `${date.toLocaleString("en-US", { day: "numeric" })}`;

const currentYearNumber = `${date.toLocaleString("en-US", {
  year: "numeric",
})}`;

const tributePageColor = "rgba(0,   120, 200, 1)";
const tributePageColor1 = "rgba(0,   120, 200, 0.5)";

const surveyFormColor = "rgba(0,   200,   0, 1)";
const surveyFormColor1 = "rgba(0,   200,   0, 0.5)";

const productLandingPageColor = "rgba(170,   0, 200, 1)";
const productLandingPageColor1 = "rgba(170,   0, 200, 0.5)";

const techDocPageColor = "rgba(255, 190,   0, 1)";
const techDocPageColor1 = "rgba(255, 190,   0, 0.5)";

const personalPortfolioColor = "rgba(255, 100,   0, 1)";
const personalPortfolioColor1 = "rgba(255, 100,   0, 0.5)";

const dataChartjs = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Tribute Page",
      backgroundColor: tributePageColor,
      borderColor: tributePageColor,
      borderWidth: 1,
      hoverBackgroundColor: tributePageColor1,
      hoverBorderColor: tributePageColor,
      minBarLength: 1,
    },
    {
      label: "Survey Form",
      backgroundColor: surveyFormColor,
      borderColor: surveyFormColor,
      borderWidth: 1,
      hoverBackgroundColor: surveyFormColor1,
      hoverBorderColor: surveyFormColor,
      minBarLength: 1,
    },
    {
      label: "Product Landing Page",
      backgroundColor: productLandingPageColor,
      borderColor: productLandingPageColor,
      borderWidth: 1,
      hoverBackgroundColor: productLandingPageColor1,
      hoverBorderColor: productLandingPageColor,
      minBarLength: 1,
    },
    {
      label: "Technical Documentation Page",
      backgroundColor: techDocPageColor,
      borderColor: techDocPageColor,
      borderWidth: 1,
      hoverBackgroundColor: techDocPageColor1,
      hoverBorderColor: techDocPageColor,
      minBarLength: 1,
    },
    {
      label: "Personal Portfolio Webpage",
      backgroundColor: personalPortfolioColor,
      borderColor: personalPortfolioColor,
      borderWidth: 1,
      hoverBackgroundColor: personalPortfolioColor1,
      hoverBorderColor: personalPortfolioColor,
      minBarLength: 1,
    },
  ],
};

const initialStateToday = {
  currentDayName: currentDayName,
  currentMonthName: currentMonthName,
  currentDayNumber: currentDayNumber,
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
  totalHrs: 0,
};

const initialStateYearTotalTime = {
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
};

/*
year
  {
  monthName: string 
  days: [
  { 
    dayNumber: number 
    totalTime: {
      "Tribute Page":  {
        "hours":                    0, 
        "minutes":                  0, 
      },

      "Survey Form": {
        "hours":                    0, 
        "minutes":                  0, 
      },

      "Product Landing Page": {
         "hours":                    0, 
         "minutes":                  0, 
       },

      "Technical Documentation Page": {
         "hours":                    0, 
         "minutes":                  0, 
       },
      {
      "Personal Portfolio Webpage": {
         "hours":                    0, 
         "minutes":                  0, 
      } 
   }
 ]  
*/
const initialStateYear = [
  {
    monthName: "January",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "February",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "March",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "April",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "May",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "June",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "July",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "August",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "September",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "October",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "November",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
  {
    monthName: "December",
    days: [],
    totalTime: initialStateYearTotalTime,
  },
];

const rwdc2021 = {
  day: {
    [currentMonthName]: {
      [currentDayNumber]: {
        ...initialStateToday,
      },
    },
  },
  today: {
    ...initialStateToday,
  },
  year: initialStateYear,
};

export {
  currentMonthNumber,
  currentMonthName,
  currentDayName,
  currentDayNumber,
  currentYearNumber,
  dataChartjs,
  initialStateToday,
  initialStateYearTotalTime,
  rwdc2021,
};

/* year:
 * "days": [
 *  {
 *    "dayNumber": 0,
 *    "totalTime": [
 *      { name: "Tribute Page",                 hours: 0, minutes: 0},
 *      { name: "Survey Form",                  hours: 0, minutes: 0},
 *      { name: "Product Landing Page",         hours: 0, minutes: 0},
 *      { name: "Technical Documentation Page", hours: 0, minutes: 0},
 *      { name: "Personal Portfolio Webpage",   hours: 0, minutes: 0}
 *    ]
 *  }
 *],
 */
