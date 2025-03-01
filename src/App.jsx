import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'

function App() {

  const user = {
    name: 'Laura'
  }
  return (
    <>
      <NavbarComponent/>
      <ItemListContainer greeting='Bienvenida' nombreUsuario={user}/>
    </>
  )
}

export default App
