import React, {Component} from 'react';
import {Card,Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';

export default class CourseList extends Component{
       render(){
            return(
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faList} /> Course List</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                  <th>Course Title</th>
                                  <th>Course Code</th>
                                  <th>Price</th>
                                  <th>Language</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr align="center">
                                  <td colspan="6">No Courses Available</td>
                                </tr>
                              </tbody>

                        </Table>
                    </Card.Body>
                </Card>

            );
       }
}

