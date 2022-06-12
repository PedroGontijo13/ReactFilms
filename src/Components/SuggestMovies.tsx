import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Card, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { PositionRigth } from "../styles";
import ModalShow from "./ModalShow";

export default function SuggestMovies() {
  const [movie, setMovie] = useState<ReactElement<HTMLDivElement>>();
  const [value, setValue] = useState<string>('');

  const handleSelect=(e: any)=>{
    console.log(e);
    setValue(e)
  }

  const getMovie = (data: { name: string }) => {
    if (data.name == null || data.name == "") {
      data.name = "fight"
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=31742746c6e9901fb3322e0a9d7dddb2&query=${data.name}`
      )
      .then((response: { data: { results: [] } }) => {
        return setMovie(
          <Row>
            {response.data.results.slice(0, 4).map(
              (
                filme: {
                  original_title: string;
                  overview: string;
                  backdrop_path: string;
                },
                id: number
              ) => (
                <Col md={6} key={id} style={{ marginTop: "10px" }}>
                  <Card
                    bg="secondary"
                    style={{ height: "100%", padding: "10px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{`${filme.original_title}`}</Card.Title>
                      <Card.Text>{`${filme.overview}`}</Card.Text>
                      <ModalShow
                        name={`${filme.original_title}`}
                        image={`${filme.backdrop_path}`}
                        content={`${filme.overview}`}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        );
      });
  };

  useEffect(() => {
    getMovie({ name: value });
  }, [value]);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Suggested Movies:</h1>
        </Col>
        <Col md={6}>
          <PositionRigth>
            <DropdownButton
              variant="secondary"
              title="Dropdown"
              id="input-group-dropdown-1"
              onSelect={handleSelect}
            >
              <Dropdown.Item href="#" eventKey="Car" name="Cars" value="Cars">Cars</Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Fight" value="Figths">Figths</Dropdown.Item>
              <Dropdown.Item href="#" eventKey="Love" value="Love">Love</Dropdown.Item>
            </DropdownButton>
          </PositionRigth>
        </Col>
      </Row>
      {movie}
    </Container>
  );
}
