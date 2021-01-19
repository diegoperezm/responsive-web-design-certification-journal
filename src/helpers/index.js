import { NavLink      } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
    currentDayNumber,
    initialStateYearTotalTime,
    initialStateToday,
    currentMonthName,
    currentYearNumber,
    
}                       from '../consts/';


function getInitialData (rwdc2021, currentMonthNumber) {
    
 let data =  (JSON.parse(localStorage.getItem('rwdc2021')) || rwdc2021 );

 if( !data
         .year[currentMonthNumber]
         .days
         .some( day => {
           return  day.dayNumber === parseInt(currentDayNumber);
         })
  )  {
         data.year[currentMonthNumber]
               .days.push({
                   dayNumber: parseInt(currentDayNumber),
                   totalTime: initialStateYearTotalTime 
               });
  }

/*
 * TODO  test this 
 */
  if( data.day[currentMonthName] === undefined ) {
         console.log('if data [currentmonthname] .... undefined');
          data =  {
               ...data,
               day: {
                   ...data.day,
                   [currentMonthName]: {
                       [currentDayNumber]: {
                           ...data.today
                      }
                   }
               }
           };
   }

/*
 * TODO  test this 
 */
  if(data.day[currentMonthName][currentDayNumber] === undefined) {
         console.log('if data [currentmonthname][currentDayNumber] .... undefined');
           data ={
               ...data,
               day: {
                   ...data.day,
                   [currentMonthName]: {
                       ...data.day[currentMonthName],
                       [currentDayNumber]: {
                            ...initialStateToday
                       }
                   }
               },
               today: {
                   ...initialStateToday
               }
           };
  }
    return data; 
}

function getDayTotalTime (today, name, value) {

   let start1   = today.start1;
   let end1     = today.end1;
   let start2   = today.start2;
   let end2     = today.end2;
   let start3   = today.start3;
   let end3     = today.end3;
   let start4   = today.start4;
   let end4     = today.end4;
   let project1 = today.project1;   
   let project2 = today.project2;
   let project3 = today.project3;
   let project4 = today.project4;
    
       
   switch (name) {
   case 'start1':
       start1 = value;
       break;
   case 'end1':
       end1   = value;
       break;

   case 'start2':
       start2 = value;
       break;
   case 'end2':
       end2   = value;
       break;

   case 'start3':
       start3 = value;
       break;
   case 'end3':
       end3   = value;
       break;

   case 'start4':
       start4 = value;
       break;

   case 'end4':
       end4   = value;
       break;

   case 'project1':
       project1= value;
       break;

   case 'project2':
       project2= value;
       break;

   case 'project3':
       project3= value;
       break;

   case 'project4':
       project4= value;
       break;
   }

    let total1 = getTotalMinutes(start1, end1);
    let total2 = getTotalMinutes(start2, end2);
    let total3 = getTotalMinutes(start3, end3);
    let total4 = getTotalMinutes(start4, end4);

    let total1Hrs = isNaN(total1) ? 0 : Math.floor(total1 / 60);
    let total2Hrs = isNaN(total2) ? 0 : Math.floor(total2 / 60);
    let total3Hrs = isNaN(total3) ? 0 : Math.floor(total3 / 60);
    let total4Hrs = isNaN(total4) ? 0 : Math.floor(total4 / 60);

    let total1Min = isNaN(total1) ? 0 : total1 % 60;
    let total2Min = isNaN(total2) ? 0 : total2 % 60;
    let total3Min = isNaN(total3) ? 0 : total3 % 60;
    let total4Min = isNaN(total4) ? 0 : total4 % 60;

    
    let totalProject1 = project1 === "" 
        ? {} 
        : { [project1]: { hours: total1Hrs, minutes: total1Min }};

    let totalProject2 = project2 === ""
        ? {} 
        : { [project2]: { hours: total2Hrs, minutes: total2Min }};

    let totalProject3 = project3 === ""
        ? {} 
        : { [project3]: { hours: total3Hrs, minutes: total3Min }};

    let totalProject4 = project4 === "" 
        ? {} 
        : { [project4]: { hours: total4Hrs, minutes: total4Min }};


   const temp = {
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

   "Personal Portfolio Webpage": {
      "hours":                    0, 
      "minutes":                  0, 
   }      
   };

   
   let totalToday = [
       { ...totalProject1},
       { ...totalProject2},
       { ...totalProject3},
       { ...totalProject4},
        
   ];

    for (let i = 0; i < totalToday.length; i++) {
       for (const [key, value] of Object.entries(totalToday[i])) {
          Object.assign(
                     temp,
                   {
                       [key]: {
                           hours:   temp[key].hours    + value.hours,
                           minutes: temp[key].minutes  + value.minutes
                       }
                   }
                  );      
       }
    }
   
    return temp;
}

