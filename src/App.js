import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer';
import Categories from './components/Categories';
import Address from './components/Address';
import MainPageProducts from './components/MainPageProducts';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MainContent from './components/MainContent';
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (


      <>
      <Router>
        <MyNavbar />
          <Routes>
            <Route exact path='/' element={<MainContent />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route exact path='/signin/signup' element={<SignUp />} />
            <Route exact path='product-details' element={<ProductDetails/>}/>
          </Routes>
        </Router>
        <Footer/>
       </>
      
  );
}

export default App;
