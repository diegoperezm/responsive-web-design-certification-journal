/* Abbrev:
 * responsive web design certification =>  rwdc-2021 
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import React                     from 'react';
import { useEffect, useState }   from 'react';

import {
    Container,
    Col,
    Row
}                                from 'react-bootstrap';

import {
    HashRouter as Router,
    Switch,
    Route
}                                from 'react-router-dom';

import {
    rwdc2021,
    currentMonthName,
    currentDayNumber,
}                                 from '../consts/';


import {
    getInitialData,
    getMonthNumberFromName,
    getTotalHrsMinutes,
    getDayTotalTime,
    getMonthTotalTime
}                                 from '../helpers/';

import Header                     from '../components/header/';
import Today                      from '../components/today/';
import Day                        from '../components/day/';
import Year                       from '../components/year/';
import Month                      from '../components/months/';
import Graph                      from '../components/graph/';

//import { data as DEMODATA }       from '../data/';

export default function App() {

   const currentMonthNumber  =  getMonthNumberFromName(currentMonthName);
   const [data, setData]     = useState(() => {
       const initialState    = getInitialData(rwdc2021, currentMonthNumber);
       return initialState;
    });

    
   useEffect(() => {
      localStorage.setItem('rwdc2021', JSON.stringify(data))
   }, [data]); 

    const handleChange = evt => {
        const value             = evt.target.value
        const name              = evt.target.name;
        const currentMonthDays  = data.year[currentMonthNumber].days;
        const todayTotal        = getTotalHrsMinutes(data.today, name, value);
        const dayTotalTime      = getDayTotalTime(data.today, name, value);  
        const monthTotalTime    = getMonthTotalTime(currentMonthDays, currentDayNumber, dayTotalTime);


// change this: object references  modify original array  
        const tempArr           = data.year.map( month => month );

        let currentDayIndex = tempArr[currentMonthNumber]
                                 .days.map(day=>day.dayNumber)
                                 .indexOf(parseInt(currentDayNumber));

        // YEAR DAY totalTime
        tempArr[currentMonthNumber]
            .days[currentDayIndex]
            .totalTime               = dayTotalTime; 

        // YEAR MONTH totalTime 
        tempArr[currentMonthNumber]
            .totalTime               = monthTotalTime; 
       
        setData({
            ...data,
            today: {
                ...data.today,
                [evt.target.name]: value,
                totalHrs: { hours: todayTotal.hours, minutes: todayTotal.minutes} 
            },
            day: {
                ...data.day,
                [currentMonthName]: {
                       ...data.day[currentMonthName],
                    [currentDayNumber]: {
                        ...data.today,
                      [evt.target.name]: value, 
                      totalHrs: { hours: todayTotal.hours, minutes: todayTotal.minutes}  
                    }
                }
            }, 

// change this: object references  modify original array 
            year: [...tempArr]
        });
    }; 

  return (
      <div className="App">
        <Router>
          <Header />
            <Container fluid>
                <h1 className="mt-5 mb-5"><u>Responsive Web Design Certification:</u></h1> 
             <Row>
                <Col>
             <Switch>
               <Route exact path="/">
                  <Today data={data.today} handleChange={handleChange} />
               </Route>
                <Route exact path="/today">
                  <Today data={data.today} handleChange={handleChange} />
               </Route>
               <Route exact path={`/${currentMonthName}`}>
                  <Month data={data.year[currentMonthNumber] } />
               </Route>
                <Route exact path="/year">
                  <Year data={data.year}  />
               </Route>
               <Route path="/graph">
                 <Graph  data={data.year}/>
               </Route>
               <Route path="/day/">
                  <Day data={data.day} />
               </Route>
             </Switch>
             </Col>
           </Row>
          </Container>
      </Router>
    </div>
  );
}

