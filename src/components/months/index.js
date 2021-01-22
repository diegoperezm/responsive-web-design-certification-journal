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
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
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
          <h2 className="mb-4 currentMonth">{monthName}</h2> 
          <MyTable data={data} />
        </>
    );
}




