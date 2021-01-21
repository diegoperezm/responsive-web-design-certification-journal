
import { NavLink          } from 'react-router-dom';
import { Nav, Navbar      } from 'react-bootstrap';

import { currentMonthName } from '../../consts/';

export default function Header() {
   return (
      <div className="dashboard">
       <Navbar bg="light" variant="light" expand="lg">
           <Navbar.Brand href={process.env.PUBLIC_URL + '/'} >Journal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <NavLink
                  className="inactive"
                  activeClassName="active-b"
                  replace
                  exact
                  to="/today">
                     TODAY 
              </NavLink>
              <NavLink
                  className="inactive"
                  activeClassName="active-b"
                  replace
                  exact
                  to={`/${currentMonthName}/`}>
                     MONTH 
              </NavLink>
              <NavLink
                  className="inactive"
                  activeClassName="active-b"
                  replace
                  exact
                  to="/year">
                     YEAR 
              </NavLink>
              <NavLink
                  className="inactive"
                  activeClassName="active-b"
                  replace
                  exact
                  to="/graph">
                     GRAPH
              </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      );
}
