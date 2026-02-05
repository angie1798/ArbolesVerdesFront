import Home from '../pages/home';
import History from '../pages/history';
import AboutUs from '../pages/aboutUs';
import Donate from '../pages/donate';
import Layout from '../components/layout';
import ScrollToTop from '../components/scrolltotop';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Router (){
return( 
  <BrowserRouter>
   <ScrollToTop /> 
<Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="donate" element={<Donate />} />
      <Route path="history" element={<History />} />
    </Routes>
  </Layout>
  </BrowserRouter>
);
  }
  export default Router;