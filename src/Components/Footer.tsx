import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { Footer1, FooterArea, IconsArea } from "../styles";

export default function Footer() {
  return (
    <footer>
      <FooterArea>
        <Footer1 className="footer mt-auto py-3 bg-light">
          <Container>
            <Row>
              <IconContext.Provider value={{ size: "2em" }}>
                <Col className="d-flex justify-content-center">
                  <IconsArea>
                    <a target="_blank" href="https://www.linkedin.com/in/pedro-tolentino-b08989204/">
                      <SiLinkedin />
                    </a>
                  </IconsArea>
                </Col>
                <Col className="d-flex justify-content-center">
                  <IconsArea>
                    <a target="_blank" href="https://www.github.com/PedroGontijo13">
                      <SiGithub />
                    </a>
                  </IconsArea>
                </Col>
                <Col className="d-flex justify-content-center">
                  <IconsArea>
                    <a target="_blank" href="#">
                      <SiInstagram />
                    </a>
                  </IconsArea>
                </Col>
              </IconContext.Provider>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <p>Copyright - PedroGont13</p>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <p>2022 - Vite app</p>
              </Col>
            </Row>
          </Container>
        </Footer1>
      </FooterArea>
    </footer>
  );
}
