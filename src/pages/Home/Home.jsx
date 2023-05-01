import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="mx-auto">
          <div className="mx-auto">
          <h1 className="">Welcome to foodies</h1>
          <p className="text-secondary ">
            Welcome to our recipe website! We have a wide variety of recipes to
            suit every taste and occasion. From quick and easy meals for busy
            weeknights to decadent desserts for special occasions, we've got you
            covered.
          </p>
          <Button variant="danger">Visit Us</Button>
          </div>
        </Col>
        <Col>
          <img
            className="img-fluid"
            style={{height:"250px",width:"500px",borderRadius:"10px"}}
            src="https://st2.depositphotos.com/3889193/7173/i/950/depositphotos_71739083-stock-photo-healthy-vegetarian-home-made-food.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
