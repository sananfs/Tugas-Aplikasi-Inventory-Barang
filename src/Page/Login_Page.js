import React, { useState, useEffect, Component } from "react";
import { FormControl, FormLabel, Button, Row, Col } from "react-bootstrap";
import "../Css/Login.css";
import Logo from "../Assets/img/penlogin.jpg";
import SweetAlert from "../Utils/SweetAlert";
import { Navigate } from "react-router-dom";
import felix from "../Assets/img/felix.gif";

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
    };
    this.Login = this.Login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.Validate = this.Validate.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validate() {
    var email = this.state.email;
    var password = this.state.password;
    // console.log(email);
    // console.log(password);
    var data = {
      email: email,
      password: password,
    };

    if (email === "") {
      // console.log("E-mail Tidak Boleh Kosong");
      SweetAlert.Error("E-mail Tidak Boleh Kosong");
    } else if (password === "") {
      // console.log("Password Tidak Boleh Kosong");
      SweetAlert.Error("Password Tidak Boleh Kosong");
    } else {
      // console.log("Sudah Lengkap");
      this.Login(data);
    }
  }
  Login(data) {
    console.log(data);
    SweetAlert.Succes("Berhasil Login");
    this.setState({ redirectToReferrer: true });
  }

  render() {
    var email = this.state.email;
    var password = this.state.password;
    if (this.state.redirectToReferrer) {
      return <Navigate to={"/"} />;
    }
    return (
      <div className="Login py-5 ">
        <Row className="Login-contain">
          <Col className="left-side">
            <FormLabel>E-mail</FormLabel>
            <FormControl name="email" value={email} onChange={this.handleInputChange} className="input" placeholder="Masukkan E-mail" type="text" />
            <FormLabel>Sandi</FormLabel>
            <FormControl name="password" value={password} onChange={this.handleInputChange} className="input" placeholder="Masukkan Sandi" type="password" />
            <Button variant="success" className="button" onClick={(e) => this.Validate()}>
              Masuk
            </Button>
            <p>
              Belum punya akun?
              <Button className="text-light" variant="link" href="register">
                Daftar
              </Button>
            </p>
          </Col>
          <Col className="right-side">
            <div>
              <center>
                <img className="login-img" src={Logo} />
              </center>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
