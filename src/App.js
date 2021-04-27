import React, { Component } from "react";
import NavbarComponents from "./components/NavbarComponents";
import JumbotronComponents from "./components/JumbotronComponents";
import { Container } from "reactstrap";
import { TableComponents } from "./components/TableComponents";

export default class App extends Component {
  state = {
    title: "Simple CRUD ReactJS",
    users: [
      {
        id: 1,
        nama: "Royan",
        alamat: "Tangerang",
        umur: 25,
        nohp: "021111",
      },
      {
        id: 2,
        nama: "Husen",
        alamat: "Serang",
        umur: 21,
        nohp: "021112",
      },
      {
        id: 3,
        nama: "Fatih",
        alamat: "Tangerang",
        umur: 23,
        nohp: "021113",
      },
      {
        id: 4,
        nama: "Jaya",
        alamat: "Jakarta Barat",
        umur: 23,
        nohp: "021114",
      },
      {
        id: 5,
        nama: "Bagus",
        alamat: "Tangerang",
        umur: 26,
        nohp: "021115",
      },
      {
        id: 6,
        nama: "Bagas",
        alamat: "Jakarta Selatan",
        umur: 23,
        nohp: "021116",
      },
      {
        id: 7,
        nama: "Indah",
        alamat: "Tasikmalaya",
        umur: 29,
        nohp: "021117",
      },
      {
        id: 8,
        nama: "Satria",
        alamat: "Ciamis",
        umur: 23,
        nohp: "021118",
      },
      {
        id: 9,
        nama: "Agus",
        alamat: "Subang",
        umur: 25,
        nohp: "021119",
      },
      {
        id: 10,
        nama: "Udin",
        alamat: "Tangerang",
        umur: 24,
        nohp: "021110",
      },
      {
        id: 11,
        nama: "Zidan",
        alamat: "Bandung",
        umur: 25,
        nohp: "021121",
      },
    ],
  };
  render() {
    return (
      <Container>
        <NavbarComponents />
        <JumbotronComponents title={this.state.title} />
        <TableComponents users={this.state.users} />
      </Container>
    );
  }
}
