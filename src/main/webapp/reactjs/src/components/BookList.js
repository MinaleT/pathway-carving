import React, {Component} from 'react';
import {Card,Table, ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import BookToast from './BookToast';
import axios from 'axios';

// Let Customer be equal with book for this project

export default class BookList extends Component{
        constructor(props){
            super(props);
            this.state = {
            books : []
            };
        }

        componentDidMount(){
            this.findAllBooks();
        }

        findAllBooks(){
            axios.get("http://localhost:8080/api/books")
                //.then(response => console.log(response.data));
                .then(response => response.data)
                .then((data) => {this.setState({books:data});
                });
        }

        deleteBook = (bookId) =>{
            /*alert(bookId);*/
            axios.delete("http://localhost:8080/api/books/" + bookId)
                .then(response => {
                if(response.data != null){
                    this.setState({"show": true});
                    setTimeout(() => this.setState({"show": "false"}), 2000);
                    this.setState({
                        books: this.state.books.filter(book => book.id !== bookId)
                    });
                }else{
                     this.setState({"show": false});
                 }
            });
        };


       render(){
            return(
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <BookToast show={this.state.show} message={"Customer Deleted Successfully"} type={"danger"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faList} /> Course List</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                  <th>Title</th>
                                  <th>Author</th>
                                  <th>Co Author</th>
                                  <th>ISBN Number</th>
                                  <th>Price</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                    this.state.books.length === 0 ?
                                    <tr align="center">
                                      <td colSpan="6"> books available</td>
                                    </tr>:
                                    this.state.books.map((book) => (
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.coauthor}</td>
                                        <td>{book.isbnumber}</td>
                                        <td>{book.price}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"edit/" + book.id} className="btn btn-sm btn-primary outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteBook.bind(this, book.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                            </ButtonGroup>

                                        </td>
                                    </tr>
                                    ))
                                }
                              </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>


            );
       }
}

