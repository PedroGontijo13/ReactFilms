import { Carousel, Col, Container, Image } from "react-bootstrap";
import { ContentArea, HideArea } from "../styles";

type IconProps = {
  text: string;
  name: string;
  srcImg: string;
};

export default function ItemCarousel(props: IconProps) {
  return (
    <Container fluid>
      <Col sm={12} md={12}>
        <Image
          fluid
          style={{maxHeight: "650px"}}
          className="w-100 p-3"
          src={`https://image.tmdb.org/t/p/w500/${props.srcImg}`}
          alt="First slide"
        />
      </Col>
      <Col sm={12} md={12}>
        <Carousel.Caption>
          <ContentArea>
            <h3>{props.name}</h3>
            <HideArea>{props.text}</HideArea>
          </ContentArea>
        </Carousel.Caption>
      </Col>
    </Container>
  );
}
