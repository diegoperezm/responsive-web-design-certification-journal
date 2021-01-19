
import { Table        } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { createMonth  } from  '../../helpers/';

export default function Year (props) {
    const data = props.data; 
    const arr  = data.map( month =>{
    const ThisMonth = () => createMonth(month.monthName, month.days);
         return (
            <div key={uuidv4()}>
           <h2>{month.monthName}</h2>
           <Table striped bordered hover responsive>
           <thead>
             <tr>
               <th>Monday</th>
               <th>Tuesday</th>
               <th>Wednesday</th>
               <th>Thursday</th>
               <th>Friday</th>
               <th>Saturday</th>
               <th>Sunday</th>
             </tr>
           </thead>
           <tbody>
             <ThisMonth />
           </tbody>
           </Table>
            </div>
          );
    });

    return (<>{arr}</>);

}
