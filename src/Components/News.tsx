import { Col, Container, Image, Row } from "react-bootstrap";

export default function News() {
    return(
        <Container>
            <Row>
                <h1>Curiosities:</h1>
            </Row>
            <Row>
                <Row>
                    <Col md={6}><Image src=""/></Col>
                </Row>
            </Row>
        </Container>
    )
}