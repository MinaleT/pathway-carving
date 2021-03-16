import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

export default function Welcome(props) {
    return (
            <Jumbotron>
              <h1>{props.heading}</h1>
              <blockquote className="blockquote mb-0">
              <p>{props.quote}</p>
              <p>
                Pathway-carving is established with a purpose of enabling people to meet the demands of
                computerized world through training those programs and field where there is high need.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
              <footer className="blockquote-footer">
               {props.footer}
              </footer>
              </blockquote>
            </Jumbotron>
    );
}
