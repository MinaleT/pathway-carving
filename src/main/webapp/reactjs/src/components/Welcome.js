import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

class Welcome extends React.Component {
    render() {
        return (
                <Jumbotron>
                  <h1>Empowering People to Better Carve Their Future!</h1>
                  <p>
                    Pathway-carving is established with a purpose of enabling people to meet the demands of
                    computerized world through training those programs and field where there is high need.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
        );
    }
}

export default Welcome;