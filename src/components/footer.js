import { Container, Navbar, Nav } from "react-bootstrap";
import "../styles/style.css";
import { useLocation, useNavigate } from 'react-router-dom';

function Footer(){

  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    if(location.pathname!=='/donate'){
    navigate('/');
    }
    setTimeout(() => {
      const section = document.getElementById('contacto');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
return(
    <div>
        <Navbar className="bg-body-tertiary footer-style d-flex flex-column" sticky="bottom">
        <Container className="d-flex justify-content-center container-fluid m-0">
          <div className="poppins-medium brand-footer">
            ArbolesVerdes
          </div>
        </Container>
        <Container className="d-flex justify-content-center container-fluid  m-0 roboto-medium">
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
          <Nav.Link className="nav-footer-text-color" href="history">PROBLEMÁTICA</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-footer-text-color" onClick={handleContactClick}>CONTÁCTANOS</Nav.Link>
        </Nav.Item>
      </Nav>
        </Container>
        <Container className="d-flex justify-content-center container-fluid m-0 p-0">
          <div className="footer-line">
          </div>
        </Container>
        <Container className="d-flex justify-content-center container-fluid m-0 p-0">
          <div className="footer-copyright roboto-light">
          © 2024 Derechos Reservados Sembrando Árboles Verdes Nativos de Costa Rica Sociedad Anónima.
          </div>
        </Container>
      </Navbar>
    </div>
);
}
export default Footer;