import { Carousel } from "react-bootstrap";

type IconProps = {
  text: string;
  name: string;
  srcImg: string;
};

export default function ItemCarousel(props: IconProps) {
  return (
    <div>
      <img
        className="d-block w-100"
        src={`https://image.tmdb.org/t/p/w500/${props.srcImg}`}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </Carousel.Caption>
    </div>
  );
}
