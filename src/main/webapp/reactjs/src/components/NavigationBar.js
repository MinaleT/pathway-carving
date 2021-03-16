import React from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavigationBar(){
    return (<Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand">
            <Image roundedCircle width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Crystal_Clear_mimetype_vectorgfx.png" alt="Pathway-carving Logo"/>Pathway-carving
        </Link>
        <Nav className="mr-auto">
                <Link to={"add"} className="nav-link">Add Book</Link>
                <Link to={"list"} className="nav-link">Book List</Link>
                <Link to={"users"} className="nav-link">User List</Link>
        </Nav>
    </Navbar>
    );
}
