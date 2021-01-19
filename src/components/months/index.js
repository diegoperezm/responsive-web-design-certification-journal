import   React          from 'react';
import { Table       }  from 'react-bootstrap';
import { createMonth }  from '../../helpers/';

function  MyTable (props) {
    const monthName  = props.data.monthName;
    const days       = props.data.days

    const ThisMonth  = () => createMonth(monthName, days);

    return (
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
      );
} 

export default function Month(props) {
    const monthName =  props.data.monthName;
    const data      =  props.data;
    return (
        <>
          <h1>{monthName}</h1> 
          <MyTable data={data} />
        </>
    );
}




