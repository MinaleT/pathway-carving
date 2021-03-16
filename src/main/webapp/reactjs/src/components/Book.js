import React, {Component} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import BookToast from './BookToast';
import axios from 'axios';

export default class Book extends Component{
       constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
       }

        initialState = {
            id:'', title:'', author:'', coauthor:'', isbnumber:'', price:''
        };

        componentDidMount(){
            const bookId =  + this.props.match.params.id;
            if (bookId){
                this.findBookById(bookId);
            }
        }

        findBookById = (bookId) =>{
                axios.get("http://localhost:8080/api/books/"+bookId)
                .then(response => {
                    if(response.data !=null){
                    this.setState({
                        id: response.data.id,
                        title: response.data.title,
                        author: response.data.author,
                        coauthor :response.data.coauthor,
                        isbnumber : response.data.isbnumber,
                        price : response.data.price
                    });
                    }
                }).catch((error) => {
                    console.error("Error - " + Error);
                });
        }

        resetBook = () => {
            this.setState(() => this.initialState);
        };

       submitBook = event => {
        event.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author,
            coauthor: this.state.coauthor,
            isbnumber: this.state.isbnumber,
            price: this.state.price
            };

        axios.post("http://localhost:8080/api/books", book)
            .then(response => {
                if (response.data != null){
                    this.setState({"show": true, "method":"put"});
                    setTimeout(() => this.setState({"show": "false"}), 2000);
                }else{
                    this.setState({"show": false});
                }
            });
            this.setState(this.initialState);
       };
       updateBook = event=> {
        event.preventDefault();
                const book = {
                    id : this.state.id,
                    title: this.state.title,
                    author: this.state.author,
                    coauthor: this.state.coauthor,
                    isbnumber: this.state.isbnumber,
                    price: this.state.price
                    };

                axios.put("http://localhost:8080/api/books", book)
                    .then(response => {
                        if (response.data != null){
                            this.setState({"show": true, "method":"put"});
                            setTimeout(() => this.setState({"show": "false"}), 2000);
                            setTimeout(() => this.bookList(), 2000);
                        }else{
                            this.setState({"show": false});
                        }
                    });
                    this.setState(this.initialState);
        };

        bookChange = event=>{
            this.setState({
                [event.target.name]:event.target.value
            });
        };

        bookList = () => {
            return this.props.history.push("/list");
        };

       render(){

            const {title, author, coauthor, isbnumber, price} = this.state;
            return(
                <div>
                    <div style={{"display": this.state.show ? "block" : "none"}}>
                        <BookToast show=  {this.state.show} message = {this.state.method ==="put" ? "Book Saved Successfully" : "Book Updated Successfully"} type={"success"}/>
                    </div>
                    <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} />{this.state.id ? "Update Book" : "Add Book"}</Card.Header>
                    <Form onReset={this.resetBook} onSubmit={this.state.id ? this.updateBook : this.submitBook} id="bookFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Book Title</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="title"
                                        value={title}
                                        onChange={this.bookChange}
                                        placeholder="Book Title"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCode">
                                    <Form.Label>Book Author</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="author"
                                        value={author}
                                        onChange={this.bookChange}
                                        placeholder="author"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCode">
                                    <Form.Label>Co Author</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="coauthor"
                                        value={coauthor}
                                        onChange={this.bookChange}
                                        placeholder="Coauthor"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Isbn Number</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="isbnumber"
                                        value={isbnumber}
                                        onChange={this.bookChange}
                                        placeholder="isbnumber"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="text" name="price"
                                        value={price}
                                        onChange={this.bookChange}
                                        placeholder="Price"
                                        className={"bg-dark text-white"}/>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                          <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Submit"}
                          </Button>
                          {' '}
                            <Button size="sm" variant="info" type="reset">
                              <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>
                            {' '}
                            <Button size="sm" variant="info" type="button" onClick={this.bookList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Book List
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
             </div>
            );
       }
}