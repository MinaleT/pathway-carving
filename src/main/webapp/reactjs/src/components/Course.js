import React, {Component} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

export default class Course extends Component{
       constructor(props){
        super(props);
        this.state = {courseTitle:'', courseCode:'', price:'', languageUsed:''}
        this.courseChange = this.courseChange.bind(this);
        this.submitCourse = this.submitCourse.bind(this);
       }

       submitCourse(event){
        alert('Course Title: '+this.state.courseTitle+ ', Course Code: '+this.state.courseCode+ ', Language: '+this.state.languageUsed+ ', Price: '+this.state.price);
        event.preventDefault();
       }

        courseChange(event){
            this.setState({
                [event.target.name]:event.target.value
            });
        }
       render(){
            return(
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Course</Card.Header>
                    <Form onSubmit={this.submitCourse} id="courseFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Course Title</Form.Label>
                                    <Form.Control required
                                        type="text" name="courseTitle"
                                        value={this.state.courseTitle}
                                        onChange={this.courseChange}
                                        placeholder="Course Title"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCode">
                                    <Form.Label>Course Code</Form.Label>
                                    <Form.Control required
                                        type="text" name="courseCode"
                                        value={this.state.courseCode}
                                        onChange={this.courseChange}
                                        placeholder="Course Code"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLanguage">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control required
                                        type="text" name="languageUsed"
                                        value={this.state.languageUsed}
                                        onChange={this.courseChange}
                                        placeholder="languageUsed"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required
                                        type="text" name="price"
                                        value={this.state.price}
                                        onChange={this.courseChange}
                                        placeholder="Price"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                          <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Submit
                          </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            );
       }
}