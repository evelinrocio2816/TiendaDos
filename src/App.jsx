import './App.css'
import ItemListContainer from './components/ItemListeContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import NavLinks from './components/NavLinks/NavLinks'

function App() {
  return (
    <>
    
    <NavBar/>
    <NavLinks/>
    <ItemListContainer greeting={"Hola Mundo esto es Greeting"}/>
    <Footer/>
    </>
  )
}

export default App

