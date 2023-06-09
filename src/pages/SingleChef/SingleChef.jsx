import React, { useState } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Toaster, toast } from "react-hot-toast";


const SingleChef = () => {
  const chef = useLoaderData();
  //console.log(chef.recipe[0].ingredients);
  console.log(chef);
  const { chefName, id, bio, like, number, img, recipe, experience } = chef;
  const [disable,setDisable] = useState(false);
const handleFavourite = () =>{
    toast.success("Favourite button clicked");
    setDisable(true)
    
}
  return (
    <Container className="mb-5">
      <Card className="mt-5">
        <Card.Img
          variant="top"
          style={{ height: "500px", width: "100%" }}
          src={img}
        />
        <Card.Body className="text-secondary">
          <Card.Text className="text-dark">
            <h1>{chefName}</h1>
          </Card.Text>
          <Card.Text>
            <h3>{bio}</h3>
          </Card.Text>
          <Card.Text>
            <h3>{like} people like this</h3>
          </Card.Text>
          <Card.Text>
            <h3>{number} of item cooked</h3>
          </Card.Text>
          <Card.Text>
            <h3>{experience} years experienced</h3>
          </Card.Text>

          {recipe.map((r) => (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Recipe Name</th>
                  <th colSpan={5}>{r.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Ingredients</th>
                  {r.ingredients.map((i) => (
                    <td>{i}</td>
                  ))}
                </tr>
                <tr>
                  <th>Cooking Method</th>
                  {r.steps.map((s) => (
                    <td>{s}</td>
                  ))}
                </tr>
                <tr>
                  <th >Rating</th>
                  <td colSpan={5}>
                    {r.rating}
                    <Rating
                      placeholderRating={r.rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </td>
                </tr>
              </tbody>
            </Table>
          ))}
          
           <Button onClick={handleFavourite } disabled={disable} variant="success">Favourite</Button>
           <Toaster></Toaster>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleChef;
