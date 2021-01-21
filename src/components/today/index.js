import {
     Form,
     Row,
     Col,
     Table,
     InputGroup,
     FormControl
}                         from 'react-bootstrap';






function MyTr(props) {
    const id            = props.id;
    const handleChange  = props.handleChange; 
    const startName     = "start" + props.id;
    const startVal      = props.data["start" + props.id];
    const endName       = "end" + props.id;
    const endVal        = props.data["end" + props.id];
    const projectName   = "project" + props.id;
    const projectVal    = props.data["project" + props.id];

    return (
        <tr id={id}>
             <td>
                 <Row>
                     <Col>
                         <Form.Control
                             type="text"
                             disabled={projectVal === "" ? true : false }
                             onChange={handleChange}
                             name={startName} 
                             value={startVal}
                             placeholder="hh:mm"
                         />
                   </Col>
                 </Row>
             </td> 
             <td>
                 <Row>
                     <Col>
                         <Form.Control
                             type="text"
                             disabled={projectVal === "" ? true : false }
                             name={endName}
                             value={endVal}
                             onChange={handleChange }
                             placeholder="hh:mm"
                         />
                      </Col>
                 </Row>
             </td> 
             <td>
                 <Form.Control
                     as="select"
                     name={projectName}
                     value={projectVal}
                     onChange={handleChange}
                 >
                   <option disabled={true}            value="" >Choose ...</option> 
                   <option value="Tribute Page"                >Tribute Page</option>
                   <option value="Survey Form"                 >Survey Form</option>
                   <option value="Product Landing Page"        >Product Landing  Page</option>
                   <option value="Technical Documentation Page">Technical Documentation  Page</option>
                   <option value="Personal Portfolio Webpage"  >Personal Portfolio Webpage</option>
               </Form.Control>
           </td> 
         </tr>
             );
}







function MyTable (props) {
    const handleChange = props.handleChange;
    const data         = props.data; 

    return (
        <Form id="myForm"> 
           <Table  bordered hover responsive>
             <thead>
               <tr>
                 <th>Start</th>
                 <th>End</th>
                 <th>Project</th>
               </tr>
             </thead>
             <tbody>
                 <MyTr
                       id={1}
                       handleChange={handleChange}
                       data={data}
                       />
        
                 <MyTr
                       id={2}
                       handleChange={handleChange}
                       data={data}
                       />
        
                 <MyTr
                       id={3}
                       handleChange={handleChange}
                       data={data}
                       />
        
                 <MyTr
                       id={4}
                       handleChange={handleChange}
                       data={data}
                       />
             </tbody>
           </Table>
        </Form>
    );
 }

export default function Today(props) {
   const  currentDayName   = props.data.currentDayName;
   const  currentMonthName = props.data.currentMonthName;
   const  currentDayNumber = props.data.currentDayNumber;
   const  data             = props.data;
   const  hours            = data.totalHrs.hours   === undefined ? 0 : data.totalHrs.hours; 
   const  minutes          = data.totalHrs.minutes === undefined ? 0 : data.totalHrs.minutes; 
   const  totalHrs         = `${hours} hours,  ${minutes} minutes`;

   const  comments         = props.data.comments;
   const  handleChange     = props.handleChange;

   return (
        <>
        <Row>
          <Col>
             <h1 className="mb-5">{currentDayName}, {currentMonthName} {currentDayNumber}</h1> 
         </Col>
            </Row>
            <Row>
               <Col>
                   <MyTable
                     handleChange={handleChange}
                     data={data}
                     />
               </Col>
            </Row>
            <Row>
               <Col>
                   <p className="float-right primary">Total: {totalHrs}</p>
               </Col>
            </Row>
           <Row>
                <Col>
            <h2>Comments: </h2>
            <InputGroup>
                <FormControl
                    as="textarea"
                    className="mt-1 commentBox"
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

