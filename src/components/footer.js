import { Container, Navbar, Nav } from "react-bootstrap";
import "../styles/style.css";
function Footer(){
return(
    <div>
        <Navbar className="bg-body-tertiary footer-style d-flex flex-column" sticky="bottom">
        <Container className="d-flex justify-content-center container-fluid m-0">
          <div className="poppins-medium brand-footer">
            ArbolesVerdes
          </div>
        </Container>
        <Container className="d-flex justify-content-center container-fluid  m-0">
        <Nav className="justify-content-center nav-footer">
        <Nav.Item>
          <Nav.Link className="nav-footer-text-color" href="/">INICIO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-footer-text-color" href="about-us">SOBRE NOSOTROS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-footer-text-color" href="donate">DONAR</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-footer-text-color" href="history">HISTORIA</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-footer-text-color" href="contact">CONTÁCTANOS</Nav.Link>
        </Nav.Item>
      </Nav>
        </Container>
        <Container className="d-flex justify-content-center container-fluid m-0 p-0">
          <div className="footer-line">
          </div>
        </Container>
        <Container className="d-flex justify-content-center container-fluid m-0 p-0">
          <div className="footer-copyright roboto-light">
          © 2024 Derechos Reservados Sembrando Arboles Verdes Nativos de Costa Rica Sociedad Anónima.

          </div>
        </Container>
      </Navbar>
    </div>
);
}
export default Footer;