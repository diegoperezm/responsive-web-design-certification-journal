import { useLocation } from 'react-router-dom';
import { Table       } from 'react-bootstrap';

export default function Day (props) {

    const location = useLocation(); 
    const dayId    = location.pathname.split('/'); // ["","day", ":month", ":dayNumber" ]
    const data     = props.data[dayId[2]][dayId[3]];
    const hours    = data.totalHrs.hours   === undefined ? 0 : data.totalHrs.hours; 
    const minutes  = data.totalHrs.minutes === undefined ? 0 : data.totalHrs.minutes; 
    const totalHrs = `${hours} hours,  ${minutes} minutes`;

    return (
       <>
        <h2 className="mb-5 currentDate">{data.currentDayName}, {data.currentMonthName} {data.currentDayNumber}</h2> 
         <Table striped bordered hover responsive>
           <thead>
             <tr>
               <th>Start</th>
               <th>End</th>
               <th>Project</th>
             </tr>
           </thead>
           <tbody>
               <tr>
                   <td> {data.start1}  </td>
                   <td> {data.end1}    </td>
                   <td> {data.project1}</td>
               </tr>
               <tr>
                    <td> {data.start2}  </td>
                    <td> {data.end2}    </td>
                    <td> {data.project2}</td>
               </tr>
               <tr>
                    <td> {data.start3}  </td>
                    <td> {data.end3}   </td>
                    <td> {data.project3}</td>
               </tr>
               <tr>
                    <td> {data.start4}  </td>
                    <td> {data.end4}    </td>
                    <td> {data.project4}</td>
              </tr>
           </tbody>
         </Table>
           <p className="float-right">Total:{totalHrs}</p>

         <h3 className="mt-5 commentsTitle">Comments:</h3>
         <p
             className="p-4 comments"
             style={{border: '2px dashed black'}}>
             {data.comments}
         </p>
       </>
    );
}
