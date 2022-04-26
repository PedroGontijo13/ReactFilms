import { Carousel } from "react-bootstrap";
import ItemCarousel from "./ItemCarousel";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";

export default function Banner() {
  const [movie, setMovie] = useState<ReactElement<HTMLDivElement>>();

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=31742746c6e9901fb3322e0a9d7dddb2&query=Cars`
      )
      .then((response: any) => {
        console.log(response);
        return setMovie(
          <div>
            <ItemCarousel
              srcImg={`${response.data.results[0].backdrop_path}`}
              name={`${response.data.results[0].original_title}`}
              text={`${response.data.results[0].overview}`}
            />
          </div>
        );
      });
  };
  
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Carousel>
      <Carousel.Item interval={1000}>{movie}</Carousel.Item>
    </Carousel>
  );
}
