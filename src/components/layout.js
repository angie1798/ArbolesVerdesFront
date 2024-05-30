import NavBar from "./navbar";
function Layout ({children}){
return(
    <>
    <div>
        <NavBar/>
    </div>
    {children}
    </>
);
}
export default Layout;