import { Card, Col, Container, Row } from "react-bootstrap";

export default function Avaliations() {
  return (
    <Container>
        <Row>
            <Col 
          style={{marginTop: "10px"}}>
                <h1>Avaliations:</h1>
            </Col>
        </Row>
      <Row>
        <Col style={{marginTop: '10px', marginBottom: '10px'}} md={4}>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Pedro Tolentino</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
                ★★★☆☆
            </Card.Body>
          </Card>
        </Col>
        <Col style={{marginTop: '10px', marginBottom: '10px'}} md={4}>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Pedro Tolentino</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
                ★★★☆☆
            </Card.Body>
          </Card>
        </Col>
        <Col style={{marginTop: '10px', marginBottom: '10px'}} md={4}>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Pedro Tolentino</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
                ★★★☆☆
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
