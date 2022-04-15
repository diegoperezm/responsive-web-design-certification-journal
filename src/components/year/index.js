import { Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import { createMonth } from "../../helpers/";

export default function Year({ dataYear }) {
  const arr = dataYear.map((month) => {
    const ThisMonth = () => createMonth(month.monthName, month.days);
    return (
      <div key={uuidv4()}>
        <h2 className="mt-3 currentMonth">{month.monthName}</h2>
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
      </div>
    );
  });

  return <>{arr}</>;
}
