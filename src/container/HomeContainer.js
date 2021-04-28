import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponents from "../components/BackComponents";
import { TableComponents } from "../components/TableComponents";

export default class HomeContainer extends Component {
  render() {
    return (
      <Container>
        <TableComponents users={this.props.users} />
      </Container>
    );
  }
}
