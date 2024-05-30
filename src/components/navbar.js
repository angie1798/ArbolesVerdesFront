import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/style.css";

function NavBar() {
  const [textStyle, setTextStyle] = useState("navbar-text-home");
  const [textStyleBrand, setTextStyleBrand] = useState("navbar-text-home-brand");
  const [selected, setSelected] = useState("");
  useEffect(() => {
    setSelected(window.location.pathname);
    if (window.location.pathname !== "/") {
      setTextStyle("navbar-text-color");
      setTextStyleBrand("navbar-text-color-brand");
    } else {
      setTextStyle("navbar-text-home");
      setTextStyleBrand("navbar-text-home-brand");
    }
  }, [window.location.pathname]);

  return (
    <div className="nav-custom-container w-100">
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar-custom-background container-fluid justify-content-between"
      >
        <Container className="a" >
          <Navbar.Brand href="/" className={`poppins-medium ${textStyleBrand}`}>
            ArbolesVerdes
          </Navbar.Brand>
        </Container>
        <Container className="b roboto-medium">
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`justify-content-end`} variant="underline">
              <Nav.Link className={`${textStyle} ${selected==='/'? 'welcome-selected':''}`} href="/">
                INICIO
              </Nav.Link>
              <Nav.Link className={`${textStyle} ${selected==='/about-us'? 'item-selected':''}`}  href="/about-us">
                SOBRE NOSOTROS
              </Nav.Link>
              <Nav.Link className={`${textStyle} ${selected==='/donate'? 'item-selected':''}`} href="/donate">
                DONAR
              </Nav.Link>
              <Nav.Link className={`${textStyle} ${selected==='/history'? 'item-selected':''}`} href="/history">
                HISTORIA
              </Nav.Link>
              <Nav.Link className={`${textStyle} ${selected==='/contact'? 'item-selected':''}`} href="/contact">
                CONTÁCTANOS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
