
import './App.css';
import Navbar from './Components/Navebar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import banner_mens from './Components/Assets/banner_mens.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kids from './Components/Assets/banner_kids.png'

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
              <Route path='/man' element={<ShopCategory banner={banner_mens} category="men" />} />
              <Route path='/women' element={<ShopCategory banner={banner_women} category="women" />}/>
              <Route path='/child' element={<ShopCategory banner ={banner_kids} category="kid" />}/>

            </Routes>
            <Footer/>
          </BrowserRouter>
        </> 

  );
}

export default App;
