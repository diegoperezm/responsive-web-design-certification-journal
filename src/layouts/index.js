/* Abbrev:
 * responsive web design certification =>  rwdc-2021
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import React from "react";
import { useEffect, useState, useCallback } from "react";
import produce from "immer";

import { Container, Col, Row } from "react-bootstrap";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { rwdc2021, currentMonthName, currentDayNumber } from "../consts/";

import {
  getInitialData,
  getMonthNumberFromName,
  getTotalHrsMinutes,
  getDayTotalTime,
  getMonthTotalTime,
} from "../helpers/";

import Header from "../components/header/";
import Today from "../components/today/";
import Day from "../components/day/";
import Year from "../components/year/";
import Month from "../components/months/";
import Graph from "../components/graph/";

//import { data as DEMODATA }       from '../data/';

export default function App() {
  const currentMonthNumber = getMonthNumberFromName(currentMonthName);
  const [data, setData] = useState(() => {
    const initialState = getInitialData(rwdc2021, currentMonthNumber);
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem("rwdc2021", JSON.stringify(data));
  }, [data]);

  const handleChange = useCallback(
    (evt) => {
      const value = evt.target.value;
      const name = evt.target.name;
      const currentMonthDays = data.year[currentMonthNumber].days;
      const todayTotal = getTotalHrsMinutes(data.today, name, value);
      const dayTotalTime = getDayTotalTime(data.today, name, value);
      const monthTotalTime = getMonthTotalTime(
        currentMonthDays,
        currentDayNumber,
        dayTotalTime
      );

      let currentDayIndex = data.year[currentMonthNumber].days
        .map((day) => day.dayNumber)
        .indexOf(parseInt(currentDayNumber, 10));

      const projects = [
        "project1",
        "project2",
        "project3",
        "project4",
      ].includes(name);

      // "" or  hh:mm
      const timeSlots = [
        "start1",
        "start2",
        "start3",
        "start4",
        "end1",
        "end2",
        "end3",
        "end4",
      ].includes(name);

      if (name === "comments") {
        setData(
          produce((draft) => {
            draft.day[currentMonthName][currentDayNumber][name] = value;
            draft.today[name] = value;
          })
        );
      }

      if (projects) {
        setData(
          produce((draft) => {
            draft.day[currentMonthName][currentDayNumber][name] = value;
            draft.today[name] = value;

            draft.day[currentMonthName][currentDayNumber].totalHrs = {
              hours: todayTotal.hours,
              minutes: todayTotal.minutes,
            };
            draft.today.totalHrs = {
              hours: todayTotal.hours,
              minutes: todayTotal.minutes,
            };
            draft.year[currentMonthNumber].days[currentDayIndex].totalTime =
              dayTotalTime;
            draft.year[currentMonthNumber].totalTime = monthTotalTime;
          })
        );
      }

      // "" or  hh:mm
      if (timeSlots) {
        // ""
        if (value.length === 0) {
          setData(
            produce((draft) => {
              draft.day[currentMonthName][currentDayNumber][name] = value;
              draft.today[name] = value;

              draft.day[currentMonthName][currentDayNumber].totalHrs = {
                hours: todayTotal.hours,
                minutes: todayTotal.minutes,
              };
              draft.today.totalHrs = {
                hours: todayTotal.hours,
                minutes: todayTotal.minutes,
              };
              draft.year[currentMonthNumber].days[currentDayIndex].totalTime =
                dayTotalTime;
              draft.year[currentMonthNumber].totalTime = monthTotalTime;
            })
          );
        }

        // h
        if (value.length === 1 && /[012]/.test(value)) {
          setData(
            produce((draft) => {
              draft.day[currentMonthName][currentDayNumber][name] = value;
              draft.today[name] = value;
            })
          );
        }

        // hh
        if (value.length === 2) {
          if (/[01]/.test(value[0]) === true && /[0-9]/.test(value[1])) {
            setData(
              produce((draft) => {
                draft.day[currentMonthName][currentDayNumber][name] = value;
                draft.today[name] = value;
              })
            );
          }
          if (/2/.test(value[0]) === true && /[0-3]/.test(value[1])) {
            setData(
              produce((draft) => {
                draft.day[currentMonthName][currentDayNumber][name] = value;
                draft.today[name] = value;
              })
            );
          }
        }

        // hh:
        if (value.length === 3 && /:/.test(value[2])) {
          setData(
            produce((draft) => {
              draft.day[currentMonthName][currentDayNumber][name] = value;
              draft.today[name] = value;
            })
          );
        }

        // hh:m
        if (value.length === 4 && /[0-5]/.test(value[3])) {
          setData(
            produce((draft) => {
              draft.day[currentMonthName][currentDayNumber][name] = value;
              draft.today[name] = value;
            })
          );
        }

        // hh:mm
        if (value.length === 5 && /[0-9]/.test(value[4])) {
          const simData = Object.assign({}, data.today, {
            totalHrs: {
              hours: todayTotal.hours,
              minutes: todayTotal.minutes,
            },
          });
          const simTodayTotal = getTotalHrsMinutes(simData, name, value);

          // (minutes in a day: 1440 (24*60) )
          const isLessThanMaxTimePerDay =
            simTodayTotal.hours * 60 + simTodayTotal.minutes <= 1439;

          if (isLessThanMaxTimePerDay) {
            setData(
              produce((draft) => {
                draft.day[currentMonthName][currentDayNumber][name] = value;
                draft.today[name] = value;

                draft.day[currentMonthName][currentDayNumber].totalHrs = {
                  hours: todayTotal.hours,
                  minutes: todayTotal.minutes,
                };
                draft.today.totalHrs = {
                  hours: todayTotal.hours,
                  minutes: todayTotal.minutes,
                };
                draft.year[currentMonthNumber].days[currentDayIndex].totalTime =
                  dayTotalTime;
                draft.year[currentMonthNumber].totalTime = monthTotalTime;
              })
            );
          } else {
            //what to do , alert and reset to zero? block everything ? setdata error true?
          }
        }
      }
    },
    [data, currentMonthNumber]
  );

  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <h1 className="mt-5 mb-5 title">
            <u>Responsive Web Design Certification:</u>
          </h1>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/">
                  <Today dataToday={data.today} handleChange={handleChange} />
                </Route>
                <Route exact path="/today">
                  <Today dataToday={data.today} handleChange={handleChange} />
                </Route>
                <Route exact path={`/${currentMonthName}`}>
                  <Month dataMonth={data.year[currentMonthNumber]} />
                </Route>
                <Route exact path="/year">
                  <Year dataYear={data.year} />
                </Route>
                <Route path="/graph">
                  <Graph dataYear={data.year} />
                </Route>
                <Route path="/day/">
                  <Day dataDay={data.day} />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
