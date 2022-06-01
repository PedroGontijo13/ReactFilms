import axios from "axios";
import React, { useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  Row,
  Col,
  Carousel,
  Modal,
} from "react-bootstrap";
import { Link } from "react-scroll";
import { Background1, Background2 } from "../styles";
import logo from "../assets/logo.png"

export default function Header({ onFormSubmit }: any): JSX.Element {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState<React.ReactElement<HTMLDivElement>>();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getMovie = (data: any) => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=31742746c6e9901fb3322e0a9d7dddb2&query=" +
          data.query
      )
      .then((response: any) => {
        return setMovie(
          <Background2>
            <Carousel>
              {response.data.results
                .slice(0, 3)
                .map((filme: any, id: number) => (
                  <Carousel.Item key={id} interval={1000}>
                    <Col>
                      <Card.Img
                        variant="top"
                        src={
                          "https://image.tmdb.org/t/p/w500/" +
                          filme.backdrop_path
                        }
                      />
                      <Card.Body>
                        <Card.Title>{filme.original_title}</Card.Title>
                        <Card.Text>{filme.overview}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Carousel.Item>
                ))}
            </Carousel>
          </Background2>
        );
      });
  };

  return (
    <header className="sticky-top">
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            ReactFilms
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Background1>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  ReactMovies
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    <Link
                      activeClass="active"
                      to="Home"
                      spy={true}
                      smooth={true}
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <Link
                      activeClass="active"
                      to="About"
                      spy={true}
                      smooth={true}
                    >
                      About
                    </Link>
                  </Nav.Link>
                </Nav>
                <Form
                  className="d-flex"
                  onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
                    event.preventDefault();
                    onFormSubmit({ query });
                    getMovie({ query });
                  }}
                >
                  <FormControl
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                    }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-primary"
                    type="submit"
                    onClick={handleShow}
                  >
                    Search
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Background1>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {movie}
        <Button variant="light" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </header>
  );
}
