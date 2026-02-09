import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/style.css";
import { useLocation, useNavigate, NavLink } from 'react-router-dom';

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [textStyle, setTextStyle] = useState("navbar-text-home");
  const [textStyleBrand, setTextStyleBrand] = useState("navbar-text-home-brand");
  const [backgroundStyle, setBackgroundStyle] = useState("navbar-custom-background-home");
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   setSelected(location.pathname);
  //   if (location.pathname !== "/") {
  //     setTextStyle("navbar-text-color");
  //     setTextStyleBrand("navbar-text-color-brand");
  //   }
  //   else {
  //     setTextStyle("navbar-text-home");
  //     setTextStyleBrand("navbar-text-home-brand");
  //   }
  // }, [location.pathname]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 800) {
  //       setTextStyle("navbar-text-color");
  //       setTextStyleBrand("navbar-text-color-brand");
  //     } else {
  //       setTextStyle("navbar-text-home");
  //       setTextStyleBrand("navbar-text-home-brand");
  //     }
  //   };

  //   handleResize(); // Call it once on mount
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  useEffect(() => {
  const updateNavbarStyles = () => {
    const mobile = window.innerWidth < 800;

    setIsMobile(mobile);

    if (mobile) {
      setTextStyle("navbar-text-color");
      setTextStyleBrand("navbar-text-color-brand");
      setBackgroundStyle("");
    } else if (location.pathname === "/") {
      setTextStyle("navbar-text-home");
      setTextStyleBrand("navbar-text-home-brand");
      setBackgroundStyle("navbar-custom-background-home");
    } else {
      setTextStyle("navbar-text-color");
      setTextStyleBrand("navbar-text-color-brand");
      setBackgroundStyle("");
    }
  };

  // corre al montar y al cambiar ruta
  updateNavbarStyles();

  // escucha cambios de tamaño SIEMPRE
  window.addEventListener("resize", updateNavbarStyles);

  return () => window.removeEventListener("resize", updateNavbarStyles);
}, [location.pathname]);



  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const handleContactClick = (e) => {
    e.preventDefault();
    setExpanded(false);
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

  return (
    <div className="nav-custom-container w-100">
      <Navbar
        sticky="top"
        expand="lg"
        className={`bg-body-tertiary navbar-custom-background container-fluid justify-content-between ${backgroundStyle}`}
        expanded={expanded}
      >
        <Container className="a" >
          <Navbar.Brand href="/" className={`poppins-medium ${textStyleBrand}`}>
            ArbolesVerdes
          </Navbar.Brand>
        </Container>
        <Container className="b roboto-medium">
          <Navbar.Toggle aria-controls="basic-navbar-nav " onClick={() => setExpanded(expanded ? false : true)}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`justify-content-end`} variant="underline">
              <Nav.Link as={NavLink} to="/" className={`${textStyle} ${selected==='/' && isMobile ? 'welcome-selected' : ''}`}>
  INICIO
</Nav.Link>

<Nav.Link as={NavLink} to="/about-us" className={`${textStyle} ${selected==='/about-us' ? 'item-selected' : ''}`}>
  SOBRE NOSOTROS
</Nav.Link>

<Nav.Link as={NavLink} to="/donate" className={`${textStyle} ${selected==='/donate' ? 'item-selected' : ''}`}>
  DONAR
</Nav.Link>

<Nav.Link as={NavLink} to="/history" className={`${textStyle} ${selected==='/history' ? 'item-selected' : ''}`}>
  PROBLEMÁTICA
</Nav.Link>

              <Nav.Link className={`${textStyle}`} onClick={handleContactClick}>
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
