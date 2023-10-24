
import './App.css';
import Navbar from './Components/Navebar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
function App() {
  return (
        <>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Shop/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/Product' element={<Product/>} >
                <Route path=':productId' element={<Product/>}/>
              </Route>
              <Route path='/man' element={<ShopCategory category="man" />} />
              <Route path='/women' element={<ShopCategory category="women" />}/>
              <Route path='/child' element={<ShopCategory category="child" />}/>

            </Routes>
          </BrowserRouter>
        </> 

  );
}

export default App;
