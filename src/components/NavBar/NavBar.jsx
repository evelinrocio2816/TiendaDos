
import Cardwidget from "../Cardwidget/Cardwidget"
import "./NavBar.css"
import Logo from "../logo/Logo"
function NavBar() {
  return (
   <header>
    <Logo/>
    <h1>Tienda de Mascotas</h1>
   <Cardwidget/>
   </header>
  )
}

export default NavBar