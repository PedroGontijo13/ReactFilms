import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

type ModalProps = {
  name: string;
  image: string;
  content: string;
  rating: number
};

export default function ModalShow(props: ModalProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        See
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Card bg="secondary" style={{ height: "100%", padding: "10px" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${props.image}`}
          />
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title>{props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.content}
            <br />
            {Array.from({ length: props.rating }, (_, index) => (
              <span key={index}>&#9733;</span>
            ))}
            {Array.from({ length: 5 - props.rating }, (_, index) => (
              <span key={index + props.rating}>&#9734;</span>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Card>
      </Modal>
    </div>
  );
}