function getMonthTotalTime(currentMonthDays, currentDayNumber, dayTotal) {

    let total = {};

    let prevTemp = {
        "Tribute Page": {
            "hours": 0,
            "minutes": 0
        },
        "Survey Form": {
            "hours": 0,
            "minutes": 0
        },
        "Product Landing Page": {
            "hours": 0,
            "minutes": 0
        },
        "Technical Documentation Page": {
            "hours": 0,
            "minutes": 0
        },
        "Personal Portfolio Webpage": {
            "hours":0,
            "minutes": 0
        }
     };


    let prev = currentMonthDays
        .filter( pastDay => pastDay.dayNumber !== +currentDayNumber)
        .map( day     =>  day.totalTime);

    for (let i = 0; i < prev.length; i++) {
       for (const [key, value] of Object.entries(prev[i])) {
          Object.assign(
                   prevTemp,
                   {
                       [key]: {
                           hours:   prevTemp[key].hours    + value.hours,
                           minutes: prevTemp[key].minutes  + value.minutes
                       }
                   }
                  );      
       }
    }

    for (const [key, value] of Object.entries(dayTotal)) {
          Object.assign(
                   total,
                   {
                       [key]: {
                           hours:   prevTemp[key].hours    + value.hours,
                           minutes: prevTemp[key].minutes  + value.minutes
                       }
                   }
                  );      
      }

    return total;
}


/*
 * TODO  test this 
 */

function getTotalMinutes(startIn, endIn) {
  let start   =  startIn.split(':') 
  let end     =  endIn.split(':')
  let startm;  
  let endm;  
  let totalm;
 
  if(+start[0] > +end[0]) {
    totalm   = ((24 - (+start[0] - +end[0])) * 60) + (+start[1] + +end[1]) ;

  } else {
    startm = ((+start[0] * 60) + +start[1]);
    endm   = ((+end[0]   * 60) +   +end[1]) ;

    totalm = endm  - startm ;
  }

  return totalm;
}

function getTotalHrsMinutes (today, name, value) {
   let start1 = today.start1;
   let end1   = today.end1;
   let start2 = today.start2;
   let end2   = today.end2;
   let start3 = today.start3;
   let end3   = today.end3;
   let start4 = today.start4;
   let end4   = today.end4;

   switch (name) {
   case 'start1':
       start1 = value;
       break;
   case 'end1':
       end1   = value;
       break;

   case 'start2':
       start2 = value;
       break;
   case 'end2':
       end2   = value;
       break;

   case 'start3':
       start3 = value;
       break;
   case 'end3':
       end3   = value;
       break;

   case 'start4':
       start4 = value;
       break;

   case 'end4':
       end4   = value;
       break;
   }

   let total1 = getTotalMinutes(start1, end1);
   let total2 = getTotalMinutes(start2, end2);
   let total3 = getTotalMinutes(start3, end3);
   let total4 = getTotalMinutes(start4, end4);

   let totalMinutes =  [ total1, total2, total3, total4 ]
                         .filter( n => !isNaN(n))
                        .reduce((acc, curr) =>{ return acc += curr }, 0);

   let hours   = Math.floor( (totalMinutes)  /  60);
   let minutes =    (totalMinutes) % 60;

    return   { hours,  minutes };
}

// change this for something better?
function getMonthNumberFromName(monthName) {
    let number; 
    switch (monthName) {
      case 'January':
         number = 0;
         break;

      case 'February':
         number = 1;
         break;

      case 'March':
         number = 2;
         break;

      case 'April':
         number = 3;
         break;

      case 'May':
         number = 4;
         break;

      case 'June':
         number = 5;
         break;

      case 'July':
         number = 6;
         break;

      case 'August':
         number = 7;
         break;

      case 'September':
         number = 8;
         break;

      case 'October':
         number = 9;
         break;

      case 'November':
         number = 10;
         break;

      case 'December':
         number = 11;
         break;
    }

    return number;
}

