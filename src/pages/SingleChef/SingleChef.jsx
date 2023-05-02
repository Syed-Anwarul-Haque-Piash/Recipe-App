import React from "react";
import { Card, Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const SingleChef = () => {
  const chef = useLoaderData();
  console.log(chef);
  // const id=useParams();
  // console.log(id)
  return (
    <Container>
      <Card className="mt-5">
        <Card.Img variant="top" style={{height:"500px",width:"100%"}} src={chef.img} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleChef;
