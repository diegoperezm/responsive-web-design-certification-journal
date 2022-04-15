import {
  Form,
  Row,
  Col,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function MyTr(props) {
  const id = props.id;
  const handleChange = props.handleChange;
  const startName = "start" + props.id;
  const startVal = props.data["start" + props.id];
  const endName = "end" + props.id;
  const endVal = props.data["end" + props.id];
  const projectName = "project" + props.id;
  const projectVal = props.data["project" + props.id];

  return (
    <tr id={id}>
      <td>
        <Form.Control
          as="select"
          name={projectName}
          value={projectVal}
          onChange={handleChange}
        >
          <option disabled={true} value="">
            Choose ...
          </option>
          <option value="Tribute Page">Tribute Page</option>
          <option value="Survey Form">Survey Form</option>
          <option value="Product Landing Page">Product Landing Page</option>
          <option value="Technical Documentation Page">
            Technical Documentation Page
          </option>
          <option value="Personal Portfolio Webpage">
            Personal Portfolio Webpage
          </option>
        </Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          disabled={projectVal === "" ? true : false}
          name={startName}
          value={startVal}
          onChange={handleChange}
          placeholder="hh:mm"
        />
      </td>
      <td>
        <Form.Control
          type="text"
          disabled={projectVal === "" ? true : false}
          onChange={handleChange}
          name={endName}
          value={endVal}
          placeholder="hh:mm"
        />
      </td>
    </tr>
  );
}

function MyTable(props) {
  const handleChange = props.handleChange;
  const data = props.data;

  return (
    <Form id="myForm">
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Project</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          <MyTr id={1} handleChange={handleChange} data={data} />

          <MyTr id={2} handleChange={handleChange} data={data} />

          <MyTr id={3} handleChange={handleChange} data={data} />

          <MyTr id={4} handleChange={handleChange} data={data} />
        </tbody>
      </Table>
    </Form>
  );
}

export default function Today({ dataToday, handleChange }) {
  const currentDayName = dataToday.currentDayName;
  const currentMonthName = dataToday.currentMonthName;
  const currentDayNumber = dataToday.currentDayNumber;
  const data = dataToday;
  const hours = data.totalHrs.hours === undefined ? 0 : data.totalHrs.hours;
  const minutes =
    data.totalHrs.minutes === undefined ? 0 : data.totalHrs.minutes;
  const totalHrs = `${hours} hours,  ${minutes} minutes`;
  const comments = dataToday.comments;

  return (
    <>
      <Row>
        <Col>
          <h2 className="mb-5 currentDate">
            {currentDayName}, {currentMonthName} {currentDayNumber}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <MyTable handleChange={handleChange} data={data} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="float-right primary">Total: {totalHrs}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="commentsTitle">Comments: </h3>
          <InputGroup>
            <FormControl
              as="textarea"
              className="mt-1 mb-5 commentBox"
              placeholder="This area is for comments.&#13;To enable <Start> and <End> field: select a <Project> "
              value={comments}
              name="comments"
              onChange={handleChange}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
}
