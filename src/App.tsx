import './App.css';
import { Footer, Header } from './components';
import { Contact, Home, AboutUs, Products, Favorites, Cart } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GridDemo } from './pages/GridDemo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main className="main-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            {/* TO BE DELETED */}
            <Route path="/griddemo" element={<GridDemo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
