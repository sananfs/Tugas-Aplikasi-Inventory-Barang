import React, { Component } from "react";
import Sidebar from "./Component/Sidebar";
import "../Css/Product.css";
import { Row, Col, Button, Card } from "react-bootstrap";

export default class ProductPage extends Component {
  render() {
    return (
      <div className="product">
        <Sidebar />
        <Row className="productcont pt-3">
          <Col xs={12}>
            <h1 className="title">Product</h1>
          </Col>
          <Card xs={12} md={6} lg={4} className="productitem" style={{ width: "18rem" }}>
            <Card.Img className="productimg" variant="top" src={require("../Assets/img/pen1.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              {/* <Card.Text>Some quick example text.</Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card xs={12} md={6} lg={4} className="productitem" style={{ width: "18rem" }}>
            <Card.Img className="productimg" variant="top" src={require("../Assets/img/pen2.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              {/* <Card.Text>Some quick example text.</Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card xs={12} md={6} lg={4} className="productitem" style={{ width: "18rem" }}>
            <Card.Img className="productimg" variant="top" src={require("../Assets/img/pen1.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              {/* <Card.Text>SSome quick example text.</Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card xs={12} md={6} lg={4} className="productitem" style={{ width: "18rem" }}>
            <Card.Img className="productimg" variant="top" src={require("../Assets/img/pen2.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              {/* <Card.Text>SSome quick example text.</Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card xs={12} md={6} lg={4} className="productitem" style={{ width: "18rem" }}>
            <Card.Img className="productimg" variant="top" src={require("../Assets/img/pen1.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              {/* <Card.Text>SSome quick example text.</Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card xs={12} md={6} lg={4} className="productitem" style={{ width: "18rem" }}>
            <Card.Img className="productimg" variant="top" src={require("../Assets/img/pen2.jpg")} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              {/* <Card.Text>SSome quick example text.</Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}
