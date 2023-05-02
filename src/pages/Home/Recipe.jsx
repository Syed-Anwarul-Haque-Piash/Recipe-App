import React from "react";
import { Button, Card,  Col, Container, Row } from "react-bootstrap";

const Recipe = ({ item }) => {
  const { chefName, img,bio,like,number,experience} = item;

  return (
    <Container>
      {/* <Row className="d-flex">
        <Col>
          <Card>
            <Card.Img
              style={{ height: "250px", width: "250px" }}
              variant="top"
              src={img}
            />
            <Card.Body>
              <Card.Title>{chefName}</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row> */}
      {/* <Row xs={1} md={2} lg={3} className="g-4 d-flex"> */}
      <Col className="mt-4 ">
          <Card>
            <Card.Img variant="top" style={{height:"200px",width:"100%"}} src={img} />
            <Card.Body className="text-secondary">
              <Card.Title className="text-dark">{chefName}</Card.Title>
              <Card.Text>
               {bio}
              </Card.Text>
              <Card.Text>
                {like} people like
              </Card.Text>
              <Card.Text>
                {experience} years of experience
              </Card.Text>
              <Card.Text>
                {number} item dishes
              </Card.Text>
              <Button variant="warning">View Recipe</Button>
            </Card.Body>
          </Card>
        </Col>
    {/* </Row> */}

    
    </Container>
  );
};

export default Recipe;
