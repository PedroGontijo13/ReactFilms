import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import {Link} from 'react-scroll'

export default function Header() {
  return (
    <header className="sticky-top">
      <Navbar bg="light" expand={false}>
        <Container>
          <Navbar.Brand href="#">ReactMovies</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                ReactMovies
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1"><Link activeClass="active" to="Home" spy={true} smooth={true}>Home</Link></Nav.Link>
                <Nav.Link href="#action2"><Link activeClass="active" to="About" spy={true} smooth={true}>About</Link></Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
