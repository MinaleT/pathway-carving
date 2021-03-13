import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (<Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Crystal_Clear_mimetype_vectorgfx.png" alt="Pathway-carving Logo"/>Pathway-carving
            </Link>
            <Nav className="mr-auto">
              <Link to={"Course"} className="nav-link">Courses</Link>
              <Link to={"CourseList"} className="nav-link">Course List</Link>
            </Nav>
        </Navbar>
        );
    }
}

export default NavigationBar;