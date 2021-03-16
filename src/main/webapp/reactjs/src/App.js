import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Book from './components/Book';
import BookList from './components/BookList';
import UserList from './components/UserList';
import Footer from './components/Footer';

export default function App(props) {
    const marginTop = {
        marginTop : "20px"
    };
    const heading = "Empowering People to Better Carve Their Future!";
    const quote = "Consistent reading of books is the most beautiful thing that one can do in life";
    const footer = "CEO: Lele M";

  return (
    <Router>
        <NavigationBar />
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route path="/" exact component={() => <Welcome heading={heading} quote={quote} footer={footer}/>} />
                        <Route path="/add" exact component={Book}/>
                        <Route path="/edit/:id" exact component={Book}/>
                        <Route path="/list" exact component={BookList}/>
                        <Route path="/users" exact component={UserList}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer />
    </Router>
  );
}


