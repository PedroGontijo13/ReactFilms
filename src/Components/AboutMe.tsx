import { Col, Container, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    <div style={{margin: '5% 0'}}>
      <Container>
        <Row>
          <Col>
            <h1>About Me</h1>
            <p>
              Hello 👋, I'm Pedro Gontijo A passionate full-stack developer from
              Brazil living in Canada studying Web Development. Started
              self-taught studies in 2019 with a main focus on the web, starting
              with html and javascript. Currently I develop interfaces mainly
              with ReactJS and NodeJS. Mainly focused on the front end.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
