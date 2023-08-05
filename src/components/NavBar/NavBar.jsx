
import Cardwidget from "../Cardwidget/Cardwidget"
import "./NavBar.css"
import Logo from "../logo/Logo"
import NavLinks from "../NavLinks/NavLinks"
function NavBar() {
  return (
   <header>
    <Logo/>
    <div id="LinkTitulo">
     <h1>Tienda de Mascotas</h1>
    <NavLinks/>
    </div>
   
   <Cardwidget/>
   </header>
  )
}

export default NavBar