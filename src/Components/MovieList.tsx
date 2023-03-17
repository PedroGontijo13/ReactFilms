import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import ModalShow from "./ModalShow";
import Bond from "../assets/bond.webp";

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  vote_average: number;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get<{ results: Movie[] }>("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "31742746c6e9901fb3322e0a9d7dddb2",
        },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h1>Popular Movies</h1>
      <Row>
        {movies.map((movie) => (
          <Col md={6} key={movie.id} style={{ marginTop: "10px" }}>
            <Card bg="secondary" style={{ height: "100%", padding: "10px" }}>
              <Card.Img
                variant="top"
                src={
                  `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` ??
                  Bond
                }
              />
              <Card.Body>
                <Card.Title>{`${movie.title}`}</Card.Title>
                <Card.Text>{`${movie.overview}`}</Card.Text>
                <ModalShow
                  id={movie.id}
                  rating={movie.vote_average}
                  name={`${movie.title}`}
                  image={`${movie.backdrop_path}`}
                  content={`${movie.overview}`}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
