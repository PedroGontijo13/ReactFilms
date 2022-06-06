import { Card, Col, Container, Row } from "react-bootstrap";

export default function Avaliations() {
  return (
    <Container>
      <Row>
        <Col style={{ marginTop: "10px" }}>
          <h1>Avaliations:</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "10px", marginBottom: "10px" }} md={4}>
          <Card style={{ height: "100%", padding: "10px" }} bg="secondary">
            <Card.Body>
              <Card.Title>Pedro Tolentino</Card.Title>
              <Card.Text>
                The page structure is very good, I just thought it lacked more
                movies.
              </Card.Text>
              ★★★☆☆
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginTop: "10px", marginBottom: "10px" }} md={4}>
          <Card style={{ height: "100%", padding: "10px" }} bg="secondary">
            <Card.Body>
              <Card.Title>Carlos Gontijo</Card.Title>
              <Card.Text>
                Great portal, game of very light colors, I liked it a lot.
              </Card.Text>
              ★★★★★
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginTop: "10px", marginBottom: "10px" }} md={4}>
          <Card style={{ height: "100%", padding: "10px" }} bg="secondary">
            <Card.Body>
              <Card.Title>Maria Eduarda</Card.Title>
              <Card.Text>
                I didn't really like having just a few fight movies on the
                banner.
              </Card.Text>
              ★★★☆☆
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
