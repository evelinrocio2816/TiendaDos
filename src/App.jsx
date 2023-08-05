import './App.css'
import ItemListContainer from './components/ItemListeContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

import Contador from './components/Contador/Contador'

function App() {
  return (
    <>
    
    <NavBar/>
    <Contador/>
    <ItemListContainer greeting={"Hola Mundo esto es Greeting"}/>
    <Footer/>
    </>
  )
}

export default App

