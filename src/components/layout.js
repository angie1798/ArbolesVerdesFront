import NavBar from "./navbar";
import Footer from "./footer";
function Layout ({children}){
return(
    <>
    <div>
        <NavBar/>
    </div>
    {children}
    <div>
        <Footer/>
    </div>
    </>
);
}
export default Layout;