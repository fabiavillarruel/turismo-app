import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ErrorPage from './components/ErrorPage'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarComponent/>            
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting='Bienvenidos'/>} />
          <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Seleccionaste la categoría:'/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContainer/>} />
          <Route path='/checkout' element={<Checkout/> }/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
