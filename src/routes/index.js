import Home from '../pages/home';
import Contact from '../pages/contact';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Router (){
return( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
  }
  export default Router;