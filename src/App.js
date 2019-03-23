import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import "./App.css";
import Routes from "./Routes";



export default class App extends Component {
  render() {
    return (
      <div className="App container">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">CS91R</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" pullRight>
      <NavItem href="/signup">New Volunteer</NavItem>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/events">Events</NavItem>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>;
      <Routes />
      </div>
    );
  }
}

