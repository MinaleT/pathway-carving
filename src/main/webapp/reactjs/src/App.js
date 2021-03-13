import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Course from './components/Course';
import CourseList from './components/CourseList';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <NavigationBar />
        <Container>
            <Row>
                <Col lg={12}>
                    <Switch>
                        <Route path="/" exact component={Welcome}/>
                        <Route path="/Course" exact component={Course}/>
                        <Route path="/CourseList" exact component={CourseList}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer />
    </Router>
  );
}

export default App;