function getDaysInMonth (year, month) {
    return new Date(year, month, 0).getDate();
}

function getOffsetMonth( year, month) {
    return new Date(year, month).getDay() ;
}

/*
 *  (offsetDays -1 ) + (days[i] - 1)  // JS index 0 
 */
function getMonthData (monthName, days) {

 const monthNumber = getMonthNumberFromName(monthName);
 const daysInMonth = getDaysInMonth(currentYearNumber, monthNumber);
 const offsetDays  = getOffsetMonth(currentYearNumber, monthNumber) ;
 const arrMonth    = new Array( daysInMonth + offsetDays ).fill("");

 for(let i = 0; i < days.length ; i++ ) {
      arrMonth[ (offsetDays -1 ) + (days[i].dayNumber - 1)  ] =  days[i].dayNumber;
 }

  return arrMonth;
}

function createMonth (monthName, days)  {
    let monthData = getMonthData(monthName, days);

    let links =  monthData.map( dayNumber   => {
     if(dayNumber !== '' )  {
         return (<td  key={uuidv4()} >{createLink(monthName, dayNumber)}</td>);
      } else {
         return (<td  key={uuidv4()} > </td>);
      }
   }); 

  let arrWeeksLinks = [];

  for( let i = 0; i < links.length ; i++) {
   if( i % 7 === 0)
       arrWeeksLinks.push([]);
       arrWeeksLinks[arrWeeksLinks.length -1].push(links[i])
   }

  let arrMonthWeeksLinks = arrWeeksLinks.map( week => (<tr key={uuidv4()}>{week}</tr>));

  return arrMonthWeeksLinks;
}

function createLink (month, dayNumber) {
    return  (
        <NavLink
            className="inactive"
            activeClassName="active-b"
            exact
            to={`/day/${month}/${dayNumber}`}>
            {dayNumber} 
        </NavLink>
    );
}

/*
 * TODO change this
 */
function  getDataGraph  (dataChartjs, dataYear ) {
    let arrT     = dataYear.map( month => month.totalTime);
    let arrTr    = []; 
    let arrSur   = [];
    let arrPro   = [];
    let arrTech  = [];
    let arrPer   = [];

    for(let j= 0; j < arrT.length ; j++ ) {
        arrTr[j]  = (((arrT[j]["Tribute Page"].hours)*60) + arrT[j]["Tribute Page"].minutes)/60 ;
    }
    for(let j= 0; j < arrT.length ; j++ ) {
        arrSur[j] = (((arrT[j]["Survey Form"].hours)*60) + arrT[j]["Survey Form"].minutes)/60 ;
    }

    for(let j= 0; j < arrT.length ; j++ ) {
        arrPro[j] = (((arrT[j]["Product Landing Page"].hours)*60) + arrT[j]["Product Landing Page"].minutes)/60;
    }

    for(let j= 0; j < arrT.length ; j++ ) {
        arrTech[j] = (((arrT[j]["Technical Documentation Page"].hours)*60) + arrT[j]["Technical Documentation Page"].minutes)/60;
        }

    for(let j= 0; j < arrT.length ; j++ ) {
        arrPer[j] = (((arrT[j]["Personal Portfolio Webpage"].hours)*60) + arrT[j]["Personal Portfolio Webpage"].minutes)/60;
    }

    dataChartjs.datasets[0].data = arrTr;
    dataChartjs.datasets[1].data = arrSur;
    dataChartjs.datasets[2].data = arrPro;
    dataChartjs.datasets[3].data = arrTech;
    dataChartjs.datasets[4].data = arrPer;

    return dataChartjs; 

}

export {
    getInitialData,
    getTotalHrsMinutes,
    getMonthNumberFromName,
    getDaysInMonth,
    getOffsetMonth,
    getMonthData,
    getDataGraph,
    createLink,
    createMonth,
    currentMonthName,
    getDayTotalTime,
    getMonthTotalTime
}

