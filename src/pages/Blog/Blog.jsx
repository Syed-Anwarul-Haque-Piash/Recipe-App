import React from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import ReactToPdf from 'react-to-pdf';

const Blog = () => {
  const ref = React.createRef();
  return (
    <Container className="mb-5">
      <h2 className="text-center">Website Blog Page</h2>
      <CardGroup ref={ref}>
        <Card>
          <Card.Body>
            <Card.Title>
              Tell us the differences between uncontrolled and controlled
              components.
            </Card.Title>
            <Card.Text>
              In React, controlled components refer to components that have
              their state and behavior controlled by the parent component.
              Uncontrolled components refer to components that manage their own
              state internally.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>How to validate React props using PropTypes</Card.Title>
            <Card.Text>
              We combine components into an app by passing data from parent
              components to child components. To do this, we pass data with
              props. We can validate props types by installing prop-types
              library.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              Tell us the difference between nodejs and express js.
            </Card.Title>
            <Card.Text>
              Node js is a javascript package which provides javascript run-type
              environment. And express js is a nodejs framework.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              What is a custom hook, and why will you create a custom hook?
            </Card.Title>
            <Card.Text>
              Custom React JS hooks offer reusability as when a custom hook is
              created, it can be reused easily, which makes the code cleaner and
              reduces the time to write the code.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <ReactToPdf targetRef={ref} filename="blog.pdf" x={10} y={10} scale={.5}>
                {({ toPdf }) => (
                    <Button className="mt-3" variant="success" onClick={toPdf}>Download Blog PDF</Button>
                )}
            </ReactToPdf>
    </Container>
  );
};

export default Blog;
