import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const Home = () => {
    const recipe=useLoaderData()
    console.log(recipe)
    //const [recipe,setRecipe]=useState([]);
    // useEffect(()=>{
    //     fetch("http://localhost:5000/recipes")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setRecipe(data)
    //         console.log(data)
    //     })
    // },[])
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
      

      <Row xs={1} md={2} lg={3} className="g-4 d-flex mt-5">
      {recipe.map(item=><Recipe  item={item} key={item.id}></Recipe>)}
      </Row>
    </Container>
  );
};

export default Home;
