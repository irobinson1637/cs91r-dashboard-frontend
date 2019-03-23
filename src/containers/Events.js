import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';


export default class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [["event1", "event1data"], ["event3", "event3data"], ["event2", "event2data"]],
    };
  }



  render() {
    return (
      <div>
          {this.state.events.map(eventData =>    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{eventData[0]}</CardTitle>
          <CardSubtitle>{eventData[1]}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>)}
         
      </div>
    );
  }
}
