import { Col, Container, Image, Row } from "react-bootstrap";
import bond from "../assets/bond.webp";
import godzilla from "../assets/godzilla.webp";

export default function News() {
  return (
    <Container>
      <Row>
        <h1>Curiosities:</h1>
      </Row>
      <Row>
        <Row>
          <Col md={4}>
            <Image fluid src={bond} />
          </Col>
          <Col md={4}>
            <h1>007</h1>
            Prior to Cary Fukunaga coming aboard to helm No Time to Die, Daniel
            Craig’s fifth and final outing as James Bond, Yesterday’s Danny
            Boyle was attached to direct what was once simply known as Bond 25.
            Creative differences led to Boyle and writer John Hodge’s exit from
            the project, but that doesn’t mean he’s not interested in sharing
            his opinions on the 007 franchise anymore. In fact, he’s shared who
            he thinks should succeed Craig as Bond: Robert Pattinson.
          </Col>
          <Col md={3}>
            <h1>About</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            officiis iure autem error officia ad voluptas aliquid. Sequi autem
            adipisci repudiandae minus optio ducimus quaerat! Ipsum quibusdam ad
            molestias magni.
          </Col>
        </Row>
      </Row>
      <Row>
        <Row>
          <Col md={4}>
            <Image fluid src={godzilla} />
          </Col>
          <Col md={4}>
            <h1>Godzilla Vs. Kong 2</h1>
            At the end of March 2021, roughly a year after it was originally
            supposed to come out, Godzilla vs. Kong finally arrived in both
            theaters and on HBO Max. A month later, it was reported that Warner
            Bros. Pictures and Legendary Pictures were moving forward with a new
            MonsterVerse movie in response to Godzilla vs. Kong’s critical and
            commercial success, with Adam Wingard sitting back in the director’s
            chair. Today now brings word that what’s unofficially being referred
            to as Godzilla vs. Kong 2 has cast its first actor, and it’s someone
            that Wingard directed in one of his previous movies.
          </Col>
          <Col md={3}>
            <h1>CopyRigth</h1>
            Pedro Tolentino Gontijo - Computer Science - WebDevlopment
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
