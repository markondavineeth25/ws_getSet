import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container>
      <Card>
        <Card.Body>
          <h1 className="text-success">Get Set</h1>
          <h2>Application to update and view the available times for a given guide</h2>
        </Card.Body>
      </Card>
    </Container>
  );
}
