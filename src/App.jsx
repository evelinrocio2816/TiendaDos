import './App.css'
import ItemListContainer from './components/ItemListeContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

import Contador from './components/Contador/Contador'


function App() {
  return (
    <>
    
    <NavBar/>
    
    <ItemListContainer greeting={"Alimentos para Tu Mascota"}/>
    
    <Footer/>
    </>
  )
}

export default App

