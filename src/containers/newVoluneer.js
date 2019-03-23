import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class newVolunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }


  render() {
    return (
        <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="name" name="name" id="nameField" placeholder="Jim Waldo" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" id="emailField" placeholder="jwaldo@nicco.com" />
        </FormGroup>
        <FormGroup>
          <Label for="partySelect">Party</Label>
          <Input type="select" name="select" id="partySelect">
            <option>Democrat</option>
            <option>Republican</option>
            <option>Independent</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Additional Info</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Picture</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
