import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function SuggestMovies() {
  const [movie, setMovie] = useState<ReactElement<HTMLDivElement>>();

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=31742746c6e9901fb3322e0a9d7dddb2&query=fight`
      )
      .then((response: any) => {
        console.log(response);
        return setMovie(
          <Row>
            {response.data.results.slice(0, 4).map((filme: any, id: number) => (
              <Col md={6} key={id} style={{marginTop: '10px'}}>
                <Card style={{ height: '100%', padding: '10px' }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{`${filme.original_title}`}</Card.Title>
                    <Card.Text>{`${filme.overview}`}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        );
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <Container><Row><h1>Fight Movies:</h1></Row>{movie}</Container>;
}
