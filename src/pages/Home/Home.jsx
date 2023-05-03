import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";



const Home = () => {
    const recipe=useLoaderData()
    console.log(recipe)
   
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

      <div style={{backgroundColor:"black"}}>
        <Row className="p-5 mt-5">
          <Col>
          <img src="https://wp.wp-preview.com/cookandmeal/cookandmeal-selector/wp-content/uploads/2021/07/Yammy-1.png" alt="" />
          <h1 className="text-white">CookAndMeal – Dish It Up.</h1>
          <p className="text-white">You will receive all demos + free lifetime updates + plugins + <br /> dedicated support from Power Elite Themeforest Author</p>
          </Col>
          <Col className="ms-3 mt-5">
          <h3 className="text-white">+ 6 Months Support Included</h3>
          <h3 className="text-white">+ All Demos</h3>
          <h3 className="text-white">+ All Plugins and Features</h3>
          <Button variant="warning">Purchase</Button>
          </Col>
        </Row>
      </div>
      

      <Row xs={1} md={2} lg={3} className="g-4 d-flex mt-5">
      {recipe.map(item=><Recipe  item={item} key={item.id}></Recipe>)}
      </Row>
      <div className="mb-5 p-5" style={{backgroundColor:"#eb4a36"}}>
        <h2 className="text-white text-center">Be the first to know about the latest deals, receive new trending recipes & more!</h2>
        <div className="d-flex">
        <input style={{backgroundColor:"#eb4a36",color:"white",border:"1px solid white",margin:"0 auto"}} className="text-white mx-auto" type="email" name="" id="" placeholder="Your email" />
        <Button variant="warning">Subscribe</Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
