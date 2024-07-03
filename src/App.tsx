import './App.css';
import { Footer, Header } from './components';
import { Contact, Home, AboutUs, Shop, Favorites, Cart } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
